---
title: Context and contextValue
date: 2023-11-02
author: lin-xii
tags: [Apollo, GraphQL, 渣翻译]
sidebar_position: 2
---

在 GraphQL operation 执行期间，通过创建名为`contextValue`的对象，可以在服务器的 [resolver](https://www.apollographql.com/docs/apollo-server/data/resolvers) 和 [plugin](https://www.apollographql.com/docs/apollo-server/builtin-plugins) 之间共享数据。

可以通过`contextValue`传递 resolver 可能需要的数据，例如[身份信息认证范围](https://www.apollographql.com/docs/apollo-server/security/authentication#putting-authenticated-user-info-in-your-contextvalue)、[源数据](https://www.apollographql.com/docs/apollo-server/data/fetching-data)、数据库连接和自定义 fetch 函数。如果在 resolver 之间使用 [dataloader](https://www.apollographql.com/docs/apollo-server/data/fetching-data/#batching-and-caching) 执行批量请求，也可以将它们赋值给`contextValue`。

## `context`函数

> Apollo Server 4 变更了定义`context`函数的语法。更多信息参考[more details](https://www.apollographql.com/docs/apollo-server/migration/#context-initialization-function)。

`context`函数是异步的，并且返回一个**对象**。服务器的 resolver 和 plugin 可以使用`contextValue`访问这个对象。

可以传递`context`函数给选择(例如`expressMiddleware`或`startStandaloneServer`)的内置函数。

服务器在每个请求都会调用一次`context`函数，使得可以定制每一次请求细节的`contextValue`(例如 HTTP headers)。

```javascript
import { GraphQLError } from "graphql";

const resolvers = {
  Query: {
    // Example resolver
    adminExample: (parent, args, contextValue, info) => {
      if (contextValue.authScope !== ADMIN) {
        throw new GraphQLError("not admin!", {
          extensions: { code: "UNAUTHENTICATED" },
        });
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  // Your async context function should async and
  // return an object

  context: async ({ req, res }) => ({
    authScope: getScope(req.headers.authorization),
  }),
});
```

> 前面的例子假设你正在使用`startStandaloneServer`或`expressMiddleware`，它们都使用 Express 作为基础库。
> 如果你[使用不同的框架](https://www.apollographql.com/docs/apollo-server/integrations/integration-index)，`context`函数接收的参数也许不同。

如果你正在使用 Typescript，且通过向`ApolloServer`传递一个带类型的参数来键入 context(也就是说，你不使用`ApolloServer<BaseContext>`)，你*必须*提供名为`context`的函数。

因为`context`初始化函数是异步的，所以可以使用它去建立数据库连接并等待其他操作完成。

```typescript
context: async () => ({
  db: await client.connect(),
})

// Resolver
(parent, args, contextValue, info) => {
  return contextValue.db.query('SELECT * FROM table_name');
}
```

### 抛出错误

默认情况下，如果`context`函数抛出一个错误，Apollo Server 会在 JSON 响应中返回该错误，并带有 500 HTTP 状态代码。如果这个错误不是`GraphQLError`，错误信息的前缀带有`Context creation failed: `。

你可以通过抛出带有 [http 扩展](https://www.apollographql.com/docs/apollo-server/data/errors/#setting-http-status-code-and-headers)的`GraphQLError`，来修改错误信息中的 HTTP 状态码。例如：

```typescript
context: async ({ req }) => {
  const user = await getUserFromReq(req);
  if (!user) {
    throw new GraphQLError('User is not authenticated', {
      extensions: {
        code: 'UNAUTHENTICATED',
        http: { status: 401 },
      }
    });
  }

  // If the below throws a non-GraphQLError, the server returns
  // `code: "INTERNAL_SERVER_ERROR"` with an HTTP status code 500, and
  // a message starting with "Context creation failed: ".
  const db = await getDatabaseConnection();

  return { user, db };
},
```

## `contextValue`对象

`context`函数返回一个`contextValue`对象，它可以被 plugin 和 resolver 访问。

### resolver

> **resolver 永远不该破坏性的修改`contextValue`参数。**这样可以确保 resolver 之间的一致性并减少非预期的错误。

resolver 通过第三个参数，可以访问共享的`contextValue`对象。所有为特定 operation 执行的 resolver 都可以访问`contextValue`：

```javascript
import { AnimalAPI } from "./datasources/animals";

const resolvers = {
  Query: {
    // All of our resolvers can access our shared contextValue!
    dogs: (_, __, contextValue) => {
      return contextValue.dataSources.animalApi.getDogs();
    },
    cats: (_, __, contextValue) => {
      return contextValue.dataSources.animalApi.getCats();
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async () => {
    const animalApi = new AnimalAPI();
    return {
      dataSources: {
        animalApi,
      },
    };
  },
});
```

### plugin

内置的和[自定义 plugin](https://www.apollographql.com/docs/apollo-server/integrations/plugins/#the-anatomy-of-a-plugin) 通过请求[生命周期函数](https://www.apollographql.com/docs/apollo-server/integrations/plugins/#inspecting-request-and-response-details)，都可以访问`contextValue`，像下面这样：

```javascript
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      hello: (root, args, { token }) => {
        return token;
      },
    },
  },
  //highlight-start
  plugins: [
    {
      async requestDidStart({ contextValue }) {
        // token is properly inferred as a string
        console.log(contextValue.token);
      },
    },
  ],
  //highlight-end
});

const { url } = await startStandaloneServer(server, {
  context: async ({ req, res }) => ({
    token: await getTokenForRequest(req),
  }),
});
```
