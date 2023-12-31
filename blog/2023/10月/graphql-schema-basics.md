---
title: GraphQL schema 基本概念
date: 2023-10-13
authors: lin-xii
tags: [Apollo Server, GraphQL, Basics]
---

一些对 schema 的理解。

<!-- truncate -->

## TL;DR

Schema 是一种描述数据结构的方式，与数据实际存储的方式、结构和实现技术无关。

- GraphQL uses a **schema** to describe the shape of data.
- The schema defines a hierarchy of **types** with **field** that are populated from data stores.
- The schema specifies exactly which **queries** and **mutations** are available for clients to excute.

## 翻译

GraphQL server 使用 **schema** 来描述数据结构。Schema 划分了 **type** 和 **field** 的层次结构，这些 field 通常是存储在后端数据库中的。Schema 还定义了客户端可以执行的 **queries** 和 **mutations**。

这篇文章介绍了 schema 的基本概念，以及如何创建一个 GraphQL server。

## Original docs

Your GraphQL server uses a **schema** to describe the shape of your available data. This schema defines a hierarchy of **types** with **fields** that are populated from your back-end data stores. The schema also specifies exactly which **queries** and **mutations** are available for clients to execute.

This article describes the fundamental building blocks of a schema and how to create one for your GraphQL server.

## 参考资料

1. [Apollo Server Docs](https://www.apollographql.com/docs/apollo-server/schema/schema)
