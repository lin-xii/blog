---
title: Introspection 是个啥
date: 2023-11-10
authors: lin-xii
tags: [Apollo Server, GraphQL, Introspection]
---

Apollo Server 中，Introsepction 的简单介绍

<!-- truncate -->

## 是个啥

在 GraphQL 中，"introspection"是一种机制，它允许客户端查询 GraphQL server 的模式（schema）。通过 introspection，客户端可以知道服务器支持哪些类型、字段、查询和变更等。

当你在 Apollo Server 的构造函数中设置`introspection: true`时，你就启用了 introspection。这意味着客户端可以发送 introspection 查询来获取你的 GraphQL 模式的详细信息。

这在开发和测试环境中非常有用，因为它可以帮助你理解和调试你的 GraphQL API。然而，在生产环境中，出于安全考虑，你可能想要禁用 introspection，以防止未经授权的客户端获取你的模式的详细信息。

## 如何使用

在 GraphQL 中，你可以使用特殊的系统查询`__schema`和`__type`来进行 introspection 查询。以下是一些基本的 introspection 查询示例：

查询模式中所有类型的名字：

```graphql
query {
  __schema {
    types {
      name
    }
  }
}
```

查询特定类型的详细信息：

```graphql
query {
  # 请将`YourTypeName`替换为你想查询的类型的名字。
  __type(name: "YourTypeName") {
    name
    fields {
      name
      type {
        name
        kind
      }
    }
  }
}
```

查询 schema 中所有 query 的名字：

```graphql
query {
  __schema {
    queryType {
      fields {
        name
      }
    }
  }
}
```

这些 query 可以在任何 GraphQL client 中运行，例如 Apollo Client 或者 GraphQL Playground。只要你的 GraphQL server 启用了 introspection，这些 query 就可以工作。
