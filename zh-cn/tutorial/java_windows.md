# 自动搭建 Java 版 Minecraft 服务端

如果您从来没有搭建过 Minecraft（我的世界）服务器，那么这篇文章将适用于你。

参考：[点击跳转](https://www.bilibili.com/read/cv20379951)

<br />

# 手动搭建 Java 版 Minecraft 服务端

## 1. 安装 Java 环境

在开始运行Java服务端之前 Java运行库是必不可少的.
以下是一些Minecraft版本所需的对应的Java版本运行库列表:

  - 1.7.x / 1.8.x / 1.9.x - 使用`Java7(不推荐)`或`Java8`运行
  - 1.10.x / 1.12.x - 使用`Java8`运行
  - 1.12.x / 1.13.x / 1.15.x - 使用`Java8`,`Java9`或`Java12`运行
  - 1.16.x - 使用`Java8`,`Java9`,`Java12`或`Java16`运行
  - 1.17.x - 使用`Java16`或`Java17`运行
  - 1.18.x - 使用Java17或Java18运行
  - 1.18.x / 1.19.x - 使用Java17或**更高版本**运行.

> `更高版本` 注意事项: Java20太新了 有很多东西可能不支持 推荐停留在Java19

> 您始终应该查看自己的插件支持哪些Java版本再做出抉择 如果插件没有声明 最好询问插件开发者 以免引起不必要的麻烦.
  
您可以在此处下载Java: `下列Java下载链接只适用于Windows 64位操作系统 如果您需要其它版本下载 请自行搜索`
  - [(Oracle)Java JDK8 8u202](https://repo.huaweicloud.com/java/jdk/8u202-b08/jdk-8u202-windows-x64.exe) `安装程序`
  - [(Azul)Java JDK8 8.0.362](https://cdn.azul.com/zulu/bin/zulu8.68.0.21-ca-jdk8.0.362-win_x64.zip) `压缩归档`
  - [(Azul)Java JDK11 11.0.18](https://cdn.azul.com/zulu/bin/zulu11.62.17-ca-jdk11.0.18-win_x64.msi) `安装程序`
  - [(Azul)Java JDK11 11.0.19](https://cdn.azul.com/zulu/bin/zulu11.64.19-ca-jdk11.0.19-win_x64.zip) `压缩归档`
  - [(Oracle)Java JDK17 17.0.7](https://download.oracle.com/java/17/latest/jdk-17_windows-x64_bin.exe) `安装程序`
  - [(Oracle)Java JDK17 17.0.7](https://download.oracle.com/java/17/archive/jdk-17.0.7_windows-x64_bin.zip) `压缩归档`

> 请找到适合您的计算机处理器架构以及操作系统合适的Java. **不要盲目地点击下载链接**  

> Java16以及更高版本仅可以在64位系统上运行.  

**如何使用压缩归档?**
如果您不想在您的电脑上安装Java 或者目前您不想更换主要的Java 那么使用一个压缩归档是一个比较好的选择.
您只需要将文件解压(文件夹最好不要带空格) 然后在启动参数内将开头的`java`替换成您的压缩归档运行库路径即可. 
`java路径/bin/java.exe`. 例如 `C:/Java/jdk-17.0.7/bin/java.exe ... -jar "你的jar文件名，例如：paper-1.19.4-516.jar"`


<br />

## 2. 下载服务端软件


部署服务器的本质其实和您在手机上运行 APP 的操作一致，您需要一个服务端软件（又称服务器核心）来实现 Minecraft 服务器部署。

可以前往这些地方下载：

- Paper 服务端：https://papermc.io/downloads

- MCBBS 整合包: https://www.mcbbs.net/forum-serverpack-1.html

如果您对访问阅读英语有困难，可以直接点击版本下载：

- [1.18.2](https://api.papermc.io/v2/projects/paper/versions/1.18.2/builds/388/downloads/paper-1.18.2-388.jar)

- [1.19.4](https://api.papermc.io/v2/projects/paper/versions/1.19.4/builds/524/downloads/paper-1.19.4-524.jar)

<br />

## 3. 进入面板部署

点击左侧“快速开始”按钮，选择 Minecraft Java 版服务器，选择“上传压缩包”或“上传单个服务端软件”，上传您下载的整合包或者jar文件。

填写启动命令：

```
java -Xmx6G -Xms6G -XX:+UseG1GC -Dfile.encoding=UTF-8 -jar "你的jar文件名，例如：paper-1.19.4-516.jar"
```

> 如果需要 将`6G`修改成您想要分配的内存 `-Xmx?G -Xms?G` 6-16G是一个较为合适的范围.

> 不要将一台计算机的所有可用内存分配给服务端! 请最多空出2G可用内存.

创建！

<br />


## 4. 启动服务器

点击左侧菜单的“应用实例”，您应该能看见刚刚新建的实例。

进入实例，在终端控制台中点击“开启实例”即可。

您的服务器应该会正常运行。

<br />


## 5. 简单配置文件

第一次启动很有可能会启动失败，会有类似于 EULA 等字样的错误，这个是您需要更改一个 txt 文件来代表您同意最终用户协议。

前往“文件管理”界面编辑 `eula.txt`，将其中的 `false` 改为 `true` 即可。

