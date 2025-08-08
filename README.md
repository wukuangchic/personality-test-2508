# Psychotest (GitHub Pages)
一个纯前端、多结果页的心理测试示例站点。直接上传到 GitHub 仓库并开启 Pages 即可使用。

## 目录
- `index.html`：题目与作答页（12题，李克特 1-5 分）。
- `script.js`：题库与计分逻辑；根据最高维度跳转到对应结果页。
- `style.css`：基础样式。
- `results/*.html`：4 个类型的结果页，支持从 URL Query 中读取分数并展示。

## 部署步骤（简版）
1. 在 GitHub 新建仓库（例如 `psychotest`），把本项目文件上传到根目录。
2. 进入仓库 `Settings` → `Pages` → 选择 `Build and deployment` 的 `Source: Deploy from a branch`，再选 `Branch: main / root`。
3. 等待约 1 分钟，访问 `https://<你的用户名>.github.io/psychotest/`。

## 自定义
- 在 `script.js` 的 `QUESTIONS` 数组里改题目、改维度；可新增题目。
- 在 `results/` 里编辑 4 个结果页文案。
- 如需更多类型：新增一个结果页 HTML，并在 `DIM_ORDER` 和 `DIM_LABEL` 里加入映射即可。
