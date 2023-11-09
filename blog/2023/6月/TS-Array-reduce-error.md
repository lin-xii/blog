---
title: TS Array.reduce没有与此调用匹配的重载?
authors: lin-xii
date: 2023-06-16
tags: [Typescript, Array.reduce, 泛型]
---

语法检查工具，是个好东西。

<!-- truncate -->

## 起因

一个 feature 开发, 结果需求评审、工时预估, 简直是事故级别的. 最后, 迫于无奈, 全组人都得上去救火...

今天, 帮忙改 bug 的时候, 发现新 checkout 下来的代码, 还带着新鲜的语法错误...简直大无语.

翻了遍代码, 发现很多地方都存在 Array.reduce 类型重载相关的问题, 简单记录一下解决过程.

## 排查过程

> 大家的 vscode 都不装语法提示插件么? 代码挂着红线, 就扔代码库了??? 抽时间, 得把 hook 安排上了 🙄

```typescript
// 业务代码不方便外流, 简单写了个demo, 问题原因相同
const nums = [1, 2, 3, 4, 5];

const sum = nums.reduce((pre, cur) => {
  return [...pre, { count: cur }];
}, []);

sum.push({ count: 6 });

console.log(sum);

// 这段代码, 编译成.js后, 其实是可以运行的. 但如果装了插件, 可以看到明显的TS语法错误..
// 输出值
// [
//   { count: 0 },
//   { count: 1 },
//   { count: 2 },
//   { count: 3 },
//   { count: 4 },
//   { count: 5 },
//   { count: 6 }
// ]
```

`(pre, cur)=>{}` 会提示没有对应的重载类型. 原因不复杂, 就是类型不符合推导预期, 但为什么不符合预期, 还真没仔细看过. 本着 fixbug 可以, 但不能一无所获的思想, 查看了对应的 TS 类型声明

```typescript
// 3种reduce的类型声明
reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;

reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;

reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
```

很明显, reduce 对类型的推导, 基本就是, 「参数类型」和「返回值类型」相同、且 reduce 前后, 只有一种类型, 那不用加「泛型」

但是, 如果出现**1 种以上的类型, 且 preValue 与 initValue、returnType 类型不同**, 就必须显式标注类型.

案例中, pre 的类型为`never[]`, cur 的类型是`number`, 而 reduce 的返回值类型是`Array<{ count: number }>`. 根据之前推导的结论, 出现 3 种类型, 且 pre 与 cur、return 值类型不同, 必须显式声明类型.

根据 TS 的类型声明, 有 2 种可用的解决方法:

1. 给 initValue 增加类型断言, `[] as Array<{ count: number }>`.
2. 在 reduce 处, 声明泛型类型`nums.reduce<Array<{ count: number }>>`

核心解决思路: 减少 TSC 推导类型的种类, 促使其符合已存在的类型定义.

## 吐槽

> 只要思想不滑坡, 办法总比困难多

问题很直观, 也不复杂. 但看 log, 这语法问题已经存在 2 个月了, 真的是 vscode 没装插件么?
