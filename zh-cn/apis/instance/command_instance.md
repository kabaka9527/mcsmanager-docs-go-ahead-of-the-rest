# 发送命令到应用实例

地址

```
/api/protected_instance/command
```

请求方式

```
GET
Content-Type: application/json; charset=utf-8
```

查询参数（Query）

```js
uuid: String; // 守护进程下的实例 UUID
remote_uuid: String; // 守护进程 UUID
apikey: String; // API 密钥
command: String; //要执行的命令 如：ping www.baidu.com
```

响应

```json
// 无法支持命令结果返回
// 原因请参考：https://github.com/MCSManager/MCSManager/issues/614
// 你也可以尝试使用 https://docs.mcsmanager.com/#/instance/instance_output 来间接实现。
{
  // ↓ 会返回的值及其解释：200（正常，并返回相应内容）；400（请求参数不正确）；403（无权限）；500（服务器内部错误）
  "status": 200,
  "time": 1633161747334
}
```
