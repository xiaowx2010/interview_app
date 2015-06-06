
function pops( poptext ){
	var pops_opts = {
		id: "pops",
		title: "提示",
		message: poptext,
		cancelText: "确定",
		cancelOnly: true
	}
	$.ui.popup( pops_opts );
}

/**
 * [setInfoTit 设置内页标题]
 * @param  {[sting]} str [内页标题]
 */
function setInfoTit( str ){
	$("#info_header h1").html( str )
}






function main_load(){

	if( main_status == true ){
		console.log("已加载");
	}else{
		$.ui.showMask("加载中main_load...");
		update_news_list(API_News_List, "box_hot_list");
		setupListUpdate("main", "box_hot_list");
	}

	$(document).on("tap","#main .go_info", CNode.event.go_info );

	$("#main").bind("swipeLeft",function(){
		console.log("#main 左滑动");
		$.ui.loadContent("#share",false,false,"slide");
	})

	$("#main").bind("swipeRight",function(){
		console.log("#main 右滑动");
		$.ui.loadContent("#jobs",false,false,"right");
	})

	$("#f_main").attr("data-transition","slide");
	$("#f_share").attr("data-transition","slide");
	$("#f_ask").attr("data-transition","slide");
	$("#f_jobs").attr("data-transition","slide");

}

function main_unload(){
	$(document).off("tap","#main .go_info");

	$("#main").unbind();

}


function share_load(){

	if( share_status == true ){
		console.log("已加载");
	}else{
		$.ui.showMask("加载中share_load...");
//		$.getJSON( API_hotlist + "?tab=share" ,function(data){
		$.getJSON( API_News_List ,function(data){
			var temp = template('temp_hot_list', data);
			$("#box_share_list").html(temp);
			share_status = true;
			$("#share img.unveil").unveil();
			$.ui.hideMask();
		});

		shareScroll = $("#share").scroller();

		$.bind( shareScroll, "scrollend", function(){
			$("#box_share_list img.unveil").unveil();
		})
	}

	$(document).on("tap","#share .go_info", CNode.event.go_info );

	$("#share").bind("swipeLeft",function(){
		console.log("#share 左滑动");
		$.ui.loadContent("#ask",false,false,"slide");
	})

	$("#share").bind("swipeRight",function(){
		console.log("#share 右滑动");
		$.ui.loadContent("#main",false,false,"right");
	})

	$("#f_main").attr("data-transition","right");
	$("#f_share").attr("data-transition","slide");
	$("#f_ask").attr("data-transition","slide");
	$("#f_jobs").attr("data-transition","slide");

}

function share_unload(){
	$(document).off("tap","#share .go_info");
	$("#share").unbind();
}



function ask_load(){

	if( ask_status == true ){
		console.log("已加载");
	}else{
		$.ui.showMask("加载中share_unload...");
//		$.getJSON( API_hotlist + "?tab=ask" ,function(data){
		$.getJSON( API_News_List ,function(data){
			var temp = template('temp_hot_list', data);
			$("#box_ask_list").html(temp);
			ask_status = true;
			$("#ask img.unveil").unveil();
			$.ui.hideMask();
		});

		shareScroll = $("#ask").scroller();

		$.bind( shareScroll, "scrollend", function(){
			$("#box_ask_list img.unveil").unveil();
		})
	}

	$(document).on("tap","#ask .go_info", CNode.event.go_info );

	$("#ask").bind("swipeLeft",function(){
		console.log("#ask 左滑动");
		$.ui.loadContent("#jobs",false,false,"slide");
	})

	$("#ask").bind("swipeRight",function(){
		console.log("#ask 右滑动");
		$.ui.loadContent("#share",false,false,"right");
	})

	$("#f_main").attr("data-transition","right");
	$("#f_share").attr("data-transition","right");
	$("#f_ask").attr("data-transition","slide");
	$("#f_jobs").attr("data-transition","slide");

}

function ask_unload(){
	$(document).off("tap","#ask .go_info");
	$("#ask").unbind();
}


function jobs_load(){



	if( jobs_status == true ){
		console.log("已加载");
	}else{
		$.ui.showMask("加载中jobs_load...");
//		$.getJSON( API_hotlist + "?tab=job" ,function(data){
		$.getJSON( API_News_List ,function(data){
			var temp = template('temp_hot_list', data);
			$("#box_jobs_list").html(temp);
			jobs_status = true;
			$("#jobs img.unveil").unveil();
			$.ui.hideMask();
		});

		jobsScroll = $("#jobs").scroller();
	
		$.bind( jobsScroll, "scrollend", function(){
			$("#box_jobs_list img.unveil").unveil();
		})
	}
	
	$(document).on("tap","#jobs .go_info", CNode.event.go_info );
	
	$("#jobs").bind("swipeLeft",function(){
		console.log("#jobs 左滑动");
		$.ui.loadContent("#main",false,false,"slide");
	})
	
	$("#jobs").bind("swipeRight",function(){
		console.log("#jobs 右滑动");
		$.ui.loadContent("#ask",false,false,"right");
	})
	
	$("#f_main").attr("data-transition","right");
	$("#f_share").attr("data-transition","right");
	$("#f_ask").attr("data-transition","right");
	$("#f_jobs").attr("data-transition","slide");

}

function jobs_unload(){
	$(document).off("tap","#jobs .go_info");
	$("#jobs").unbind();
}


function info_load(){

	$("#box_discuss_list img.unveil").unveil();
	if( info_status == true ){
		console.log("无需重复绑定");
	}else{
		infoScroll = $("#info").scroller();
		$.bind( infoScroll, "scrollend", function(){

			$("#box_discuss_list img.unveil").unveil();
			
			info_status = true;
			//console.memory;
		})
	}
}

function info_unload(){
	console.log("11");
}


function setupListUpdate(sc_control ul_name){
		var scrollerList = $("#"+sc_control+"").scroller();

		scrollerList.addPullToRefresh();
		$.bind(scrollerList, "refresh-release", function () {
			var self = this;
			update_news_list(API_News_List, ul_name);
			$("#"+sc_control+"").attr('page',1);
			self.hideRefresh();
			return false; //tells it to not auto-cancel the refresh
		});

		scrollerList.addInfinite();
		$.bind(scrollerList, "infinite-scroll", function () {
			console.log("infinite-scroll");
			var self = this;
			$infinite = $("#"+sc_control+"").find("#infinite");
			$infinite.text("Loading...")
			var page = $("#"+sc_control+"").attr('page');
			page = parseInt(page)+1;
//			append_news(API_News_List + page, "box_hot_list");
			$.ajaxSettings.async = false;
			$.getJSON( API_News_List + page ,function(data){
				var temp = template('temp_hot_list', data);
				$("#"+ul_name+"").append(temp);
				$("#"+sc_control+"").attr('page', page);
				console.log("update list:"+page);
				$infinite.text("Load More");
				self.clearInfinite();
				$.ajaxSettings.async = true;
			});
			return false;
		});

		scrollerList.enable();
}

function update_news_list(uri, tmp){
	$.getJSON( uri ,function(data){
		var temp = template('temp_hot_list', data);
		$("#"+tmp+"").html(temp);

		share_status = true;
		$("#share img.unveil").unveil();
		$.ui.hideMask();
	});
}

function append_news(uri, tmp){
	$.getJSON( uri ,function(data){
		var temp = template('temp_hot_list', data);
		$("#"+tmp+" ul").append(temp);
	});
}