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

## 支持的类型

所有定义在 GraphQL schema 中的类型，都属于以下类别之一：

- [Scalar](#scalar)
- [Object](#object)
  - 对象包含 3 种特殊的**根操作类型**：[Query](#query-类型)、Muation 和 Subscription。
- Input
- Enum
- Union
- Interface

每一种在后文都有所描述。

### Scalar

Scalar 类型类似常用编程语言中的原始类型。它们总是解析为具体的数据类型。

GraphQL 默认的 scalar 类型有：

- `Int`：有符号 32-bit 整数
- `Float`：有符号 双精度 浮点数
- `String`：UTF-8 编码的字符串
- `Boolean`：`true`或者`false`
- `ID`(初始化为字符串)：一个常被用于获取对象或缓存键值的唯一标识。虽然被初始化为字符串，但`ID`并不是人类可读的。

这些原始类型覆盖了主要的使用场景。在更具体的场景中，可以创建 自定义 scalar 类型。

### Object

GraphQL schema 中，大多数自定义的类型，都是对象类型。一个对象类型包含了多个字段的集合，每个字段都拥有各自的类型。

两个 Object 类型可以互相包含彼此，作为各自字段的类型。例如我们之前示例所示：

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

#### \_\_typename 字段

每一个 schema 中的 Object 类型，都会自动包含一个名为`__typename`的字段。这个字段，会以`String`的形式，返回该 Object 类型的名称(例如：`Book`和`Author`)。

GraphQL 客户端 可以通过对象的`__typename`来完成很多事情，例如一个可以返回多类型的字段，决定返回何种类型(例如：union 或者 interface)。Apollo 客户端 依靠`__typename`来缓存查询结果，因此它会在每个查询的对象中，自动包含`__typename`字段。

因为`__typename`总是有效的，所以下边的查询是合法的：

```graphql
query UniversalQuery {
  __typename
}
```

### Query 类型

`Query`是一种特殊的 Object 类型，它定义了所有用于提供给客户端查询的顶级入口。

`Query`类型下的每一个字段定义了不同入口点的名字与返回类型。`Query`类型的例子类似下边这样：

```graphql
type Query {
  books: [Book]
  authors: [Author]
}
```

示例中的`Query`类型，定义了 2 个字段：`books` 和 `authors`。每个字段返回一个对应类型的列表。

使用基于 REST 的 API，books 和 authors 也许通过不同的端点返回(例如,`/api/books`和`/api/authors`)。GraphQL 的灵活性使得客户端可以用一个请求查询多种资源。

#### 构建一个查询

当客户端构建查询去查询你的 GraphQL 服务时，这些查询结果的数据结构与 schema 中定义类型的结构相符。

基于目前所见的示例，客户端可以执行下边的查询，一个查询同时获取一个全部 book 名的列表*和*一个全部作者名的列表。

```graphql
query GetBooksAndAuthors {
  books {
    title
  }

  authors {
    name
  }
}
```

我们的服务器将会返回符合查询结构的结果，就像这样：

```json
{
  "data": {
    "books": [
      {
        "title": "City of Glass"
      },
      ...
    ],
    "authors": [
      {
        "name": "Paul Auster"
      },
      ...
    ]
  }
}
```

虽然在某些场景，一次查询两个独立的列表可能是有用的，但是客户端或许更倾向于查询单独的 books 列表，并且每本书的作者名包含在返回结果中。

因为我们 schema 中的`Book`类型有一个`Author`类型的`author`字段，客户端可以使用下边的查询替代上边的查询：

```graphql
query GetBooks {
  books {
    title
    author {
      name
    }
  }
}
```

再一次，我们的服务器将会返回符合查询结构的结果：

```json
{
  "data": {
    "books": [
      {
        "title": "City of Glass",
        "author": {
          "name": "Paul Auster"
        }
      },
      ...
    ]
  }
}
```
