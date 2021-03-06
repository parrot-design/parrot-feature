// 这里的node代码。会用babel处理
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import express from 'express' 
 
const app = express()
app.use(express.static('public'))

 
app.get('/', (req, res) => {
  // 获取根据路由渲染出的组件，并且拿到loadData方法 获取数据
  const content=renderToString(App);
  // 字符串模板
  res.send(`
    <html>
      <head>
        <meta charset="utf-8"/>  
      </head>
      <body>
        <div id="root">${content}</div> 
        <script src="/bundle.js"></script>
      </body>
    </html>`)
})  
app.listen(9000, () => {
  console.log('监听完毕')
})

