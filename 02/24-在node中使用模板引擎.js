// art-template
// art-template 不仅可以在浏览器使用，也可以在node中使用
// doc: https://aui.github.io/art-template/
// 安装: npm isntall art-template 
//   该命令在哪执行就会把包下载到哪里。默认会下载到 
//   node_modules 目录中，node_mudules不要改，也不支持改
//
// 在Node中使用art-template模板引擎
// 模板引擎最早就是诞生于服务器领域，后来才发展到了前端
//
// 使用方法：
//   1.安装 npm isntall art-template 
//   2.在需要使用的文件模块中加载art-template
//     var template = require('art-template');
//     参数中的art-template就是你下载的包(npm install xxx)的名字xxx
//   3.查文档，使用模板引擎的api

var template = require('art-template');
var fs = require('fs');
var http = require('http');

var server = http.createServer();

fs.readFile('./tpl.html', function(error, data) {

	if ( error ) {
		return console.log('文件读取失败.');
	}

	var ret = template.render(data.toString(),  {
		name: '蔡徐琨',
		age: 18,
		province: '美国',
		hobbies: [
			'唱',
			'跳',
			'rap',
			'篮球'
		]
	});


	server.on('request', function(req, res) {
		
		res.setHeader('Content-Type','text/html;charset=utf-8');
		res.end(ret);



	});

	

});

server.listen('80', function() {
	console.log('服务器启动成功，127.0.0.1:80');
});