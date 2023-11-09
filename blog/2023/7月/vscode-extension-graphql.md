---
title: GraphQL插件踩坑
authors: lin-xii
date: 2023-07-15
tags: [vscode, 插件, GraphQL]
---

- vscode 的 GraphQL 语法插件, 目前比较推荐**Graphql Foundation**的**GraphQL: Language Feature Support**

- 相关配置, 见[GraphQL: Language Feature Support](# GraphQL: Language Feature Support)

- 配置文件的语法规则, 参考[GraphQL Config](https://the-guild.dev/graphql/config/docs)

<!-- truncate -->

## 背景

之前用的 GraphQL 插件, 只开启了语法高亮. 自己写的 schema 没什么问题, 排查问题时, 只能靠搜索, 太难了....

vscode 有不少语法提示插件, 但很多不太适用了. 试用了几款, 踩了踩坑...

## 插件

### [GraphQL: Language Feature Support](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql)

```
# graphql.config.yml  //in root directory
# 使用URL的方式, 只有语法提示, 没有定义跳转
# schema: http://localhost:5910/graphql
schema:
  - ./bff/src/schemas/*.gql
  - ./bff/src/schemas/**/*.gql
  - ./bff/src/schemas/**/**/*.gql
```

- 需要按照 graphql-config 的格式, 添加配置文件
- 有语法提示、支持定义跳转
- 目前仍在维护
- 唯一可惜的是, **没有引用查询**

有常规的语法提示了, 而且自定义类型也可以提示. 支持定义跳转

### ~~[vscode-graphql](https://marketplace.visualstudio.com/items?itemName=luyizhi.vscode-graphql)~~

- 个人开发者插件, 坚持与否, 全看心情
- 上一次的发布时间, 在 2019 年... 验证了第一条
- [插件代码库 (iemmp.com)](http://git.iemmp.com/yizhi/vscode-graphql.git) 已经丢失了.......
- 按照 quick start 配置
  - 有高亮, 但是不太符合预期
  - 有语法提示
  - ~~没有定义跳转~~

整体效果不是很理想, 故放弃

### ~~[Apollo GraphQL](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo)~~

```javascript
// module.exports = {
//   client: {
//     service: {
//       name: "my-service-name",
//       localSchemaFile: "./src/schemas/*.graphql",
//     },
//   },
// };
// module.exports = {
//   client: {
//     service: {
//       name: "github",
//       url: "http://localhost:5910/graphql",
//       // optional headers
//       headers: {
//         authorization: "Bearer lkjfalkfjadkfjeopknavadf",
//       },
//       // optional disable SSL validation check
//       skipSSLValidation: true,
//     },
//   },
// };
module.exports = {
  service: {
    endpoint: {
      url: "http://localhost:5910/graphql",
      headers: {
        // optional
        authorization: "Bearer lkjfalkfjadkfjeopknavadf",
      },
      skipSSLValidation: true, // optional, disables SSL validation check
    },
  },
};

// export default {
//   service: {
//     endpoint: {
//       url: "http://localhost:5910/graphql",
//       headers: {
//         // optional
//         authorization: "Bearer lkjfalkfjadkfjeopknavadf",
//       },
//       skipSSLValidation: true, // optional, disables SSL validation check
//     },
//   },
// };
```

- 不支持 es module
- 更新时间还在 22 年
- issue 关闭速度相当一般...

搞了半天, 只有语法高亮, 没有定义跳转... 也可能是我太菜了 😭

配置文件加载总是不成功. .js 因为 es module 不能用, .cjs 加载不上...

评论区也有吐槽配置不生效的, 不折腾了...
