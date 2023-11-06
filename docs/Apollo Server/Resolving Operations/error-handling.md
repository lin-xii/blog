---
title: Error handling
date: 2023-11-03
author: lin-xii
tags: [Apollo, GraphQL, 渣翻译]
sidebar_position: 3
---

> Apollo Server v4 介绍了一种回退的变化，提供无效变量会产生了一个 200 状态码而非 400。为了缓解这种情况，提供`status400ForVariableCoerctionErros: true`选项给`ApolloServer`构造函数。更多信息，参考[migration guide](https://www.apollographql.com/docs/apollo-server/migration/#known-regressions)

Apollo Server 在处理 GraphQL operation 遇到错误时，它返回给客户端的响应中带有一个`errors`数组，这个数组包含了每一个出现的错误。每一个在数组中的错误，都有一个提供了额外有效信息的`extensions`字段，包括错误`code`和`stacktrace`(仅在开发模式下)。

这里有一个错误响应的例子，在一个 query 中错误拼写`__typename`字段：

```json
{
  "errors": [
    {
      "message": "Cannot query field \"__typenam\" on type \"Query\".",
      "locations": [
        {
          "line": 1,
          "column": 2
        }
      ],
      "extensions": {
        "code": "GRAPHQL_VALIDATION_FAILED",
        "stacktrace": [
          "GraphQLError: Cannot query field \"__typenam\" on type \"Query\".",
          "    at Object.Field (/my_project/node_modules/graphql/validation/rules/FieldsOnCorrectTypeRule.js:48:31)",
          "    ...additional lines..."
        ]
      }
    }
  ]
}
```

为了帮助调试，Apollo Server 提供了一个名为`ApolloServerErrorCode`的枚举，你可以用它来检查你的错误是否为 [Apollo Server 产生的不同类型](https://www.apollographql.com/docs/apollo-server/data/errors#built-in-error-codes)中的一个。

你能够通过检查错误的`code`来判断出现的原因，也可以添加逻辑去响应不同类型的错误，例如：

```typescript
import { ApolloServerErrorCode } from "@apollo/server/errors";

if (error.extensions?.code === ApolloServerErrorCode.GRAPHQL_PARSE_FAILED) {
  // respond to the syntax error
} else if (error.extensions?.code === "MY_CUSTOM_CODE") {
  // do something else
}
```

Apollo Server 丰富的错误代码使得发起请求的客户端能对不同类型的错误作出不同的响应。你也可以[创建自定义错误和代码](https://www.apollographql.com/docs/apollo-server/data/errors#custom-errors)。

## 内置错误码

| 错误码                          | 描述                                                                                                                                                                                                                                                    |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GRAPHQL_PARSE_FAILED`          | 这个 GraphQL operation 的字符串中包含语法错误                                                                                                                                                                                                           |
| `GRAPHQL_VALIDATION_FAILED`     | 这个 GraphQL operation 相对于服务器的 schema 是无效的                                                                                                                                                                                                   |
| `BAD_USER_INPUT`                | 这个 GraphQL operation 某个字段的参数包含无效的值                                                                                                                                                                                                       |
| `PERSISTED_QUERY_NOT_FOUND`     | 客户端发送了 query 字符串的 hash，通过 automatic persisted queries (APQ)去执行，但是这个 query 没有在 APQ 缓存中                                                                                                                                        |
| `PERSISTED_QUERY_NOT_SUPPORTED` | 客户端发送了 query 字符串的 hash，通过 automatic persisted queries (APQ)去执行，但是服务器禁用了 APQ。                                                                                                                                                  |
| `OPERATION_RESOLUTION_FAILURE`  | 这个请求成功通过了语法分析并且相对于服务器的 schema 也是有效的，但是服务器无法解析要运行哪一个 operation。这个错误出现在一个请求包含多个命名 operation 但没有明确哪一个 operation 要运行的时候(也就是`operationName`)或者请求中没有包含命名 operation。 |
| `BAD_REQUEST`                   | 一个出现在服务器尝试对接收的 GraphQL operation 进行语法解析之前的错误。                                                                                                                                                                                 |
| `INTERNAL_SERVER_ERROR`         | 出现不确定的错误。当 Apollo Server 在一个响应中格式化错误信息时，如果没有设置其他错误码，它会将代码扩展设置为这个错误码。                                                                                                                               |

## Custom error

你可以使用`graphql`包的`GraphQLError`创建 custom error 和 code，像下面这样：

```typescript
import { GraphQLError } from "graphql";

throw new GraphQLError(message, {
  extensions: { code: "YOUR_ERROR_CODE", myCustomExtensions },
});
```

custom error 可以提供额外的 context，使客户端能够理解错误发生的*原因*。我们建议明确场景对应的错误信息。例如，当一个用户没有登录(`UNAUTHENTICATED`)，或者某人被禁止执行操作：

```typescript
import { GraphQLError } from "graphql";

throw new GraphQLError("You are not authorized to perform this action.", {
  extensions: {
    code: "FORBIDDEN",
  },
});
```

## Throwing error

Apollo Server 在适当的时候，自动地抛出错误。举个例子，当传入的 operation 相对于服务器的 schema 无效时，它抛出`GRAPHQL_VALIDATION_FAILED`错误。

在 Apollo Server 不会自动抛出错误的情况下,你的 resolver 也可以主动抛出错误。

举个例子，这个 resolver 抛出一个 custom error，如果提供给 user 的 ID 的数值小于`1`:

```javascript
import { GraphQLError } from "graphql";

const typeDefs = `#graphql
  type Query {
    userWithID(id: ID!): User
  }

  type User {
    id: ID!
    name: String!
  }
`;

const resolvers = {
  Query: {
    userWithID: (_, args) => {
      if (args.id < 1) {
        throw new GraphQLError("Invalid argument value", {
          extensions: {
            code: "BAD_USER_INPUT",
          },
        });
      }

      // ...fetch correct user...
    },
  },
};
```

如果 resolver 抛出一个不是`GraphQLError`的普通错误，这个错误仍然会带着包含`stackTrace`信息的`extension`字段和`code`抛出(特别是`INTERNAL_SERVER_ERROR`),以及其他相关的错误信息。

### 包含 custom error 细节

无论何时抛出`GraphQLError`，都可以添加任意字段到 error 的`extensions`对象以提供额外的上下文给客户端。你可以在传递给 error 构造函数的对象中指定这些字段。

这个例子以前面的示例的基础上，添加了无效 GraphQL 参数的名称：

```javascript
import { GraphQLError } from "graphql";

const typeDefs = `#graphql
  type Query {
    userWithID(id: ID!): User
  }

  type User {
    id: ID!
    name: String!
  }
`;

const resolvers = {
  Query: {
    userWithID: (_, args) => {
      if (args.id < 1) {
        throw new GraphQLError("Invalid argument value", {
          extensions: {
            code: "BAD_USER_INPUT",
            argumentName: "id",
          },
        });
      }
      // ...fetch correct user...
    },
  },
};
```

这个响应结果类型下面这样：

```json
{
  "errors": [
    {
      "message": "Invalid argument value",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": ["userWithID"],
      "extensions": {
        "code": "BAD_USER_INPUT",
        "argumentName": "id",
        "stacktrace": [
          "GraphQLError: Invalid argument value",
          "    at userWithID (/my-project/index.js:25:13)",
          "    ...more lines..."
        ]
      }
    }
  ]
}
```

## 省略或包含`stackTrace`

当开发或调试服务的时候，`stackTrace`字段很有帮助，但是你或许不想将这些信息暴露给在生产环境的客户端。

默认情况下，如果`NODE_ENV`环境变量设置为`production`或`test`，Apollo Server 会省略`stackTrace`字段。

通过传递`includeStacktraceInErrorResponse`选项给`Apollo Server`的构造函数，你可以覆盖默认行为。如果`includeStacktraceErrorResponse`设置为`true`,`stackTrace`永远都会被包含。如果设置为`false`，`stackTrace`永远被省略。

注意，当`stackTrace`被省略的时候，它对于你的应用同样不可用。要记录`stackTrace`的错误，且不在给客户端的响应中包含它们，参考 [屏蔽和记录错误](#屏蔽和记录错误)。

## 屏蔽和记录错误

你可以编辑 Apollo Server 错误详情，在它们被传递给客户端或报告给 Apollo Studio 之前。这使得你可以移除敏感或无关紧要的数据。

### 针对客户端响应

> 在前面的例子中，我们使用顶层的`await`异步起动我们的服务。如果你想了解如何配置，查看 [Getting Started](https://www.apollographql.com/docs/apollo-server/getting-started#step-2-install-dependencies) 以了解详细信息。

`ApolloServer`构造函数接收`formatError`hook，它运行在每一个错误被传递给客户端之前。你可以使用这个函数记录或屏蔽指定的错误。

`formatError`hook 接收 2 个参数：第一个是被格式化为 JSON 格式的错误对象(将随着响应被发送)，第二个参数是原始错误(如果由 resolver 抛出，则包装为`GraphQLError`)。

> `formatError`函数不会修改作为使用报告一部分被发送给 Apollo Studio 的错误。参考[For Apollo Studio resporting](https://www.apollographql.com/docs/apollo-server/data/errors/#for-apollo-studio-reporting)。

无论 Apollo Server 何时抛出`GRAPHQL_VALIDATION_FAILED`错误，下面的例子会返回一个对用户友好的信息：

```javascript
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServerErrorCode } from "@apollo/server/errors";

const server = new ApolloServer({
  typeDefs,
  resolvers,

  formatError: (formattedError, error) => {
    // Return a different error message
    if (
      formattedError.extensions.code ===
      ApolloServerErrorCode.GRAPHQL_VALIDATION_FAILED
    ) {
      return {
        ...formattedError,
        message: "Your query doesn't match the schema. Try double-checking it!",
      };
    }

    // Otherwise return the formatted error. This error can also
    // be manipulated in other ways, as long as it's returned.
    return formattedError;
  },
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server listening at: ${url}`);
```

另一个例子，无论何时，只要原始的错误信息以`Database Error: `开头，我们返回一个更普通的错误：

```javascript
formatError: (formattedError, error) => {
  if (formattedError.message.startsWith('Database Error: ')) {
    return { message: 'Internal server error' };
  }

  // Otherwise return the formatted error.
  return formattedError;
},
```

如果你想访问原始的报错(没有格式化为 JSON 的)，你可以使用`formateError`的第二个参数。

举个例子，如果你在应用中使用了一个 database 库，并且当服务抛出一个特定类型的数据库错误时，你希望做一些处理：

```javascript
formatError: (formattedError, error) => {
    if (error instanceof CustomDBError) {
      // do something specific
    }
  },
```

注意，如果*resolver*抛出一个错误，`GraphQLError`被包装在初试错误外层。`GraphQLError`整齐地格式化错误并且包含有用的字段，例如错误出现在哪里的`path`。

如果你想移除外层的`GraphQLError`以访问原始的错误，你可以从`@apollo/server/errors`引用`unwrapResolverError`。`unwrapResolverError`函数可以从 resolver 错误移除`GraphQLError`封装，如果这个错误不是 resolver 抛出的，则返回未修改的错误。

所以，我们可以重写前面的代码片段来处理 resolver 内部与外侧抛出错误，例如：

```javascript
import { unwrapResolverError } from "@apollo/server/errors";

new ApolloServer({
  formatError: (formattedError, error) => {
    // unwrapResolverError removes the outer GraphQLError wrapping from
    // errors thrown in resolvers, enabling us to check the instance of
    // the original error
    if (unwrapResolverError(error) instanceof CustomDBError) {
      return { message: "Internal server error" };
    }
  },
});
```

> 为了使特定的 context 适配通过`formatError`接收的错误(例如本地化和个性化)，考虑创建一个插件，它使用`didEncounterErrors`声明周期事件去添加额外的属性给这个错误。这些属性可以从`formatError`访问。

### For Apollo Studio reporting

> 在 Apollo Server 4 中：默认配置下，错误细节不会被包含在 trace 中。作为替代，`<masked>`替换每一个错误信息，并且`maskedBy`错误扩展替换其他扩展。`maskedBy`扩展包含了执行遮罩的插件名字(`ApolloServerPluginUsageReporting`或`ApolloServerPluginInlineTrace`)

你可以使用 Apollo Studio 来分析你服务的错误率。默认配置下，作为详细跟踪发送给 Studio 的 operation 不包含错误详细信息。

如果确实想将错误信息发送给 Studio，你可以发送每一个错误，在它们被传播前，你也可以修改或校对错误信息。

为了发送全部错误信息到 Studio，你可以传递`{ unmodified: true }`给`sendErrors`，像下面这样：

```javascript
new ApolloServer({
  // etc.
  plugins: [
    ApolloServerPluginUsageReporting({
      // If you pass unmodified: true to the usage reporting
      // plugin, Apollo Studio receives ALL error details
      sendErrors: { unmodified: true },
    }),
  ],
});
```

如果你想报告特定错误或在一个错误被报告前修改它，你可以传递函数给`sendErrors.trarnsform`配置，像下面这样：

```javascript
new ApolloServer({
  // etc.
  plugins: [
    ApolloServerPluginUsageReporting({
      sendErrors: {
        transform: (err) => {
          if (err.extensions.code === "MY_CUSTOM_CODE") {
            // returning null will skip reporting this error
            return null;
          }

          // All other errors are reported.
          return err;
        },
      },
    }),
  ],
});
```

> 如果你提供一个 Apollo API key 给 Apollo Server，usage reporting plugin 会作为默认配置自动安装。去定制 usage reporting plugin 的行为，你需要用定制化配置安装它，像下面的例子一样。
