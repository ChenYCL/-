/*jquery整屏滚动插件Scrollify*/
$(function() {
	// $(".panel").css({"height":$(window).height()});
	$.scrollify({
		section:".panel",	//选择器部分
        // easing: "easeOutExpo", //easing的动画方法
        scrollSpeed: 1500,//滚动的速度
        // offset : 0,// 抵消每个部分位置的像素
        scrollbars: true//定义是否滚动条是否可见的
	});
	//滚动箭头点击事件
	$(".scroll").click(function(e) {
		e.preventDefault();
		$.scrollify("move",$(this).attr("href"));
	});

});

/*
* 参数说明

 section : "section",  //section选择器，绑定需要滚动的对象。

 sectionName : "section-name",  //哈希值，用于区另于其它section

 easing: "easeOutExpo",  //easing的动画方法

 scrollSpeed: 1100, //滚动的速度

 offset : 0,    // 抵消每个部分位置的像素

 scrollbars: true, //定义是否滚动条是否可见的

 before:function() {}, //动画前触发的函数

 after:function() {}   //动画后触发的函数*/