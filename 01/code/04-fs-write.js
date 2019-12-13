var fs = require('fs');

// 写文件测试成功
/*fs.writeFile('./resources/a.txt', 'happy nodejs',function(error){

	// 如果writeFile的文件地址中含有“> ！”等字符，会报错
	console.log(error);
	//测试成功
});*/

// 读不存在的文件测试
fs.readFile('./resources/ba.txt',function(error, data){

	console.log(error); //这是一个对象
	if(error){
		console.log(error.errno);
	}else{
		console.log(data);
		console.log(data.toString());
	}
	
	
});
