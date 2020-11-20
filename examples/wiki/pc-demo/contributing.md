# 贡献指南

## 分支管理

- 推荐使用以下命名来管理分支：
- 功能开发以 `feature/功能名` 命名
- 组件开发以 `components/组件名` 命名
- 修复 bug 以 `bugfix/bug(bugId或简短名)` 命名
- 紧急修复以 `hotfix/bug` 命名。

## 开发环境依赖

node 8+, npm 5+, 由于使用 package-lock.json 请使用 `npm install` 或者 `mnpm install` 安装依赖
查看 demo

```
npm run dev
```

打包代码

```
npm run build:all
```

## 组件开发流程

- 场景调研
- Demo、API 制定
- API 评审
- 功能开发
- 设计走查
- 代码 Reivew

> API 文档编写可以使用[tableconver](https://tableconvert.com/), 利用导入功能把之前的 md 内容导入，便于格式化修改
