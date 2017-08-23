window.onload = function () {
	document.getElementById('title').innerHTML = 
	"页面在" + document.location.host + "域中，且每过1秒向message-watch.html文档发送一个消息";
	setInterval(function() {
		var message = "消息发送测试" + (new Date().getTime());

		window.frames[0].postMessage(message,'*');
	},1000);

}