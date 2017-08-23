window.onload = function() {
	//测试浏览器对webStroage存储支持情况！
	//检查storage对象是否存在
	/*if(typeof(Storage) !== "undefined") {
		console.log ("your browser support sessionStorage")
	}else {
		console.log('your browser dose not support sessionStorage!');
	}*/
	//分别检查各自的对象
	if(window.localStorage) {
		//sessionStorage方法针对一个session进行数据存储。如果用户关闭浏览器窗口后，数据会自动删除。
		//创建session对象
		sessionStorage.name = "努力过好每一天！";
		//document.write(sessionStorage.name);
	}else{
		console.log("您的浏览器不支持sessionStorage!")
	}

	//网站访问记录计时器
	//用户刷新一次页面，计数器的数值加1，关闭浏览器窗口，再次打开网页，计数器将重置为1.
	if(sessionStorage.count) {
		
		sessionStorage.count = Number(localStorage.count) + 1;
	} else {
		sessionStorage.count = 1;
	}
	if(localStorage.count) {
		localStorage.count = Number(localStorage.count) + 1;
	} else {
		localStorage.count = 1;	
	}
	/*
	var p1 = document.createElement("p");
	var p2 = document.createElement("p");
	document.body.appendChild(p1);
	document.body.appendChild(p2);
	var text1 = "sessionStorage:您访问该网站的次数为" + sessionStorage.count;
	var text2 = "localStorage:您访问该网站的次数为" + localStorage.count;
	p1.innerHTML = text1;
	p2.innerHTML = text2;
	*/
	//Web Storage API的其他操作
	//清空localStorage   localStorage.clear()
	//Session Storage中的clear函数只会清空当前会话存储的数据

	
	//使用Json对象存储数据
	if( !!localStorage) {
		function saveStorage () { //创建一个js对象，用于存放当前从表单获得的数据
			var data = new Object;
			alert(2);
			
			data.user = document.getElementById("user").value;
			data.mail = document.getElementById("mail").value;;
			data.tel = document.getElementById("tel").value;

			//创建一个JSON对象，让其对应html文件中创建的对象的字符串数据形式
			var str = JSON.stringify(data);
			//将JSON对象存放到localStorage上
			localStorage.setItem(data.user,str);
			console.log("数据已经保存！被保存的用户名为:" + data.user);

		}
	}

	//从localStorage中检索用户输入打的名称对应的json字符串，然后把json字符串解析为一组信息，并且打印到指定位置
	function findStorage (id) {
		// saveStorage();
		var requiredPersonName = document.getElementById("find").value;
		var str = localStorage.getItem(requiredPersonName);
		console.log(str);
		var data =JSON.parse(str);
		console.log(data);
		//从Object对象中分离出相关属性值，然后输出
		var result = "用户名:" + data.user + "<br/>";
		result += "E-mail:" + data.mail +  "<br/>";
		result += "TEL:" + data.tel +  "<br/>";
		var target = document.getElementById(id);
		target.innerHTML = result;
	}
		

	var obj = document.getElementById("btn2");
	obj.onclick =function () {
		
		findStorage("msg");
	}
	




	

};