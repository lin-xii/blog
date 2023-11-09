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

## 翻译

GraphQL 规范没有强制要求命名规范。不过，建立命名规范有助于确保一致性。我们建议使用以下约定：

- **字段名称**：`camelCase`。许多 GraphQL 客户端是用 JavaScript、Java、Kotlin 或者 Swift 开发的，这些语言中，变量通常使用驼峰命名法。
- **枚举值**：`ALL_CAPS`。枚举值和常量比较相似。
- **类型名称**：`PascalCase`。JavaScript 等语言，类名通常使用帕斯卡命名法。
- **枚举名称**：`PascalCase`。

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
