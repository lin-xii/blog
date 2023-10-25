---
title: GraphQL schema basics
date: 2023-10-25
authors: lin-xii
sidebar_label: Schema basics
tags: [Apollo, GraphQL, 渣翻译]
---

GraphQL 服务端 使用 **schema** 来描述数据结构。schema 划分了 **type** 和 **field** 的层次结构，这些 field 通常是存储在后端数据库中的。schema 还定义了客户端可以执行的 **queries** 和 **mutations**。

这篇文章介绍了 schema 的基本概念，以及如何创建一个 GraphQL 服务端。

## The schema definition language

GraphQL 规范 定义了方便人们阅读的 **schema definition language**(**SDL**)，SDL 用来定义 schema 的结构并且以字符串的形式存储。

这是一个简短的 schema 示例，包含了 2 种对象类型：Book 和 Author：

```graphql
type Book {
  title: String
  author: Author
}

type Author {
  name: String
  books: [Book]
}
```

schema 定义了类型的集合和它们之间的关系。在上面的例子中，一本 Book 可以与一位 Author 关联，并且一位 Author 可以关联多本 Book。

因为这些关系被定义在统一、规范的 schema 中，客户端开发人员能够知道哪些数据是可用的，还可以在一个精简的 query 中查询到需要的数据。

注意，schema **不定义**数据的来源与存储方式。schema 与实现完全无关。
