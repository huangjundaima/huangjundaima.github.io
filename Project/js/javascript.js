$(document).ready(function() {
	var images = $(".images");
	var li = $(".images li");
	var liLength = li.length;
	var liWidth = $(".images li").width();
	var pointLength = $(".point").width();
	var points = $(".point");
	images.css("width", (liLength + 2) * liWidth + "px");

	//克隆第一个和最后一个图片
	var first = $(".banner ul li:first-child").clone();
	var last = $(".banner ul li:last-child").clone();
	images.append(first);
	last.insertBefore($(".banner ul li:first-child"));

	for(i = 0; i < liLength; i++) {
		points.append("<span></span>");
	}
	points.css("margin-left", -12 * liLength + "px").children("span").eq(0).addClass("active")

	var index = 0; //图片索引

	var k = setInterval(function() {
		index = (index + 1) % liLength;
		imageSwitch(index);
	}, 5000);

	//点的控制
	points.children("span").hover(function() {
		index = $(this).index();
		imageSwitch(index);
		clearInterval(k);
	}, function() {
		k = setInterval(function() {
			index = (index + 1) % liLength;
			imageSwitch(index);
		}, 2000);
	});

	images.hover(function() {
		clearInterval(k);
		//				console.log("123");
	}, function() {
		k = setInterval(function() {
			index = (index + 1) % liLength;
			imageSwitch(index);
		}, 2000);
	})

	// 下一页
	$(".banner .nextPage").click(function() {
		index = (index + 1) % liLength;
		imageSwitch(index);
		clearInterval(k);
	});
	
		
	// 上一页
	$(".banner .prev").click(function() {
		index = (index + liLength - 1) % liLength;
		imageSwitch(index);
		clearInterval(k);
	});
	

	//轮播函数
	function imageSwitch(i) {
		images.stop(true, true);
		points.children("span").removeClass("active").eq(i).addClass("active");
		if((i == 0) && (parseInt(images.css("left")) < (liWidth * -2))) {
			images.animate({
				left: -1 * (liLength + 1) * liWidth + "px"
			}, 500, function() {
				images.css("left", -1 * liWidth + "px");
			})
		} else if((i == (liLength - 1)) && (parseInt(images.css("left")) > (liWidth * -2))) {
			images.animate({
				left: "0px"
			}, 500, function() {
				images.css("left", -1 * liLength * liWidth + "px");
			})
		} else {
			images.animate({
				left: (i + 1) * liWidth * -1 + "px"
			}, 500);
		}

	};

	//课程二级菜单显示与隐藏

	var li = $(".course .stair li");

	var div = $(".course .stair li .menu")

	li.hover(function() {
		var index = $(index).index(); //当前的index的值，

		if(index > 0) {
			div.hide().eq(index - 1).show();
		}
	});

	//新闻切换
	var one = $(".news_one ul li");

	var two = $(".news .news_qie ul.news_two");
	
	one.hover(function() {
		var index = $(this).index();
		$(this).siblings().removeClass("qiehuan").end().addClass("qiehuan");
		two.hide().eq(index).show();
	});

	//最新开班切换
	var li = $(".new_top ul li");
	var sw = $(".sw ul");

	li.hover(function() {
		var index = $(this).index();
		if(index != 0) {
			$(this).siblings().removeClass("qiehuan").end().addClass("qiehuan");
		}
		//sibings 兄弟节点获取
		$(".sw ul").hide().eq(index - 1).show();
	});

	//图片放大
	$(function() {
		var img = $(".sw ul li img");
		img.mouseenter(function() {
			var wValue = 1.3 * $(this).width();
			var hValue = 1.3 * $(this).height();

			$(this).stop().animate({
				width: wValue,
				height: hValue,
				left: ("-" + (0.3 * $(this).width()) / 2),
				top: ("-" + (0.3 * $(this).height()) / 2)
			}, 600)
		}).mouseleave(function() {
			//这里是动画效果的移除，让图片恢复原来的大小
			$(this).stop().animate({
				width: "249px", //在哪里添加了一个stop是每次只执行一次动画
				height: "180px",
				left: "0px",
				top: "0px"
			}, 500);
		});

	});

	//滚动条
	var div = $(".prompt");
	var ul = $(".rolling ul");
	var liC = $(".rolling ul li").length;
	ul.css("width", 228 * liC + "px");
	var uW = ul.width();
	animate();
	//声明一个量值，把动画存放进来，
	var ani;

	function animate() {
		ani = ul.animate({
			left: -1 * uW + "px"
		}, 39000, 'linear', reset);
	}
	//linnear线性，这样写是可以给他一个匀速

	function reset() {
		ul.css("left", uW + "px");
		animate();
	}
	//hover的时候stop停止
	ul.hover(function() {
		ani.stop();
	}, function() {
		animate();
	});

	//老师切换
	var uLs = $(".teacher_bot ul");
	var lIS = $(".teacher_bot ul li ");
	var liW = $(".teacher_bot ul li").width();
	var liS = $(".teacher_bot ul li").length;
	//ul的宽度
	uLs.css("width",liS*(liW+20)+"px");
//	console.log(liS*(liW+20));
	var i = 0;
	var l = setInterval(function(){
		max();
	},3000)
	
	uLs.hover(function(){
		clearInterval(l);
	},function(){
		l = setInterval(function(){
		max();
	},3000)
	})
	
	
	
	function max(){
		i = (index)%(liS/4);
//		console.log(index);
			uLs.animate({
			left:-1200*i+"px"
		},200,'linear')
	}
	


//作品切换
var li = $(".works .works_top ul li");
var sw = $(".works_bot ul");

li.hover(function() {
	var index = $(this).index();
	if(index != 0) {
			$(this).siblings().removeClass("qiehuan").end().addClass("qiehuan");
		}
	if(index > 0) {
		sw.hide().eq(index - 1).show();
	}
});

$(function() {
	var img = $(".works_bot ul li img")
	img.mouseenter(function() {
		var wValue = 1.3 * $(this).width();
		var hValue = 1.3 * $(this).height();

		$(this).stop().animate({
			width: wValue,
			height: hValue,
			left: ("-" + (0.3 * $(this).width()) / 2),
			top: ("-" + (0.3 * $(this).height()) / 2)
		}, 600)
	}).mouseleave(function() {
		//这里是动画效果的移除，让图片恢复原来的大小
		$(this).stop().animate({
			width: "249px", //在哪里添加了一个stop是每次只执行一次动画
			height: "180px",
			left: "0px",
			top: "0px"
		}, 500);
	});

});

});