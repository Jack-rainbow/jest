'use strict'

process.on('exit', () => {
  console.log()
})

if (!process.argv[2]) {
  console.error('[文件名]必填 - Please enter new component name')
  process.exit(1)
}

// 获取参数

const path = require('path')
const fileSave = require('file-save')

// 判断是否是 .vue 结尾
const isVueFile = name => name.endsWith('.vue')

// 假设用户输入格式 a/b/c-d.vue 总是取最后的 用户如果输入 a\b\c.vue 处理不了...
const [, , pagename, pagedesc] = process.argv
let className = (pagename.split(/\/|\\/).slice(-1)[0] || '').replace('.vue', '')

const srcPath = path.resolve(__dirname, '../src')
const fileEnd = isVueFile(pagename) ? '' : '/index.vue'

const Files = [{
    filename: `pages/${pagename}/${fileEnd}`,
    content: `<script>
 ${
   pagedesc
     ? `/**
  * ${pagedesc}
  */`
     : ''
 }
  export { default } from "@/views/${pagename}${fileEnd}"
</script>`
  },
  {
    filename: `views/${pagename}${fileEnd}`,
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
  },
  {
    filename: `../test/unit/spec/${pagename}.spec.js`,
    content: `
import { createTest, destroyVM } from '../util';
import ${pagename} from '../../../src/views/${pagename}/index.vue';
describe('${pagename}', () => {
  let vm;

  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(${pagename}, true);

    expect(vm.$el).to.exist;
  });
  
});
`
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
