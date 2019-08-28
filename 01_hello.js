var fs = require('fs')
//读文件
// fs.readFile('./data/h.txt',function(err,data){
//     if(err){
//         console.log(err)
//         return false;
//     }
//     console.log(data.toString())
// })

// //写文件
// //成功：err = mull ；失败：err = 错误对象
// fs.writeFile('./data/你好.md', '你好，我是node JS写入的文件', (err) => {
//     if(err){
//         console.log(err)
//         return false
//     }
//     console.log('wenjianxieruchenggong')
// })


//构建一个web服务器
var http = require('http')
//使用http.createServer()方法创建一个web服务器，返回一个server实例
var server = http.createServer()
//注册request请求事件，当客户端请求，自动触发request事件，执行回调
//  -Request 请求对象；-Response 响应对象
server.on('request',function(request,response){
    console.log('收到请求,请求路径是：' +request.url)
})
//绑定端口号，启动服务器
server.listen(3000,function(){
    console.log('服务启动成功，可以通过http：//127.0.0.1:3000 来访问')
})