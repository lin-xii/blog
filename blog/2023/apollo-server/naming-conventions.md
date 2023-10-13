---
title: GraphQL schema 命名习惯
date: 2023-10-13
authors: lin-xii
tags: [Apollo Server, GraphQL, Naming]
---

看了遍官方文档，总结了些常用的命名习惯。

<!-- truncate -->

## TL;DR

GraphQL 规范并没有强制要求命名规范，但建议遵循以下规则：

- **Field names**: `camelCase`
- **Enum values**: `ALL_CAPS`
- **Type names**: `PascalCase`
- **Enum names**: `PascalCase`

## Original docs

The GraphQL specification is flexible and doesn't impose specific naming guidelines. However, it's helpful to establish a set of conventions to ensure consistency across your organization. We recommend the following:

- **Field names** should use `camelCase`. Many GraphQL clients are written in JavaScript, Java, Kotlin, or Swift, all of which recommend camelCase for variable names.
- **Type names** should use `PascalCase`. This matches how classes are defined in the languages mentioned above.
- **Enum names** should use `PascalCase`.
- **Enum values** should use `ALL_CAPS`, because they are similar to constants.

These conventions help ensure that most clients don't need to define extra logic to transform the results returned by your server.

## 参考资料

1. [Apollo Server Docs](https://www.apollographql.com/docs/apollo-server/schema/schema#naming-conventions)
2. [GraphQL Spec](https://github.com/graphql/graphql-spec)
