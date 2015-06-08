
if (!((window.DocumentTouch && document instanceof DocumentTouch) || 'ontouchstart' in window)) {
    var script = document.createElement("script");
    script.src = "libs/plugins/af.desktopBrowsers.js";
    var tag = $("head").append(script);
}

//初始化默认设置
$.ui.animateHeaders = false; //禁止头部动画
$.ui.useOSThemes = false; //禁止自动选择皮肤
$.ui.autoLaunch = false; //自动初始化
$.ui.openLinksNewTab = true; //禁止在新窗口打开页面？
$.ui.splitview = false; //禁止大于某个分辨率自动展开菜单
$.ui.backButtonText = " "; //设置后退按钮文字
$.ui.resetScrollers = true; //后退禁止页面回到顶部

//获取当前页面id
//$.ui.activeDiv.id

//启动页面
var init = function init() {
	$.get(API_StartUp, function(data){
		$("#img_startup").attr('src', data);
	});
	setTimeout(function() {
		//setupListUpdate();
		$.ui.launch();
		/**
		 * 设置页面默认过度方式
		 * $.ui.availableTransitions.参数;
		 * slide
		 * fade
		 * pop
		 * flip
		 * none(无切换动画)
		 */
		$.ui.availableTransitions.slide;
		if( $.os.ios ){
			$.ui.availableTransitions["default"] = $.ui.availableTransitions.slide;//
		}else{
			$.ui.availableTransitions["default"] = $.ui.availableTransitions.none;//
		}
		$('.bxslider').bxSlider({
		  mode: 'fade',
          auto: true,
          pause: 4000,
          speed: 100
        });
	}, 2000)
};
document.addEventListener("DOMContentLoaded", init, false);

//存session
function setSS(key, data) {
	sessionStorage.setItem(key, data);
}
//取session
function getSS(key) {
	return sessionStorage.getItem(key);
}
//存缓存（永久直到卸载app或清除数据）
function setLS(key, data) {
	localStorage.setItem(key, data);
}

function getLS(key) {
	return localStorage.getItem(key);
}
//时间戳
function getTimestamp() {
	var timestamp = Date.parse(new Date());
	return timestamp / 1000;
}

//第一判断是否存在某个缓存
//第二判断释放存在这个缓存的时间戳  ( 某个数据在写入缓存的同时写入一个时间戳 )
//第三获取当前的时间戳减去保存的时间戳
// 86400s 为 60*60*24 的值，一天的秒数
if ( getLS("test") && getLS("test_time") &&  ( getTimestamp - getLS("test_time") ) < 86400  ) {
	//coding
}else{
	//coding
};

//
//function setupListUpdate(){
//	$.ui.ready(function () {
//		var scrollerList = $("#main").scroller();
//
//		scrollerList.addPullToRefresh();
//		$.bind(scrollerList, "refresh-release", function () {
//			var self = this;
////			setTimeout(function () { // get content from your api using ajax and display instead of setTimeout.
////				// add new content at top of list
////				$("#main ul").prepend("<li><a href='#detailview'>New Item (via Pull Refresh)</a></li>");
////				self.hideRefresh();
////			}, 2000);
//			main_load();
//			self.hideRefresh();
//			return false; //tells it to not auto-cancel the refresh
//		});
//
//		scrollerList.addInfinite();
//		$.bind(scrollerList, "infinite-scroll", function () {
//			var self = this;
//			$("#main").find("#infinite").text("Loading...")
//			setTimeout(function () { // get content from your api using ajax and display instead of setTimeout.
//				$("#main").find("#infinite").text("Load More");
//				// add new content at bottom of list
//				$("#main ul").append("<li><a href='#detailview'>Next Item (via Infinite Scroll)</a></li>");
//				self.clearInfinite();
//			}, 2000);
//		});
//
//		scrollerList.enable();
//	});
//}