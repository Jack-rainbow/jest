# api

这个文件目录下主要放置API接口集合，需要按照不同的服务来进行一个分类


# 文件夹说明
文件夹命名规则统一为-命名法

# 接口名称声明规则

统一以请求方式为开头，后面接上API的最后一个字符串。命名规则为小驼峰命名法
eg: 请求方式：PUT 请求路径：/xpaas-staff-center/api/v1/roleFunctionGroups/apps/{appId}/role/{roleId}/functionGroupElement
则命名为：putFunctionGroupElement