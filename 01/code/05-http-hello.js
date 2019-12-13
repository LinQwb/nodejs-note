var http = require('http');

// 使用http.createServer创建web服务器并返回实例
var server = http.createServer();

// 客户端请求过来，就会自动触发服务的request请求事件，然后执行第二个参数：回调函数
server.on('request', function(request, response){
	console.log('helle request, request.path: ==>' + request.url);

	// response.write()可以用来给客户端发送响应数据，write可以使用多次，
	// 最后必须用end()来结束响应，否则客户端会一直等待
	response.write('hello');
	response.write(' world');
	response.end();
});

// 绑定端口号，启动服务器
server.listen(3000,function() {
	console.log('启动成功，可以通过http://127.0.0.1:3000/来进行访问了');
	
})