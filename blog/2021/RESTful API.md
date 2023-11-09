---
title: 理解RESTful API
date: 2021-09-14
authors: lin-xii
tags: [API, RESTful]
---

一点对 RESTful API 的理解

<!-- truncate -->

## 愿景

明确清晰的 API 结构, 方便协作开发, 向后升级

## 什么是 RESTful API

`面向资源类型`的接口`风格`

## 避免 RESTful 陷阱

RESTful 的目标, 是帮助人们更好的开发&协作. 当项目需求, 和 RESTful 建议相悖时, 要灵活多变! 不要为了 RESTful 而 RESTful

**REST 并没有一个明确的标准，而更像是一种设计的风格**

## URL 结构

`URL = scheme://host:port/path[?query][#fragment]`

- scheme: 指底层用的协议, 如 http, https, ftp

- host: 服务器的 IP 地址或者域名

- port: 端口, http 默认为 80

- path: 访问资源的路径, 即 web 框架中的路由 route

- query: 查询字符串, 发给服务器的参数

- fragment: 锚点, 定位到页面的资源 ? 这个, 其实没太理解

## path 格式

`/{version}/{resource}/{resource-id}/{sub-resource}/{sub-resource-id}/action`

原则上, 使用 http 动词, 作为 api 动词. url 中, 不使用动词. 但是, 当 CURD 无法满足需求时, 在尾部增加动词, 以满足需求

## URL 规范

1. 所有字母小写
2. 连字符使用`-`而非`_`
3. 使用`/`表明层级. 越靠前的层级, 应该相对稳定
4. 尾部不应包含`/`
5. URL 中, 不出现动词, 用请求方式表示动作
6. 资源表示用复数

## HTTP 动词

- GET: select
- POST: create
- PUT: update
- PATCH: update
- DELETE: delete

## 参考

http://www.ruanyifeng.com/blog/2014/05/restful_api.html

https://www.cnblogs.com/bigsai/p/14099154.html
