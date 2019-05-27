# 页面文件放置处

## 目录说明

该文件夹下的文件尽量是一个文件夹一个页面。

文件夹内会有自己的components文件，图片文件等。相对独立。



## **单元测试**


`1.单元测试`
 
.karma+mocha+chai(**采用element单元测试方案-编写单元测试可以参考element**)

 npm run test

`2.清空覆盖率测试报告`

npm run clean


`3.编写测试目录`

>test/unit/spec (后缀必须以`.spec.js`命名)


`4.测试报告目录`

>test/uni/coverage

`5.一键生成vue文件及测试文件`

node build/bin/new.js XXX 