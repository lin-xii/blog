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
  - 对象包含 3 种特殊的**根操作类型**：[Query](#query-类型)、[Muation](#mutation) 和 [Subscription](#subscription)。
- [Input](#input)
- Enum
- Union
- Interface

> 私货：其实，type 定义的，都可以算作 object。但是分为自定义类型，和 Query、Mutation、Subscription 这 3 种特殊的。input 定义的，结构上也算是 object，只是关键字换成了 input。

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

### Query

`Query`是一种特殊的 Object 类型，它定义了所有用于提供给客户端查询的顶级入口。

`Query`类型下的每一个字段定义了不同入口点的名字与返回类型。`Query`类型的例子类似下面这样：

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

### Mutation

在结构、作用上，`Mutation`类型与[`Query`类型](#query-类型)极为相似。不过`Query`类型定义的入口点服务于`read`操作，而`Mutation`类型定义的入口点服务于`write`操作。

`Mutation`类型的每一个字段，都定义了不同的入口点签名和返回类型。`Mutation`类型的示例类似于下面这样：

```graphql
type Mutation {
  addBook(title: String, author: String): Book
}
```

这个`Mutation`类型定义了一个可用的 mutation，`addBook`。这个 mutation 接受 2 个参数(`title`和`author`)并且返回一个新创建的`Book`对象。如你所想，这个`Book`对象的结构与 schema 定义中的相符。

#### 构造一个 mutation

类似 query，mutation 与 schema 类型定义的结构相符。下面的 mutation 创建了新的`Book`并且请求新建对象中部分的字段作为返回值。

```graphql
mutation CreateBook {
  addBook(title: "Fox in Socks", author: "Dr. Seuss") {
    title
    author {
      name
    }
  }
}
```

与查询一样，我们的服务器将用一个符合 Mutation 结构的结果，来相应这个 mutation。就像这样：

```json
{
  "data": {
    "addBook": {
      "title": "Fox in Socks",
      "author": {
        "name": "Dr. Seuss"
      }
    }
  }
}
```

单个 mutation 操作可以包括多个`Mutation`类型的顶层字段。这通常意味着一个 mutation 操作将执行多个后端的写入(每个字段至少一个)。为了阻止条件竞争，顶层`Mutation`字段按照顺序解析(所有其他字段可以被并行解析)。

[了解更多关于 mutation 的设计](https://www.apollographql.com/docs/apollo-server/schema/schema/#designing-mutations)

### Subscription

详情参考 [Subscriptions](https://www.apollographql.com/docs/apollo-server/data/subscriptions)

### Input

Input 类型 是一种特殊的 object 类型，它允许你提供结构化数据作为**参数**提供给字段(尽量不要平铺大量 scalar 类型 作为参数)。

Input 类型 的定义与普通 object 类型相似，但它的关键字为`input`：

```graphql
input BlogPostContent {
  title: String
  body: String
}
```

每一个 input 类型 的字段，可以是 [scalar](#scalar)、enum 或者*另一个* input 类型:

```graphql
input BlogPostContent {
  title: String
  body: String
  media: [MediaDetails!]
}

input MediaDetails {
  format: MediaFormat!
  url: String!
}

enum MediaFormat {
  IMAGE
  VIDEO
}
```

定义 input 类型 后，任意数量的不同对象字段可以将其作为参数：

```graphql
type Mutation {
  createBlogPost(content: BlogPostContent!): Post
  updateBlogPost(id: ID!, content: BlogPostContent!): Post
}
```

当多个操作需要相同信息集合的时候，input 类型 很有用，但你应该谨慎的复用它们。操作最终需要的参数也许会发生变化。

> **谨慎地同时在`Query`和`Mutation`的字段，使用相同的 input 类型。**在很多场景，mutation 所需的参数，相对于查询，是可选的。你也许想创建单独的 input 类型 用于每一个操作类型。

### Enum

> 私货：enum 属于缩小范围的 scalar。

enum 和 scalar 非常相似，但是它的合法值是在 schema 中被定义的。下面是一个定义的例子：

```graphql
enum AllowedColor {
  RED
  GREEN
  BLUE
}
```

当用户必须从指定列表的选项中选择一个值的时候，enum 非常有用。另外一个好处，enum 值在 Apollo Studio Explorer 等工具中，能够自动补全。

enum 可以用在任何允许声明为 scalar 类型的地方(包括字段参数)，因为 enum 被初始化为字符串：

```graphql
type Query {
  favoriteColor: AllowedColor # enum return value
  avatar(borderColor: AllowedColor): String # enum argument
}
```

一个查询看起来像这样：

```graphql
query GetAvatar {
  avatar(borderColor: RED)
}
```

#### 内部值(高级特性)

有些时候，后端强制 enum 内部使用一个与公开 API 不同的值。你可以在提供给 Apollo Server 的 [resolver map](https://www.apollographql.com/docs/apollo-server/data/resolvers/#defining-a-resolver) 中，设置每个 enum 值以符合*内部*值。

> 这个特性通常是不必要的，除非应用中另一个库，期望 enum 以不同的形式展示。

下面的示例使用十六进制颜色代码来作为`AllowedColor`的内部值：

```typescript
const resolvers = {
  AllowedColor: {
    RED: "#f00",
    GREEN: "#0f0",
    BLUE: "#00f",
  },
  // ...other resolver definitions...
};
```

这些内部值不影响公开 API。Apollo Server resolver 接收这些值而非 schema 中定义的值，如下所示：

```typescript
const resolvers = {
  AllowedColor: {
    RED: "#f00",
    GREEN: "#0f0",
    BLUE: "#00f",
  },
  Query: {
    favoriteColor: () => "#f00",
    avatar: (parent, args) => {
      // args.borderColor is '#f00', '#0f0', or '#00f'
    },
  },
};
```

### Union 和 interface

详情参考 [Unions and interfaces](https://www.apollographql.com/docs/apollo-server/schema/unions-interfaces/)

## schema 的迭代

随着项目的扩张和发展，graph 也会随之扩大。新产品和新功能需要更多的 schema 类型和字段。为了实时跟踪这些变化，你需要在版本库中维护 schema。

大多数增量变化对 schema 是安全的，并且可以向后兼容。然而，删除或者变更现有 schema 的行为可能会对 1 个或更多个客户端，造成破坏性变更。下面列出的变更是需要小心处理的破坏性变更：

- **删除**类型或字段
- **重命名**类型或字段
- 为字段添加**可以为 null **的特性
- **删除**字段的参数

Apollo Studio 这类的 graph 管理工具，可以帮助你判断一个潜在的 schema 变更，是否会影响你正在使用的客户端。Studio 同样提供了字段级别的性能指标、schema 历史追踪，并且通过 operation 的安全清单，提供高级安全特性。

## 描述(文档字符串)

GraphQL 的 schema definition language(SDL)支持 markdown 格式的文档字符串，称为**描述**。这些文档帮助 graph 的使用者了解字段并学习如何使用。

下面的示例展示了如何使用单行字符串字面量和多行字符块：

```graphql
"Description for the type"
type MyObjectType {
  """
  Description for field
  Supports **multi-line** description for your [API](http://example.com)!
  """
  myField: String!

  otherField(
    "Description for argument"
    arg: Int
  )
}
```

高度文档化的 schema 有助于提供更好的开发体验，因为 GraphQL 开发工具(例如 [Apollo GraphQL Exploer](https://www.apollographql.com/docs/studio/explorer/))自动补全字段名时，可以看到 schema 提供的描述。
而且，当[Apollo Studio](https://studio.apollographql.com/)使用性能监控和 client awareness features 时，会把描述与字段使用情况和性能指标一起展示出来。

## 命名习惯

GraphQL 规范 非常灵活，并且没有强制要求命名规范。不过，建立命名规范有助于确保一致性。我们建议使用以下约定：

- **字段名称**：`camelCase`。许多 GraphQL 客户端是用 JavaScript、Java、Kotlin 或者 Swift 开发的，这些语言中，变量通常使用驼峰命名法。
- **枚举值**：`ALL_CAPS`。枚举值和常量比较相似。
- **类型名称**：`PascalCase`。JavaScript 等语言，类名通常使用帕斯卡命名法。
- **枚举名称**：`PascalCase`。

这些习惯有助于确保大多数客户端不需要定义额外的逻辑去转换服务端返回的结果。

## 查询驱动 schema 设计

当 GraphQL schema 根据客户端执行 operation 的需求设计时，是最强大的。虽然*可以*自定义类型，但不必和后端数据存储的结构保持一致。一个对象类型的字段可以被任意数量、不同来源的数据填充。**基于数据使用方式设计 schema，而不是存储方式。**

如果你的数据存储方式包含客户端不需要的字段和关系，在 schema 中省略这些。与删除客户端正在使用的现有字段相比，向 schema 添加新字段更简单也更安全。

### 查询驱动 schema 的示例

我们正在创建一个展示即将到来的区域事件的 web 应用。我们希望这个应用展示名称、日期和每个事件的地点以及天气预报。

在这种情况下，我们希望我们的 web 应用能够执行类似下面结构的查询：

```graphql
query EventList {
  upcomingEvents {
    name
    date
    location {
      name
      weather {
        temperature
        description
      }
    }
  }
}
```

因为我们知道这份数据的结构对我们的客户端有帮助，因此它可以为我们 schema 的结构提供信息：

```graphql
type Query {
  upcomingEvents: [Event!]!
}

type Event {
  name: String!
  date: String!
  location: Location
}

type Location {
  name: String!
  weather: WeatherInfo
}

type WeatherInfo {
  temperature: Float
  description: String
}
```

如前所述，每一个类型可以填充不同来源的数据(或多个数据源的)。举个例子，`Event`类型的`name`和`date`也许被我们后端数据库的数据填充，而`WeatherInfo`类型使用第三方的天气 API 填充数据。

## 设计 mutation

在 GraphQL，建议所有 mutation 的返回值包含 mutation 修改的数据。这样可以使客户端获取最新的持久化数据而不用发送额外查询。

支持更新`User`的`email`的 schema，包括以下内容：

```graphql
type Mutation {
  # This mutation takes id and email parameters and responds with a User
  updateUserEmail(id: ID!, email: String!): User
}

type User {
  id: ID!
  name: String!
  email: String!
}
```

然后，客户端能够根据 schema 的结构，来执行 mutation：

```graphql
mutation updateMyUser {
  updateUserEmail(id: 1, email: "jane@example.com") {
    id
    name
    email
  }
}
```

在 GraphQL 服务器 执行 mutation 并且存储新邮件地址后，将给客户端返回以下结果：

```json
{
  "data": {
    "updateUserEmail": {
      "id": "1",
      "name": "Jane Doe",
      "email": "jane@example.com"
    }
  }
}
```

虽然不强制要求 mutation 的返回值中包含被修改的数据，但这样做可以更好的提升客户端代码的效率。和查询一样，明确 哪些 mutation 对客户端有用，有助于调整 schema 的结构。

### 构造 mutation 返回值

一个 mutation 可以修改多个类型，或者多个*相同*类型的实例。举个例子，使用户能够给博客文章点赞的 mutation 可能会[增加](https://www.apollographql.com/docs/apollo-server/schema/schema/#structuring-mutation-responses)一篇`Post`的`likes`数量并且更新用户的`likedPosts`列表。这使得 mutation 返回值的结构，看起来不那么明显。

> 私货：原文使用了 increment，看起来是语法错误，个人认为是 increase。

另外，由于 mutation 会修改数据，所以比查询更容易引发错误。mutation 甚至可能引发部分错误，一部分数据修改成功，而另外一部分失败了。无论什么样的错误类型，重要的是能以一致的方式通知客户端。

为了解决这些担忧，我们建议在 schema 中定义`MutationResponse`[接口](https://www.apollographql.com/docs/apollo-server/schema/unions-interfaces/#interface-type)，连同一个*实现*了这个接口的对象类型集合(每个 mutation 一个)。

下面是`MutationResponse`接口可能的结构：

```graphql
interface MutationResponse {
  code: String!
  success: Boolean!
  message: String!
}
```

下面是实现了`MuatationResponse`接口对象可能的结构：

```graphql
type UpdateUserEmailMutationResponse implements MutationResponse {
  code: String!
  success: Boolean!
  message: String!
  user: User
}
```

我们的`updateUserEmail`mutation 将指定`UpdateUserEmailMutationResponse`作为返回类型(而不是`User`),并且返回值结构类似下面这样：

```json
{
  "data": {
    "updateUserEmail": {
      "code": "200",
      "success": true,
      "message": "User email was successfully updated",
      "user": {
        "id": "1",
        "name": "Jane Doe",
        "email": "jane@example.com"
      }
    }
  }
}
```

让我们逐个分析这些字段：

- `code`是一个表达数据传输状态的字符串。可以理解为 HTTP 状态码。
- `success`是一个指示 mutation 是否执行成功的布尔值。这个值允许通过客户端进行粗略的检查，以获知是否存在问题。
- `message`是一个描述 mutation 结果、人类可读的字符串。旨在用于产品的 UI 界面。
- `user`是通过实现`UpdateUserEmailMutationResponse`类型被添加的，为了给客户端返回最新的 user 信息。

如果 mutation 修改多个类型(类似之前的给博客文章点赞的例子)，它的实现类型可以包括每个被修改类型中，一个单独的字段。

```graphql
type LikePostMutationResponse implements MutationResponse {
  code: String!
  success: Boolean!
  message: String!
  post: Post
  user: User
}
```

因为我们假设的`likePost`mutation 同时修改了`Post`和`User`,它的返回值包括这些类型的字段。返回值类似下面的结构：

```json
{
  "data": {
    "likePost": {
      "code": "200",
      "success": true,
      "message": "Thanks!",
      "post": {
        "id": "123",
        "likes": 5040
      },
      "user": {
        "likedPosts": ["123"]
      }
    }
  }
}
```

遵从这个模式，可以给客户端提供每个请求操作结果，有用且详细的信息。有了这些信息，开发者可以更好的在客户端代码排查错误。
