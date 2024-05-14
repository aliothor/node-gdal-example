## node-gdal-async 示例代码

### .npmrc 配置

python=D:\Tools\anaconda3\python.exe

### 使用 swc-node 环境

```bash
node --import @swc-node/register/esm-register .\src\read-file.ts
```

### ava使用typescript配置
```json
{
  "ava": {
    "extensions": {
      "ts": "module"
    },
    "nodeArguments": ["--import=@swc-node/register/esm-register"]
  }
}
```
