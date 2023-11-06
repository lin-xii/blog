---
title: Introduction to Apollo Server
date: 2023-10-20
authors: lin-xii
sidebar_label: Introduction
sidebar_position: 1
tags: [Apollo, GraphQL, 渣翻译]
---

**Apollo Server 是一个[开源](https://github.com/apollographql/apollo-server)、符合规范的 GraphQL server，** 它兼容任何 GraphQL client，包括 [Apollo Client](https://www.apollographql.com/docs/react)。这是构建可用于生产环境、自文档式、数据存储方式无关的 GraphQL API 的最佳方式。

![这是图片](./image/introduction.jpg "Apollo Server")

#### 你可以将 Apollo Server 用于：

- 将 GraphQL server 作为 federated GraphQL 中的 [subgraph](https://www.apollographql.com/docs/apollo-server/using-federation/apollo-subgraph-setup)
- 作为组件注入到现有的 Node.js 应用中。这些应用可以是基于 [Express](https://www.apollographql.com/docs/apollo-server/api/express-middleware)（包括[MERN](https://www.apollographql.com/docs/apollo-server/integrations/mern)技术栈）、[AWS Lambda](https://www.npmjs.com/package/@as-integrations/aws-lambda)、[Azure Functions](https://www.npmjs.com/package/@as-integrations/azure-functions)、[Cloudflare](https://www.npmjs.com/package/@as-integrations/cloudflare-workers)、[Fastify](https://www.npmjs.com/package/@as-integrations/fastify)，和[其他的框架或平台](https://www.apollographql.com/docs/apollo-server/integrations/integration-index)。

#### Apollo Server 可以提供什么能力：

- **配置简单**，client 开发人员可以快速开发获取数据
- **渐进引用**，能够按照实际需求来添加功能特性
- **优秀的兼容性**，与任何数据源、构建工具和 GraphQL client 兼容
- **可用于生产环境**，可以自信地将 graph 运行在生产环境
