window.onload = function() {
	/*HTML5的canvas是一个矩形区域，它包含两个属性width和height，分别表示矩形区域的宽和高
	*默认值是300px和150px
	*/

	//绘制矩形
	var c =document.getElementById("canvasRect");              //获取画布对象
	var cxt = c.getContext("2d");							   //获取当前2d的上下文对象
	cxt.fillStyle = "rgb(0,0,200)";							   //fillStyle设置填充的颜色和透明度
	cxt.fillRect(0,0,100,100);                                 //fillRect绘制矩形


	//绘制圆形
	var c =document.getElementById("canvasCircle");
	var cxt = c.getContext("2d");
	cxt.fillStyle = "#FFaa00";
	cxt.beginPath();                                          //beginPath()开始绘制路径
	cxt.arc(70,18,10,0,Math.PI*2,true);						  //arc(x,y,radius,startAngle，endAngle,true|false);
	cxt.closePath();										  //结束路径的绘制
	cxt.fill();												  //进行填充

	/*
	*在每个canvas实例对象中都有一个path对象，创建自定义图形的过程就是对path对象进行操作的过程
	*每开始一次新的绘制任务，都需要调用beginPath()方法来重置path对象至初始状态
	*moveTo(x,y)设置绘图起始坐标
	*lineTo(x,y)目标位置
	*/
	//绘制直线
	var c = document.getElementById("canvasLine");
	var cxt = c.getContext("2d");
	cxt.beginPath();                                      //开始绘制路径
	cxt.moveTo(10,10);									  //绘制起点
	cxt.lineTo(150,50);																		  
	cxt.lineTo(10,50);
	cxt.strokeStyle = "rgb(0,182,0)";					 //strokeStyle()指定线条的颜色
	cxt.lineWidth = 14;									 //属性设置线条的粗细
	cxt.stroke();

	/*
	*渐变是两种或更多颜色的平滑过渡，是指在颜色集上使用逐步抽样算法，并将结果应用到描边样式和填充样式中
	*canvas的绘图上下文支持两种类型的渐变
	*线性渐变
	*放射性渐变
	*/

	//绘制线性渐变
	var c = document.getElementById("canvasLineGradient");
	var cxt = c.getContext("2d");
	var gradient = cxt.createLinearGradient(0,0,0,c.height);
	gradient.addColorStop(0,"#fff");
	gradient.addColorStop(1,"#000");
	cxt.fillStyle = gradient;
	cxt.fillRect(0,0,400,400);

	//绘制径向渐变
	var c = document.getElementById("canvasRadialGradient");
	var cxt = c.getContext("2d");
	var gradient = cxt.createRadialGradient(c.width/2,c.height/2,0,c.width/2,c.height/2,150);
	gradient.addColorStop(0,"#fff");
	gradient.addColorStop(1,"#000");
	cxt.fillStyle = gradient;
	cxt.fillRect(0,0,400,400); 


	//变换远点坐标
	//translate(x,y)在原坐标的基础上平移x和y
	
	function draw(id) {
		var c = document.getElementById(id);
		if(!!!c) return fasle;
		var cxt =c.getContext("2d");
		cxt.fillStyle = "#eeeeff";
		cxt.fillRect(0,0,400,300);
		cxt.translate(200,50);
		cxt.fillStyle = "rgba(255,0,0,0.25)";
		for( var i = 0; i <50; i++) {
			cxt.translate(25,25);
			cxt.fillRect(0,0,100,50);
		}
		

	}
	draw("canvasTranslate");

	




	

};