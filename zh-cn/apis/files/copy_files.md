# 复制文件

地址

```
/api/files/copy
```

请求方式

```
POST
Content-Type: application/json; charset=utf-8
```

查询参数（Query）

```js
uuid: String; // 实例的 UUID
remote_uuid: String; // 远程服务 UUID
apikey: String; // API 密钥
```

请求体（Body）

```json
{
  "targets": [
    [
      "eula.txt", //被复制的文件名
      "test/eula.txt" //复制到哪，复制后的文件名
    ],
    [
      "spigot.yml", //同上，支持同时复制多个文件
      "test/b2.txt"
    ]
  ]
}
```

响应

```json
{
  // ↓ 会返回的值及其解释：200（正常，并返回相应内容）；400（请求参数不正确）；403（无权限）；500（服务器内部错误）
  "status": 200,
  "data": true,
  "time": 1633186641559
}
```
