'use strict'

process.on('exit', () => {
  console.log()
})

if (!process.argv[2]) {
  console.error('[文件名]必填 - Please enter new component name')
  process.exit(1)
}

// 获取参数
const [, pagename, pagedesc] = process.argv

const path = require('path')
const fileSave = require('file-save')
// 假设用户输入格式 a/b/c-d.vue 总是取最后的 用户如果输入 a\b\c.vue 处理不了...
const className = pagedesc.split(/\/|\\/).slice(-1)[0]
const srcPath = path.resolve(__dirname, '../src')

const Files = [
  {
    filename: `pages/${pagename}/index.vue`,
    content: `<script>
 ${pagedesc ?
`/**
  * $${pagedesc}
  */
  `: ''}

  export { default } from "@/views/${pagename}/index.vue"
</script>`
  },
  {
    filename: `views/${pagename}/index.vue`,
    content: `<template>
  <div class="${className}"></div>
</template>

<script>
export default {
  name: '${className}'
};
</script>

<style lang="less">
</style>`
  }
]

Files.forEach(file => {
  const pageFullPath = path.join(srcPath, file.filename)
  console.log(pageFullPath)
  fileSave(pageFullPath)
    .write(file.content, 'utf8')
    .end('\n')
})

console.log('DONE!')
