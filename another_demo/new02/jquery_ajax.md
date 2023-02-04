jquery封装的ajax
```javascript
$.ajax({
    type: "get/post", // 请求的方式
    url: "xxx", // 请求接口 请求的地址
    data: { // 发送给后台（接口）的数据，没有参事的时候可以忽略
        后台接收的变量: 前段传递的值
    },
    dataType: "json/xml/text/html/js", // 返回的数据类型 JSON.parse, 也可以省略, 报错了再设置
    async: "true",  // 是否异步, 默认是true
    success: function (data) { // 成功的回调函数
        // data: 后台返回的数据
    },
    error: function (err) { // 失败的回调函数
        // err: 错误信息
    },
    beforeSend: function () { // 发送请求之前执行的回调函数
    },
    complete: function () { // 不管成功还是失败都会执行的回调函数
    }
})
```

