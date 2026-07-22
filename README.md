# @nanoyunhu/yunhu-protobuf-typeproto

云湖 API 的**代码优先（Code-First）** TypeScript Protobuf 类型定义与编解码实现，基于 [`@saltify/typeproto`](https://github.com/SaltifyDev/typeproto)。

在 TypeScript 中直接声明消息结构，即可获得类型推断、序列化与反序列化能力，无需维护独立的 `.proto` 文件，也无需依赖代码生成流水线。

> **注意：** Typeproto 依赖 Node.js 的 `Buffer` API，适用于 Node.js / 较新 Deno，**不兼容浏览器环境**。

## 为什么使用 Typeproto？

在 TypeScript / Node.js 场景处理 Protobuf 时，常见方案各有明显短板。本项目选择 Typeproto，正是为了避开这些痛点。

### 1. CodeGen（从 Proto3 生成代码）不适合频繁变动

传统流程是：

```text
.proto 定义 → protoc / 插件生成 TS/JS → 业务代码引用生成物
```

问题在于：

- **协议频繁迭代时成本高**：字段增删、编号调整都要改 `.proto`、重新生成、再对齐业务代码，链路长、易踩坑。
- **定义与实现分离**：类型与逻辑不在同一处维护，阅读与 Code Review 时要在多处文件间跳转。
- **生成代码可读性与美观度差**：生成物通常冗长、命名风格固定，难以作为「给人看的代码」维护。
- **与业务代码割裂**：无法像普通 TS 模块一样自然地组织命名空间、复用与注释。

云湖相关协议在逆向与对接过程中常有调整，CodeGen 的「先定 schema、再批量生成」模式并不适合这种节奏。

### 2. pb-ts / protobuf.js 等 Runtime 方案：类型提取与编写困难

纯 runtime 库（如 protobuf.js、部分 pb-ts runtime 用法）往往：

- **类型信息薄弱或难提取**：消息结构多在运行时描述，TypeScript 侧难以自动得到完整、精确的类型。
- **基于 runtime 手写成本高**：要么手写与 runtime 描述重复的类型，要么依赖复杂泛型/辅助类型，开发体验差。
- **「能跑」不等于「好写」**：编解码可用，但日常维护、重构、IDE 补全体验远不如代码优先的 TypeScript 定义。

### 3. pbjs 生成代码与现代打包器不友好

`pbjs` 一类工具生成的产物常见问题：

- **不适合现代打包器（Vite / Webpack / Rolldown 等）**：生成代码风格偏旧、模块形态怪异，tree-shaking 与静态分析困难。
- **可能依赖动态加载**：运行时解析/加载 schema 或大块生成逻辑，启动与运行路径更重，性能与可预测性一般。
- **代码美观度与可维护性差**：生成物难以人工审阅，也不适合作为长期维护的「源码真相」。

### 4. Typeproto 带来的收益

Typeproto 采用 **Code-First**：在 TypeScript 中用 `ProtoMessage` / `ProtoField` 声明结构，同时得到：

| 能力 | 说明 |
|------|------|
| 类型安全 | `encode` / `decode` 的入参与出参由定义自动推断，结构错误在编译期暴露 |
| 定义即实现 | 无单独 `.proto`、无生成步骤，改一处即可 |
| 可读可维护 | 普通 TS 源码，注释、命名空间、模块拆分与业务代码一致 |
| 打包友好 | 静态 ESM/TS 模块，适配现代构建与 tree-shaking |
| 运行时轻量 | 无动态加载 schema 的额外路径，编解码路径清晰 |

适合：**协议会变、希望类型与定义同源、在 Node 侧直接维护 Protobuf 消息** 的场景——这也是本仓库服务云湖 API 对接的出发点。

## 安装

```bash
pnpm add @nanoyunhu/yunhu-protobuf-typeproto
# 或
npm install @nanoyunhu/yunhu-protobuf-typeproto
```

依赖会引入 `@saltify/typeproto`。运行环境需满足：

```text
Node.js ^22.18.0 || >=24.5.0
```

## 快速使用

```typescript
import { PFriend, PFriendSend } from "@nanoyunhu/yunhu-protobuf-typeproto";

// 编码
const bytes = PFriendSend.AddressBookList.encode({
  md5: "previous-md5"
});

// 解码（类型自动推断）
const book = PFriend.AddressBookList.decode(bytes);
console.log(book.status?.code, book.data);
```

WebSocket 推送消息示例：

```typescript
import { PWss } from "@nanoyunhu/yunhu-protobuf-typeproto";

const msg = PWss.PushMessage.decode(buffer);
// msg.cmd、msg.data 等字段具备完整类型
```

消息定义本身也是普通的 TypeScript，例如：

```typescript
import { ProtoField, ProtoMessage } from "@saltify/typeproto";

export const Example = ProtoMessage.of({
  id: ProtoField(1, "string"),
  count: ProtoField(2, "int32", "optional"),
  tags: ProtoField(3, "string", "repeated")
});

const encoded = Example.encode({ id: "a", tags: ["x", "y"] });
const decoded = Example.decode(encoded);
```

更多 Typeproto 用法见官方文档：[@saltify/typeproto](https://github.com/SaltifyDev/typeproto)。

## 包结构

```text
src/
├── index.ts              # 统一导出
├── v1/                   # HTTP / API v1 相关消息
│   ├── index.ts          # PV1.Base / PV1.Status 等
│   ├── friend.ts         # 通讯录等（PFriend / PFriendSend）
│   ├── group.ts          # 群相关
│   ├── msg.ts            # 发消息等（PMsgSend）
│   └── user.ts           # 用户信息（PUser）
└── websocket/            # WebSocket 推送与相关结构（PWss）
    └── index.ts
```

| 命名空间 | 说明 |
|----------|------|
| `PV1` | V1 通用结构（如请求状态 `Status`、`Base`） |
| `PFriend` / `PFriendSend` | 通讯录等好友侧收/发消息 |
| `PGroup` 等 | 群相关（见 `src/v1/group.ts`） |
| `PMsgSend` | 发送消息请求体 |
| `PUser` | 用户信息 |
| `PWss` | WebSocket 指令与推送内容（如 `PushMessage`、`Heartbeat`） |

构建产物位于 `lib/`，包入口为 ESM：`./lib/index.js`。

## 开发

```bash
pnpm install
pnpm build        # tsc 编译到 lib/
pnpm dev          # tsc --watch
pnpm typecheck    # 仅类型检查
pnpm lint         # oxlint
pnpm fmt          # oxfmt
```

## 许可证

[AGPL-3.0-or-later](./LICENSE)

## 相关链接

- 仓库：https://github.com/ccd2s/yunhu-protobuf-typeproto
- Typeproto：https://github.com/SaltifyDev/typeproto
