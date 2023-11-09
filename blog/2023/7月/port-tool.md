---
title: 几种验证端口开启的方法
authors: lin-xii
date: 2023-07-25
tags: [端口, 工具]
---

macOS 下, 验证服务器端口是否连通的方法

- [telnet](#telnet)
- [nc](<#netcat(nc)>)
- [nmap](#nmap)

**tip: 扫描端口时，需要注意不要违反网络安全规定，避免对他人的网络造成不必要的干扰和损害。**

<!-- truncate -->

## 背景

网络相关的记忆, 都就着饭吃到肚子里了 🙄

今天需要验证服务器端口是否可以连通, 找到了几种方法, 简单记录一下

## telnet

> `telnet` 命令是一个用于测试网络连接的工具，可以模拟客户端与服务器之间的连接，以检查服务器端口是否可以正常连接。`telnet` 命令最初是由美国计算机科学家 Simon S. Lam 开发的，用于在 UNIX 系统上测试网络连接。后来，`telnet` 命令被广泛应用于各种操作系统和网络设备中，成为了一种通用的网络测试工具。
>
> `telnet` 命令可以通过终端或命令行界面使用，可以连接到任何支持 TCP 或 UDP 协议的服务器，以测试服务器端口是否可以正常连接。`telnet` 命令可以模拟客户端与服务器之间的连接，可以发送和接收数据，以检查服务器的响应是否正常。`telnet` 命令通常用于测试 Web 服务器、邮件服务器、FTP 服务器等等，以确保这些服务器可以正常工作。

### 安装

#### macOS M1

```shell
brew install telnet
```

### 使用

1. 打开 terminal
2. 输入命令`telnet server port`. Eg: ` telnet localhost 5910`
3. 敲回车
4. 如果出现下方格式的内容, 证明相应的服务、端口可以连通

```shell
Trying ::1...
Connected to localhost.
Escape character is '^]'.
```

5. 按下`ctrl + ]`, 再输入`quit`, 回车. 即可退出 telnet 命令

## netcat(nc)

> `nc` 命令是一个用于测试网络连接的工具，也称为 netcat。它可以用于创建 TCP 或 UDP 连接，发送和接收数据，以及监听端口等操作。`nc` 命令最初是由开发者 _Hobbit_ 开发的，后来被其他开发者维护和扩展，成为了一个通用的网络工具。
>
> `nc` 命令是开源的，可以在 GitHub 上找到相关的源代码。`nc` 命令的源代码托管在多个仓库中，其中一些仓库包含了不同版本的 `nc` 命令实现

### 安装

macOS 13.4 自带 nc, 无需安装

### 使用

1. 打开 terminal
2. 输入`nc -zv localhost 5910`, 敲回车
3. 如果出现如下格式的信息, 证明连接成功

```shell
Connection to localhost port 5910 [tcp/*] succeeded!
```

4. 如果出现如下格式的信息, 则连接失败

```shell
nc: connectx to localhost port 5911 (tcp) failed: Connection refused
```

### 常用参数

> `-zv` 参数表示在扫描端口时，不发送数据，只显示详细信息。`-z` 参数表示只扫描端口，不发送数据，`-v` 参数表示显示详细信息。因此，`-zv` 参数的含义是只扫描端口，并显示详细信息，但不发送数据。这个参数通常用于快速检查服务器端口是否开启。

- `-l`：监听模式，用于在指定端口上监听连接请求。
- `-p`：指定端口号。
- `-u`：使用 UDP 协议。
- `-w`：设置超时时间。
- `-z`：只扫描端口，不发送数据。
- `-v`：显示详细信息。

## nmap

> `nmap` 命令是一个用于网络探测和安全审计的工具，可以用于扫描主机和端口，识别操作系统和服务等。`nmap` 命令最初是由开发者 Fyodor（Gordon Lyon）开发的，后来被其他开发者维护和扩展，成为了一个通用的网络工具。
>
> `nmap` 命令是开源的，您可以在 GitHub 上找到相关的源代码。`nmap` 命令的源代码托管在官方的 Git 仓库中，您可以通过以下链接访问：
>
> - [https://github.com/nmap/nmap](vscode-file://vscode-app/Applications/Visual Studio Code - Insiders.app/Contents/Resources/app/out/vs/code/electron-sandbox/workbench/workbench.html)

### 安装

#### macOS M1

```shell
brew install nmap
```

### 使用

#### 扫描常用端口

1. 打开 terminal
2. 输入`nmap localhost`, 敲回车
3. 显示结果(默认只扫描常用的 1000 个端口)

```shell
Starting Nmap 7.94 ( https://nmap.org ) at 2023-07-19 11:04 CST
Nmap scan report for localhost (127.0.0.1)
Host is up (0.000047s latency).
Other addresses for localhost (not scanned): ::1
Not shown: 995 closed tcp ports (conn-refused)
PORT     STATE SERVICE
5910/tcp open  cm
8080/tcp open  http-proxy

Nmap done: 1 IP address (1 host up) scanned in 0.04 seconds
```

#### 扫描指定端口

1. 打开 terminal
2. 输入`nmap -p 5910 localhost`, 敲回车
3. 显示结果

```shell
Starting Nmap 7.94 ( https://nmap.org ) at 2023-07-19 11:18 CST
Nmap scan report for localhost (127.0.0.1)
Host is up (0.00023s latency).
Other addresses for localhost (not scanned): ::1

PORT     STATE SERVICE
5910/tcp open  cm

Nmap done: 1 IP address (1 host up) scanned in 0.02 seconds
```
