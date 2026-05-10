# 晚枝配置仓库

晚枝微信虚拟女友的配置文件共享仓库。

## 快速使用

### 下载配置
在 Operit 中执行：
```
调用 wanzhi_github_sync:download_config
参数：github_repo=fuqun616-eng/wanzhi-configs, file_name=relationship_rules.json
```

### 上传配置（到你自己的仓库）
1. Fork 本仓库
2. 生成 GitHub Token: https://github.com/settings/tokens/new （勾选 `repo` 权限）
3. 在 Operit 中执行：
```
调用 wanzhi_github_sync:upload_all_configs
参数：github_token=你的token, github_repo=你的用户名/wanzhi-configs
```

### 分享给别人
把你的仓库链接发给别人，他们用 `download_config` 命令即可下载。

## 配置文件说明

| 文件 | 用途 | 说明 |
|------|------|------|
| `wanzhi_configs/relationship_rules.json` | 6阶段关系规则 | 加减分、红线、语气风格、主动关心规则 |
| `wanzhi_configs/reply_guardrails.json` | 回复质检 | 禁用词、长度约束、系统暴露防护 |
| `wanzhi_configs/晚枝.json` | 角色卡 | 人设、说话风格、各阶段行为约束 |

> ⚠️ 请注意：本仓库**不包含**聊天记录、微信账号等隐私数据。

## ⚠️ 重要提醒

上传配置时**请务必检查**，确保不包含以下隐私数据：
- 聊天记录
- 微信账号/微信号
- 真实姓名/地址
- 手机号/身份证号
- 任何个人隐私信息

## 自定义
1. Fork 本仓库
2. 修改 `wanzhi_configs/` 下的文件
3. 用 Operit 下载你的配置
4. 或者直接上传你修改后的配置到你的仓库

## 仓库结构

```
wanzhi-configs/
├── README.md                        ← 你正在看的文件
├── .gitignore                       ← 忽略隐私文件
└── wanzhi_configs/
    ├── relationship_rules.json      ← 6阶段关系规则
    ├── reply_guardrails.json        ← 回复质检规则
    └── 晚枝.json                    ← 角色卡
```

## 许可

MIT License - 自由使用、修改、分享。