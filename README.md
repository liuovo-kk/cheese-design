# Cheese Design

基于 React 的高质量基础组件库。本项目采用现代化的工程化方案，旨在通过从 0 到 1 的构建过程，实现一个具备完整生命周期管理、自动化测试及专业文档体系的企业级组件库。

## 技术栈

- 核心框架：React 18 + TypeScript
- 构建工具：Vite + pnpm workspace (Monorepo)
- 文档系统：Storybook + MDX + Highlight.js
- 测试体系：Jest + React Testing Library
- 代码规范：ESLint + Prettier + Husky + lint-staged

## 核心特性

- 单库多包管理：使用 pnpm workspace 管理组件核心包与文档子包，实现依赖统一管理与高效复用。
- 自动化 CI/CD：集成 GitHub Actions，实现代码提交后的自动单测校验与 Storybook 文档站自动部署。
- 全方位测试：涵盖基础逻辑测试、边界情况测试、UI 交互测试及快照测试，保障组件稳定性。
- 专业文档体验：支持组件源码实时预览与高亮展示，提供完整的 API 属性表与交互示例。
- 多种产物支持：支持 ESM、CommonJS 及 UMD 格式输出，完美适配 tree-shaking 按需加载。

## 项目架构

```text
cheese-design/
├── packages/
│   ├── components/       # 组件库核心源码
│   │   ├── Button/       # 通用按钮组件
│   │   ├── Input/        # 数据录入组件
│   │   └── Upload/       # 复杂上传组件（支持拖拽与状态机管理）
│   └── docs/             # 基于 Storybook 的文档与示例
├── .github/workflows/    # CI/CD 自动化流水线配置
├── package.json          # 根目录依赖管理
└── pnpm-workspace.yaml   # Monorepo 工作区定义
```

## 安装

```bash
npm install cheese-design
# 或者
pnpm add cheese-design
```

## 快速上手

### 1. 全量引入

```typescript
import { Button, Upload } from 'cheese-design';

const App = () => (
  <Upload action="/upload" multiple>
    <Button type="primary">开始上传</Button>
  </Upload>
);
```

### 2. 按需引入（推荐）

本组件库默认支持基于 ES modules 的 tree-shaking，直接导入即可实现按需加载。

```typescript
import { Button } from 'cheese-design';
```

## 已实现组件

### 通用组件

- **Button** 按钮

### 数据录入组件

- **Input** 输入框
- **Upload** 上传（支持文件拖拽、进度展示、beforeUpload 异步拦截及自定义渲染）

## 开发指南

### 本地启动

```bash
# 安装依赖
pnpm install

# 启动文档开发环境
pnpm run dev:docs
```

### 单元测试

```bash
# 运行 Jest 测试套件
pnpm run test

# 查看测试覆盖率
pnpm run test --coverage
```

### 生产打包

```bash
# 构建组件库与文档
pnpm run build
```

## 代码规范与保障

项目集成以下工具确保提交的代码符合高质量标准：

- **Husky + lint-staged**：在 Git commit 前自动执行代码格式化与校验。
- **Jest**：强制执行单元测试，确保核心逻辑与边界行为正确。
- **TypeScript**：全链路强类型支持，减少运行时错误。
