---
title: UES之斗智斗勇
date: 2021-09-06
authors: lin-xii
tags: [安全检查]
---

守信，是基本。

<!-- truncate -->

## 简介

个人 PC 检查, 换成了 UES 这种自动化工具, 本来是件好事... 但后台每小时扫描一次, 还不能装向日葵, 真就是有病了

## 无耻之徒

1. 后台每小时扫描上报, 已经没有信任可言了
2. 向日葵被评为风险软件, 那倒是让前场别用了, 问题也不要解决了
3. 无法主动停用/卸载, 真~流氓软件

## win10 提权

1. C:\Windows\System32\nsfagent.dll 属性
2. 安全->高级
3. 更改所有者->users
4. 编辑权限->Users 增加完全控制权限
5. 此时, nsfagent.dll 文件为可删除状态

## terminal 终止进程

```shell
taskkill -f -pid 2872
```

有可能, 需要用管理员身份, 登录 cmd
