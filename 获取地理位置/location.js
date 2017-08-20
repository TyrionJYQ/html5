window.onload = function(){
	/*
	@获取地理位置最常用的API：getCurrentposition
	@语法格式：getCurrentposition(onSuccess, onError, options);
		1.onSuccess
		在onSuccess回调函数中，用到了参数position，代表一个具体的position对象，表示当前位置。具有如下属性：
			1）latitude:当前地理位置的维度
			2）longitude:当前位置的经度
			3）altitude:当前位置的海拔高度（不能获取时为null）
			4）accuracy:获取到的维度和经度的精度（以米为单位）
			5) altitudeAccuracy:获取到的海拔高度的精度（以米为单位）
			6）heading:设备的前进方向，用面朝正北方向的顺时针旋转角度来表示（不能获取时为null）
			7）speeding：设备的前进速度（m/s为单位）
		2.onError:获取当前地理位置信息失败时所执行的回调函数。
			1）code错误码：
			用户拒绝了位置服务：值为1
			获取不到位置信息：值为2
			获取信息超时错误：值为3
			2）message:字符串，包含了具体的错误信息。
		3.options:参数
			1）enableHighAccuracy:是否要求高精度的地理位置信息
			2）timeout:设置超时时间（单位为ms）
			3）maximumAge:对地理位置信息进行缓存的有效时间（单位ms）
	@获取地理位置需要耗时，同时属于隐私的问题，需要取得用户的同意。

	*/
	function init() {
		if(navigator.geolocation) {
			//获取当前地理位置
			navigator.geolocation.getCurrentPosition(
				function (position) {
					var coords = position.coords;
					console.log(position);

				},
				function (error) {

				}
			);
		} else {
			alert("您的浏览器不支持HTML5来获取地理位置信息！")
		}
	}
}