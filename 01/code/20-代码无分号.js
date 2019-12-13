// 自调用函数
(function() {
	console.log('hello');
})()


;`hello`.toString()

// 当采用了无分号的代码风格的时候，只需要注意一下情况就不会有上面的问题了；
// 当一行代码是以：( [ ` 开头的时候，则在前面补上一个分号用以避免一些语法解析错误。
// JavaScript代码风格
//   JavaScript Standard Style
//   Airbnb JavaScript Style
// 最好前面补分号，避免一些问题
// 《编写可维护的Javascript》