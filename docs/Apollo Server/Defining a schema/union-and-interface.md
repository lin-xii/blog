---
title: Unions and interfaces
date: 2023-10-30
authors: lin-xii
tags: [Apollo, GraphQL, 渣翻译]
---

**Union** 和 **interface** 是抽象类型，它们允许一个 schema 字段，返回多个类型中的某一种类型。

## Union

当你定义一个 union 类型时，你声明的对象类型可以被包含在 union 中。

```graphql
union Media = Book | Movie
```

一个字段可以将一个 union 类型(或者一个 union 类型的列表)，作为它的返回值类型。它可以返回任一被包含在 union 中的对象类型。

```graphql
type Query {
  allMedia: [Media] # This list can include both Book and Movie objects
}
```

union 类型所包含的所有类型，必须是[对象类型](https://www.apollographql.com/docs/apollo-server/schema/schema/#object-types)(不能是 scalar、input 类型)。被包含的类型之间，不需要共享任何字段。

> 私货：被包含的类型之间，可以是毫无关联的类型，字段不需要有相似性。

### 例子

下面的 schema 定义了一个名为`SearchResult`的 union 类型。它可以返回一本`Book`或一位`Author`：

```graphql
union SearchResult = Book | Author

type Book {
  title: String!
}

type Author {
  name: String!
}

type Query {
  search(contains: String): [SearchResult!]
}
```

`SearchResult`类型允许`Query.search`返回一个包含`Book`s 和`Author`s 的列表。

### 查询一个 union

如果一个返回值的类型，是 union 时，GraphQL 客户端不知道字段将返回哪个对象类型。为此，一个查询可以包含多种可能类型的子字段。

下面是一个查询 schema 的示例：

```graphql
query GetSearchResults {
  search(contains: "Shakespeare") {
    # Querying for __typename is almost always recommended,
    # but it's even more important when querying a field that
    # might return one of multiple types.
    __typename
    ... on Book {
      title
    }
    ... on Author {
      name
    }
  }
}
```

> [什么是`__typename`字段？](https://www.apollographql.com/docs/apollo-server/schema/schema/#the-__typename-field)

这个查询使用 [inline fragment](https://graphql.org/learn/queries/#inline-fragments) 语法去查询`SearchResult`的`title`(如果他是`Book`)或`name`(如果他是`Author`)。web 客户端可以被 [passing the possibleTypes option](https://www.apollographql.com/docs/react/data/fragments/#using-fragments-with-unions-and-interfaces)告知关于这个多态的关系。

> 私货：passing possibleTypes option 是个啥？

下面是前面查询的返回结果：

```json
{
  "data": {
    "search": [
      {
        "__typename": "Book",
        "title": "The Complete Works of William Shakespeare"
      },
      {
        "__typename": "Author",
        "name": "William Shakespeare"
      }
    ]
  }
}
```

### 解析一个 union

> 阅读本章节前，建议先了解[resolver](https://www.apollographql.com/docs/apollo-server/data/resolvers)

为了全面解析 union，Apollo Server 需要确认 union 将会返回哪一种类型。为此，你需要在 resolver map 中，为 union 定义一个`__resolveType`函数。

`__resolveType`函数负责确定一个对象的 GraphQL 返回类型并且以字符串的形式返回类型名称。可以通过任意逻辑来完成这件事，例如：

- 检查字段上的某具有唯一特征的值是否存在
- 如果 _JavaScript_ 对象的类型与 _GraphQL_ 的类型相关连，则使用`instanceOf`。

下面是一个为`SearchResult`定义的`__resovleType`函数：

```typescript
const resolvers = {
  SearchResult: {
    __resolveType(obj, contextValue, info){
      // Only Author has a name field
      if(obj.name){
        return 'Author';
      }
      // Only Book has a title field
      if(obj.title){
        return 'Book';
      }
      return null; // GraphQLError is thrown
    },
  },
  Query: {
    search: () => { ... }
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);

console.log(`🚀  Server ready at: ${url}`);
```

> 如果`__resolveType`函数返回一个与 schema 类型定义不相符的值，与其相关的 operation 将产生一个 GraphQL 错误。

## interface

一个 interface 确定了多个对象类型都可以包含的一批字段：

```graphql
interface Book {
  title: String!
  author: Author!
}
```

如果一个对象类型`implements`了一个 interface，它*一定*可以具备 interface *所有*的字段：

```graphql
type Textbook implements Book {
  title: String! # Must be present
  author: Author! # Must be present
  courses: [Course!]!
}
```

一个字段可以将一个 interface(或者一个 interface 的列表)作为返回类型。在这种情况下，这个字段可以返回任意一个`implements`了这个 interface 的对象类型：

```graphql
type Query {
  books: [Book!]! # Can include Textbook objects
}
```

### 例子

下面的 schema 中定义了名为`Book`的 interface，并且有两个对象类型 implements 了它：

```graphql
interface Book {
  title: String!
  author: Author!
}

type Textbook implements Book {
  title: String!
  author: Author!
  courses: [Course!]!
}

type ColoringBook implements Book {
  title: String!
  author: Author!
  colors: [String!]!
}

type Query {
  books: [Book!]!
}
```

在这个 scheme 中，`Query.books`可以返回包含`Textbook`和`ColoringBook`的列表。

### 查询一个 interface

如果一个字段的类型是 interface，客户端可以查询这个 interface 的字段中的任意字段：

```graphql
query GetBooks {
  books {
    title
    author
  }
}
```

客户端也可以查询这个 interface 没有包含的字段：

```graphql
query GetBooks {
  books {
    # Querying for __typename is almost always recommended,
    # but it's even more important when querying a field that
    # might return one of multiple types.
    __typename
    title
    ... on Textbook {
      courses {
        # Only present in Textbook
        name
      }
    }
    ... on ColoringBook {
      colors # Only present in ColoringBook
    }
  }
}
```

> [什么是\_\_typename 字段？](https://www.apollographql.com/docs/apollo-server/schema/schema/#the-__typename-field)

这个查询使用内联片段去查询`Book`的`courses`字段(如果它属于`Textbook`类型)或者`colors`字段(如果它属于`ColoringBook`类型)。通过[passing the possibleTypes option](https://www.apollographql.com/docs/react/data/fragments/#using-fragments-with-unions-and-interfaces)，web 客户端可以被告知关于这个多态关系。

下面是前面查询的一个有效结果：

```json
{
  "data": {
    "books": [
      {
        "__typename": "Textbook",
        "title": "Wheelock's Latin",
        "courses": [
          {
            "name": "Latin I"
          }
        ]
      },
      {
        "__typename": "ColoringBook",
        "title": "Oops All Water",
        "colors": ["Blue"]
      }
    ]
  }
}
```

### 解析一个 interface

> 阅读本章节前，建议了解[resolver](https://www.apollographql.com/docs/apollo-server/data/resolvers)

[与 union 类型相同](https://www.apollographql.com/docs/apollo-server/schema/unions-interfaces#resolving-a-union)，Apollo Server 需求 interface 定义一个`__resolveType`函数去确定那个哪一种对象类型将会被返回。

下面是一个`Book`的`__resolveType`函数的例子：

```typescript
const resolvers = {
  Book: {
    __resolveType(book, contextValue, info){
      // Only Textbook has a courses field
      if(book.courses){
        return 'Textbook';
      }
      // Only ColoringBook has a colors field
      if(book.colors){
        return 'ColoringBook';
      }
      return null; // GraphQLError is thrown
    },
  },
  Query: {
    books: () => { ... }
  },
};
```
