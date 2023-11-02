---
title: Directives
date: 2023-10-31
authors: lin-xii
tags: [Apollo, GraphQL, 渣翻译]
sidebar_position: 4
---

> 在找 Apollo Federation directives？参考 [Federation-specific GraphQL directives](https://www.apollographql.com/docs/federation/federated-types/federated-directives/)。

一个**directive**通过额外配置修饰一部分 GraphQL schema 或 operation。Apollo Server(或者 Apollo Client)这类工具可以读取 GraphQL 文档的 directive 并根据需要执行自定义逻辑。

directive 前面使用`@`字符，例如：

```graphql
type ExampleType {
  oldField: String @deprecated(reason: "Use `newField`.")
  newField: String
}
```

这个例子展示了`@deprecated`directive，它是一个[默认 directive](https://www.apollographql.com/docs/apollo-server/schema/directives/#default-directives)(也就是说，它是 [GraphQL 规范](http://spec.graphql.org/June2018/#sec--deprecated)的一部分)。它展示了下面的内容：

- directive 可以携带参数(这个例子中的是`reason`)。
- directive 出现在它们需要修饰的声明之后(这个例子中是`oldField`字段)。

## 有效位置

每个 directive 在 GraphQL scheme 或 operation 中，只能出现在规定的位置。这些位置在 directive 定义处列出。

举个例子，这里是 GraphQL 规范的 `@deprecated`directive 定义：

```graphql
directive @deprecated(
  reason: String = "No longer supported"
) on FIELD_DEFINITION | ARGUMENT_DEFINITION | INPUT_FIELD_DEFINITION | ENUM_VALUE
```

这个例子表明`@deprecated`可以修饰列出的四个位置中的任何一个。也要注意`reason`参数是可选的并且提供了默认值。每一个位置的示例如下：

```graphql
# ARGUMENT_DEFINITION
# Note: @deprecated arguments _must_ be optional.
directive @withDeprecatedArgs(
  deprecatedArg: String @deprecated(reason: "Use `newArg`")
  newArg: String
) on FIELD

type MyType {
  # ARGUMENT_DEFINITION (alternate example on a field's args)
  fieldWithDeprecatedArgs(name: String @deprecated): String
  # FIELD_DEFINITION
  deprecatedField: String @deprecated
}

enum MyEnum {
  # ENUM_VALUE
  OLD_VALUE @deprecated(reason: "Use `NEW_VALUE`.")
  NEW_VALUE
}

input SomeInputType {
  nonDeprecated: String
  # INPUT_FIELD_DEFINITION
  deprecated: String @deprecated
}
```

如果`@deprecated`出现在 GraphQL 文档的其他位置，将产生一个错误。

> 如果创建 custom directive，需要在 schema 中定义它(还有它可以使用的位置)。不需要定义像`@deprecated`这类的默认 directive。

### schema directive 对比 operation directive

通常，directive 只出现在 GraphQL schema 或 GraphQL operation 中(很少同时出现，尽管规范允许这种情况)。

举个例子，所有的默认 directive，`@deprecated`是只能在 schema 使用的 directive，而`@skip`和`@include`只能在 operation 中使用。

[GraphQL 规范](https://spec.graphql.org/June2018/#sec-Type-System.Directives)列出了 directive 所有可能出现的位置。schema 位置在`TypeSystemDirectiveLocation`列出，而 operation 位置在`ExecutableDirectiveLocation`中列出。

## 默认 directive

[GraphQL 规范](http://spec.graphql.org/June2018/#sec-Type-System.Directives)定义了以下的默认 directive：

| DIRECTIVE                     | 描述                                                                    |
| ----------------------------- | ----------------------------------------------------------------------- |
| `@deprecated(reason: String)` | 将字段或枚举值的 schema 定义标记为不推荐使用，理由是可选项。            |
| `@skip(if: Boolean!)`         | 如果`true`，operation 中被修饰的字段或片段不会被 GraphQL server 解析。  |
| `@include(if: Boolean!)`      | 如果`false`，operation 中被修饰的字段或片段不会被 GraphQL server 解析。 |

## custom directive

> Apollo Server 不为改变 schema 的 custom directive 提供内置支持。
>
> 私货：这意味着如果想用，需要自己开发

schema 能够定义修饰 schema 其他部分的 custom directive：

```graphql
# Definition
directive @uppercase on FIELD_DEFINITION

type Query {
  # Usage
  hello: String @uppercase
}
```

在将 schema 传递给 Apollo Server 之前，如果想定义一个 custom directive 去改变 schema 的执行逻辑，建议使用`@graphql-tools`库。可以参考[example of using a custom directive to transform a schema](https://github.com/apollographql/docs-examples/tree/main/apollo-server/v4/custom-directives/upper-case-directive)

### In subgraphs

在 federated graph 中使用 custom directvie 之前，务必思考以下几点：

- 如果多个 subgraph 可以解析一个特定字段，每个 subgraph 几乎都应该对该字段使用(定义完全相同)的 custom directive。否则，这个字段的行为可能取决于哪一个 subgraph 来解析它。
- 因为 directive 是特定于各个 subgraph 的，不同的 subgraph 使用不同的逻辑定义相同的 directive，在技术上是可行的。如前一点所述，如果 custom directive 被用于过个 subgraph 去解析特定的字段，则应该在 subgraph 中给同一 directive 定义相同的逻辑。*Composition*不会检测或警告这种不一致。
  > 私货：compostion 该怎么翻译？组合各个 subgraph schema 的过程？
- 组合过程以不同方式对待[可执行(客户端侧)](https://www.apollographql.com/docs/federation/federated-types/composition/#executable-directives)的和[类型系统(服务器侧)](https://www.apollographql.com/docs/federation/federated-types/composition/#type-system-directives)的命令：
  - 在以下情况，可执行 directive 被组合到 supergraph 中：
    - 所有 subgraph 定义了相同的 directive
    - directive 没有被包含在任何`@composeDirective`directive 中
  - 类型系统 directive 不会被包含到 supergraph 的 schema 中，但是它们通过`@composeDirective`directive 可以提供信息给路由

#### Transformer function

如我们的例子所示，在 Apollo Server 3 和 4 中，可以给每一个 subgraph schema 的 custom directive 定义 transformer 函数

为了将 transformer 函数应用到可执行 subgraph schema，通常要先使用`buildSubgraphSchema`生成 subgraph schema：

```typescript
let subgraphSchema = buildSubgraphSchema({ typeDefs, resolvers });
```

并非直接将结果传递给`ApolloServer`构造函数，首先应用所有的 transformer 函数到它：

```typescript
// Transformer function for an @upper directive
subgraphSchema = upperDirectiveTransformer(subgraphSchema, "upper");
```

应用所有 transformer 函数后，通常提供最终的 subgraph schema 给`ApolloServer`构造函数：

```typescript
const server = new ApolloServer({
  schema: subgraphSchema,
  // ...other options...
});
```
