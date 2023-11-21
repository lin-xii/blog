---
title: Custom scalars
date: 2023-10-30
authors: lin-xii
tags: [Apollo, GraphQL, 渣翻译]
sidebar_position: 3
---

GraphQL 规范包含了默认的 scalar 类型，`Int`、`Float`、`String`、`Boolean` 和 `ID`。虽然这些 scalar 类型覆盖了大部分使用场景，但一些应用需要支持其他的原子数据类型（例如 `Date` ）或给现有的类型增加校验。为了满足这些场景，可以定义 custom scalar 类型来实现。

## 定义 custom scalar

将下面的语句添加到 schema 中，就可以定义一个 custom scalar 类型：

```graphql
scalar MyCustomScalar
```

你可以立刻使用 `MyCustomScalar`，在 schema 中可以使用默认 scalar 的地方(例如，对象字段的类型、input 类型的字段或者参数)。

不过，Apollo Server 需要知道如何处理新类型的值。

## 定义 custom scalar 的逻辑

在定义一个 custom scalar 类型后，需要定义 Apollo Server 如何处理这个类型。需要定义下面几点：

- scalar 的值如何在后端表示
  - This is often the representation used by the driver for your backing data store.
  - 这通常是驱动程序用于备份数据存储的表示形式。
- 值的后端表现形式如何序列化为兼容 JSON 的类型
- 兼容 JSON 的表现形式如何反序列化为后端的表现形式

在 `GraphQLScalarType` 类的实例中定义这些交互。

> 私货：表现形式，或许换成存储方式，更合适一点？

> 更多关于`graphql`库的类型系统，参考[官方文档](https://graphql.org/graphql-js/type/)

## 例子：`Date` scalar

> **下面的代码，默认使用 Typescript.**你可以使用每个代码块中的下拉菜单，切换到 JavaScript 的语言版本。
>
> 如果你正在使用 JavaScript，使用`.js`和`.jsx`文件扩展名而不是`.ts`和`.tsx`。

下面的 `GraphQLScalarType` 对象为一个展示日期（这是一个最常见的 custom scalar 实现方式）的 custom scalar 定义了处理逻辑。它假设我们的后端使用 JavaScript 的 `Date` 对象表达一个日期。

```javascript
import { GraphQLScalarType, Kind } from "graphql";

const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  // backend to frontend
  serialize(value) {
    if (value instanceof Date) {
      return value.getTime(); // Convert outgoing Date to integer for JSON
    }
    throw Error("GraphQL Date Scalar serializer expected a `Date` object");
  },
  // frontend to backend
  parseValue(value) {
    if (typeof value === "number") {
      return new Date(value); // Convert incoming integer to Date
    }
    throw new Error("GraphQL Date Scalar parser expected a `number`");
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      // Convert hard-coded AST string to integer and then to Date
      return new Date(parseInt(ast.value, 10));
    }
    // Invalid hard-coded value (not an integer)
    return null;
  },
});
```

这段初始化过程定了下面的方法：

- `serialize`
- `parseValue`
- `parseLiteral`

这些方法共同描述了 Apollo Server 在每一种场景下，如何与 scalar 进行交互。

### `serialize`

`serialize`方法将 scalar 的后端表达形式转换为兼容 JSON 的格式，使得 Apollo Server 可以将其包含在 operation 的响应中。

在前面的例子中，`Date`在后端以 JavaScript 的`Date`对象表示。当我们在 GraphQL 响应中发送一个`Date` scalar 时，我们通过 JavaScript `Date`对象的`getTime`函数，将其序列化为整形数值。

> 注意，Apollo 客户端无法自动解析 custom scalar([参考 issue](https://github.com/apollographql/apollo-feature-requests/issues/2))，所以你的客户端必须定义反序列化这个 scalar 值所需要的处理逻辑。

> 私货：这个反序列化的逻辑，是怎么应用到 client 的？方法应该是在 server 定义的

### `parseValue`

在 scalar 的 JSON 值被添加到 resolver 的`args`之前，`parseValue`方法将其转换为后端表示形式。

当客户端将 scalar 作为 GraphQL 变量传递给一个参数时，Apollo Server 会调用这个方法。(当 scalar 在 operation string 中，作为硬编码提供给参数时，会调用`parseLiteral`)

> 私货：operation string，指的是 operation 的字符串表达形式，类似下边的示例：

```graphql
query GetBooks {
  books {
    title
    author
  }
}
```

### `parseLiteral`

当传入的查询字符串包含硬编码的 scalar 参数时，该值是查询文档的抽象语法树(AST)的一部分。Apollo Server 调用`parseLiteral`方法将该值的 AST 表示形式转换为 scalar 的后端表示形式。

[在前面的例子中](https://www.apollographql.com/docs/apollo-server/schema/custom-scalars/#example-the-date-scalar)，`parseLiteral`将 AST 值从字符串转换为整数，然后从整形转换到`Date`，以符合`parseValue`的结果。

## 给 Apollo Server 提供 custom scalar

> 在下面的例子中，我们使用顶层的 await 调用去异步起动服务器。如果你想看怎样配置这些，可以查看 [Getting Started](https://www.apollographql.com/docs/apollo-server/getting-started#step-2-install-dependencies) 以了解更多。

在定义`GraphQLScalarType`实例后，将其囊括在含有 schema 其他类型和字段的 resolver 的 resolver map 中。

```typescript
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { GraphQLScalarType, Kind } from "graphql";

const typeDefs = `#graphql
  scalar Date

  type Event {
    id: ID!
    date: Date!
  }

  type Query {
    events: [Event!]
  }
`;

const dateScalar = new GraphQLScalarType({
  // See definition above
});

const resolvers = {
  Date: dateScalar,
  // ...other resolver definitions...
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);

console.log(`🚀 Server listening at: ${url}`);
```

## 例子：限制整数为奇数

在这个例子中，我们创建一个名为`Odd`的 custom scalar，它只接受奇数：

```typescript
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { GraphQLScalarType, Kind, GraphQLError } from "graphql";

// Basic schema
const typeDefs = `#graphql
  scalar Odd

  type Query {
    # Echoes the provided odd integer
    echoOdd(odd: Odd!): Odd!
  }
`;

// Validation function for checking "oddness"
function oddValue(value: number) {
  if (typeof value === "number" && Number.isInteger(value) && value % 2 !== 0) {
    return value;
  }
  throw new GraphQLError("Provided value is not an odd integer", {
    extensions: { code: "BAD_USER_INPUT" },
  });
}

const resolvers = {
  Odd: new GraphQLScalarType({
    name: "Odd",
    description: "Odd custom scalar type",
    parseValue: oddValue,
    serialize: oddValue,
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return oddValue(parseInt(ast.value, 10));
      }
      throw new GraphQLError("Provided value is not an odd integer", {
        extensions: { code: "BAD_USER_INPUT" },
      });
    },
  }),
  Query: {
    echoOdd(_, { odd }) {
      return odd;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);

console.log(`🚀 Server listening at: ${url}`);
```

## 导入第三方的 custom scalar

如果其他的库定义了 custom scalar，你可以导入并像其他类型一样使用它。

举个例子，`graphql-type-json`包定义了`GraphQLJSON`对象，它是`GraphQLScalarType`的一个实例。你可以使用这个对象去定义一个只接受有效 JSON 值的`JSON`scalar。

首先，安装库：

```shell
$ npm install graphql-type-json
```

然后，像往常一样，将`GraphQLJSON`对象导入并添加到 resolver map 中：

```typescript
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import GraphQLJSON from "graphql-type-json";

const typeDefs = `#graphql
  scalar JSON

  type MyObject {
    myField: JSON
  }

  type Query {
    objects: [MyObject]
  }
`;

const resolvers = {
  JSON: GraphQLJSON,
  // ...other resolvers...
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);

console.log(`🚀 Server listening at: ${url}`);
```
