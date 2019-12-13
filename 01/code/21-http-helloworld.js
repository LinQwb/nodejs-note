var http = require('http');
var fs = require('fs');

// 使用http.createServer创建web服务器并返回实例
var server = http.createServer();

var wwwDir = 'C:/Users/gouzia/Desktop/nodejs/code/www';

// 客户端请求过来，就会自动触发服务的request请求事件，然后执行第二个参数：回调函数
server.on('request', function(req, res){
	
	var url = req.url;
	var path = '/index.html';
	if (url !== '/') {
		path = url;
	}

	console.log(wwwDir + path);
	fs.readFile(wwwDir + path, function(err, data) {

		if (err) {
			return res.end('404 Not Found.');
		}
		res.end(data);

	});


});

// 绑定端口号，启动服务器
server.listen(80,function() {
	console.log('启动成功，可以通过http://127.0.0.1/来进行访问了');
	
})