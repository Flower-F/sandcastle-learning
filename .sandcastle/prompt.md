# Context

!`ls -la`

请在 `todo-app/` 目录下从零搭建应用。

# Task

用 **React + Vite + TypeScript** 实现一个简单的 Todo List 应用。

## 功能要求

1. **添加 todo**：输入框 + 按钮（或 Enter）添加新项
2. **标记完成**：点击 checkbox 切换完成/未完成
3. **删除 todo**：每项提供删除按钮
4. **筛选**：支持 All / Active / Completed 三个视图
5. **计数**：显示剩余未完成数量

## 技术要求

- 使用 `npm create vite@latest` 脚手架，选 React + TypeScript
- 项目放在 `todo-app/` 目录
- 组件拆分清晰（如 Input、List、Item、Filter）
- 样式简洁可用即可，不必引入 UI 库
- 确保 `npm install` 和 `npm run build` 能通过

## 交付

1. 创建功能分支并提交代码
2. 推送到远程并开一个 PR，简要说明实现了什么
3. 在 PR 描述里写清楚如何本地运行（`cd todo-app && npm install && npm run dev`）

# Done

以上全部完成后，输出 `<promise>COMPLETE</promise>`。
