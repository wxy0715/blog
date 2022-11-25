---
title: vue3前端实现下载本地模板
date: '2022/11/1'
tags:
 - vue
categories:
 - vue3
---

*vue3 需要在public下新建static文件夹 然后把模板文件放入static下*
```js
<el-button type="primary" @click="handleExport()">下载文件模板</el-button>
```

```js
const handleExport = () => {
  let a = document.createElement('a');
  document.body.appendChild(a);
  a.href = '../static/muban.xlsx';
  a.download = '模板' + '.xlsx';
  a.style.display = 'none';
  a.click();
  document.body.removeChild(a);
}
```
![](https://wxy-md.oss-cn-shanghai.aliyuncs.com/image-20221110163525219.png)

