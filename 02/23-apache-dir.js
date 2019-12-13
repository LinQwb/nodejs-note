var http = require('http');
var fs = require('fs');
// 使用http.createServer创建web服务器并返回实例
var server = http.createServer();

var wwwDir = 'C:/Users/gouzia/Desktop/nodejs/www';

// 客户端请求过来，就会自动触发服务的request请求事件，然后执行第二个参数：回调函数
server.on('request', function(req, res){
	
	var url = req.url;
	fs.readFile('./template.html', function(err, data) {

		if (err) {
			return res.end('404 Not Found.')
		}
		fs.readdir(wwwDir, function(error, files) {
			
			if (error) {
				return console.log('Can Not Found wwwDir.');
			}

			var content = '';
			files.forEach(function(item) {
				content += `
					<tr> 
				     <td sortable-data="2index.html">
				      <table class="ellipsis">
				       <tbody>
				        <tr>
				         <td><a class="file" href="index.html"><img src="moz-icon://.html?size=16" alt="文件： " />${item}</a></td>
				        </tr>
				       </tbody>
				      </table></td> 
				     <td sortable-data="92">1 KB</td> 
				     <td sortable-data="1574867759000000">2019/11/27</td> 
				     <td>23:15:59</td> 
				    </tr>
				`
			})

			data = data.toString();
			data = data.replace('-_-',content);

			res.end(data);

		});


		//res.end(data);

	});




});

// 绑定端口号，启动服务器
server.listen(80,function() {
	console.log('启动成功，可以通过http://127.0.0.1/来进行访问了');
})