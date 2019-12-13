// app application

var http = require('http');
var fs = require('fs');
var template = require('art-template');
var url = require('url');

var comments = [
{
	name: '楼主',
	msg: '我真tm帅',
	dateTime: '2019-11-30 16:59:00'
},
{
	name: '路人1',
	msg: '楼上是我儿子',
	dateTime: '2019-11-30 17:02:03'
},
{
	name: '路人2',
	msg: '楼上是我孙子',
	dateTime: '2019-11-30 17:05:12'
},
{
	name: '楼主',
	msg: '汪汪汪',
	dateTime: '2019-11-30 17:05:33'
}
];


// 对于/pinlun?name=的2132134反对法&message=发动快速反击的思考，这种请求路径，由于
// 其中具有用户动态填写的内容，所以不可能通过判断完整的url路径来处理这个请求

var server = http.createServer(function(req, res) {

	// 用url.parse方法将路径解析为一个方便操作的对象，第二个参数为true表示直接将查询字符串转
	// 为一个对象
	var parseObj = url.parse(req.url,true);

	// 单独获取不包含查询字符串的路径部分
	var pathname = parseObj.pathname;
	
	if ( pathname === '/') {
		fs.readFile('./views/index.html', function(error, data) {

			if ( error ) {
				fs.readFile( './views/404.html', function(error, data) {

					if ( error ) {
						return console.log('404 Not Found.');
					}
					
					res.end(data);
				});
			}
			var ret = template.render(data.toString(), {
				comments: comments
			});
			res.end(ret);
		});
	}else if ( pathname.indexOf( '/resources/' ) === 0) {

		fs.readFile( '.' + pathname, function(error, data) {

			if ( error ) {
				fs.readFile( './views/404.html', function(error, data) {

					if ( error ) {
						return console.log('404 Not Found.');
					}
					res.end(data);
				});
			}
			res.end(data);
		});
	}else if ( pathname.indexOf( '/views/') === 0) {
		fs.readFile( '.' + pathname + '.html' , function(error, data) {

			if ( error ) {
				fs.readFile( './views/404.html', function(error, data) {

					if ( error ) {
						return console.log('404 Not Found.');
					}
					res.end(data);
				});
			}
			res.end(data);
		});

	}else if ( pathname === '/pinlun') {
		
		var comment = parseObj.query;
		comment.dateTime = '2019-12-09 13:42.56';
		comments.push(comment);

		// 如何通过服务器让客户端重定向
		// 状态码设置为302(临时重定向)，在响应头中通过Location告诉客户端往哪儿重定向
		res.statusCode = 302;
		res.setHeader('Location', '/');
		res.end();

	}else{
		fs.readFile( './views/404.html', function(error, data) {

			if ( error ) {
				return console.log('404 Not Found.');
			}
			res.end(data);
		});
	}

}).listen(3000, function() {
	console.log('server is success start!');
});