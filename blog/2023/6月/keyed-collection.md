---
title: JS Set为什么是带键的集合?
authors: lin-xii
date: 2023-06-14
tags: [JavaScript, 集合]
---

遇事不决查文档。

<!-- truncate -->

## 起因

为了降低并发时的 API 请求量, 这两天写了个 LRU Cache. 其中用到了 Set 做 AllowList, 来判断 API 是否应该被缓存.

在 MDN 查 API 时, 发现 Set 被归类在 Keyed Collection 中. 一直以来, 下意识觉得 Set 只是 value 唯一的 Array. 应该属于 Indexed Collection. 感觉有些奇怪, 所以就查了下 Set 的实现机制

## 过程

一开始, 先去 MDN 查的文档, 只说了属于 Keyed Collection, 但没细说为什么. 又去 ecma-international.org, 查 ECMA 标准, 结果也没有明确说明, 为什么 Set 属于 Keyed Collection. 我一开始还觉得是文档写得不够详细, 后来发现是自己太菜了 😂

简单思考了下, 没想通. 就使用魔法武器了. 虽然有点前后不一, 但 copilot 提供了最关键的信息: Hash Table. 下边是 copilot 的回答

> 在 JavaScript 中，Set 是一种基于哈希表实现的数据结构，用于存储一组唯一的值。Set 属于 ECMAScript 6 中新增的数据类型之一，被归类为 Keyed Collection 类型。

> Keyed Collection 是 ECMAScript 6 中新增的一种数据类型，用于存储一组键值对。除了 Set 之外，还包括 Map 和 WeakMap。这些数据类型都具有以下特点：

> 1. 可以使用任意类型的值作为键。
> 2. 可以使用 for...of 循环遍历键值对。
> 3. 可以使用 size 属性获取键值对的数量。

> Set 作为 Keyed Collection 的一种，可以使用任意类型的值作为元素，而且每个元素都是唯一的。因此，Set 可以用于实现集合、过滤重复值等功能。

> 需要注意的是，Set 和 Map 的实现方式不同，虽然它们都属于 Keyed Collection 类型。Map 是一种键值对的集合，其中每个键都是唯一的，可以使用键来访问对应的值。Set 是一种值的集合，其中每个值都是唯一的，可以使用值来访问对应的值。

再然后, 就破案了... 因为 Hash Table 中, 每个元素都有唯一的 key, 用 key 来访问对应的值. 所以, Set 相当于一个 key-value 相同的、特殊的 Hash Table, 我认为也可以理解为, 一种 key-value 一致、特殊的 Map

## 结论

1. Set 是基于 Hash Table 实现的「值的集合」
2. 由于 Hash Table 的 key-value 特性, Set 的 key-value 相同
3. Set 相当于一种特殊的 Map

所以, Set 属于 Keyed Collection

```
                                             ┌─────┐
                                          ┌─▶│Array│
                    ┌──────────────────┐  │  └─────┘
                 ┌─▶│Indexed Collection│──┤
                 │  └──────────────────┘  │  ┌───────────┐
                 │                        └─▶│Typed Array│
                 │                           └───────────┘
 ┌────────────┐  │
 │ Collection │──┤                           ┌───┐         *
 └────────────┘  │                        ┌─▶│Map│         *
                 │                        │  └───┘         *
                 │                        │  ┌───────┐     *
                 │  ┌──────────────────┐  ├─▶│WeakMap│     *  ┌───────────────────┐
                 └─▶│ Keyed Collection │──┤  └───────┘     *  │Based on Hash Table│
                    └──────────────────┘  │  ┌───┐         *  └───────────────────┘
                                          ├─▶│Set│         *
                                          │  └───┘         *
                                          │  ┌───────┐     *
                                          └─▶│WeakSet│     *
                                             └───────┘     *
```

## 资料

1. https://262.ecma-international.org/13.0/#sec-keyed-collections
2. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections#key_and_value_equality_of_map_and_set
