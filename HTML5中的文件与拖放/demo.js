window.onload = function () {
	function getId(id) {               //简化
		return document.getElementById(id);
	}
	var result = getId("result");
	var file = getId("file");

	//判断浏览器是否支持FileReader接口
	if (!!!FileReader) {
		result.innerHTML = "<p>你的浏览器不支持FileReader接口！</p>"
		file.setAttribute("disabled","disabled");   //使选择控件不可操控
	} else {

		//readAsDataUrl
		function readAsDataUrl () {
			//检验是否为图像文件
			var file = getId("file").files[0];  //一个list获取第一个文件
			console.log(file);
			if(!/image\/\w+/.test(file.type)) {
				alert("这个不是图片文件，请重新选择！");
				return false;
			} else {
				var reader = new FileReader ();
				console.log (reader);
				//将文件以Data URL形式读入页面
				reader.readAsDataURL(file);                //结果会存储在result属性中
				reader.onload = function (e) {
					var result = getId("result");
					console.log(this);
					//显示文件
					result.innerHTML =' <img src=" '+this.result +'" alt=""/>';
				}
			}
		}

		//readAsText()
		function readAsText() {
			var file = getId("file").files[0];
			var reader = new FileReader();
			//将文件以文本形式读入页面
			reader.readAsText(file);
			reader.onload = function (f) {
				var result = getId("result");
				//显示文件
				result.innerHTML =this.result;
			}
		}
	}
	//文件拖放
	/*功能实现上存在一些问题，待解决*/
	function allowDrop (ev) {
		ev.preventDefault();
	}

	function drag(ev) {
		ev.dataTransfer.setData("text",ev.target.id);
	}

	function drop(ev) {
		ev.preventDefault();
		var data = ev.dataTransfer.getData("text");
		ev.target.appendChild(getId(data));
	}












	//预览内容
	var button = getId("button");
	var btn = getId("btn");
	if(button) {
		button.onclick = function () {
			readAsDataUrl();
		}
	}
	if(btn) {
		btn.onclick = function () {
			readAsText();
		}
	}
	
	var div1 = getId("div1");
	div1.ondrop = function () {
		drop(event);
	};
	div1.ondragover = function() {
		allowDrop(event);
	}


	var div2 = getId("div2");
	div2.ondrop = function () {
		drop(event);
	};
	div2.ondragover = function() {
		allowDrop(event);
	}

};