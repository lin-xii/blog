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

## 字段定义

在 schema 中，大部分自定义的类型，都有一个或多个字段。

```graphql
# This Book type has two fields: title and author
type Book {
  title: String # returns a String
  author: Author # returns an Author
}
```

每个字段都会返回类型定义的数据。一个字段返回的类型，可以是 scalar、object、enum、union 或者 interface。

### 字段列表

一个字段可以返回一个包含特定类型项目的**列表**。可以用`[]`来声明字段列表，就像这样：

```graphql
type Author {
  name: String
  books: [Book] # A list of Books
}
```

### 字段能否为 null

默认情况下，除非特殊声明，在 schema 中定义的字段，都是可以返回`null`的。你可以通过在字段定义中添加`!`来声明字段不能为`null`，就像这样：

```graphql
type Author {
  name: String! # Can't return null
  books: [Book]
}
```

name 字段**不能返回**`null`。如果你的 GraphQL 服务尝试返回`null`，将会抛出一个错误。

#### 列表能否为 null

在字段列表中，`!`可以出现在两个位置：

```graphql
type Author {
  books: [Book!]! # This list can't be null AND its list *items* can't be null
}
```

- 如果`!`出现在方括号*内部*，意味着返回的列表中，*列表项*不能为`null`。
- 如果`!`出现在方括号*外部*，意味着返回的*列表本身*不能为`null`。
- 在*任何情况*下，字段列表都是可以返回一个*空*列表的
