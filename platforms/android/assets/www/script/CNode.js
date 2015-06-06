var CNode = (function() {
				var _$ = {}
				return _$;
            })();
			
(function(_$){
	
	var event = function() {};
	
	event.prototype = {
		//进入详细页面
		go_info:function(e){
			var url = $(this).attr("rel");
			//$.ui.showMask("加载中98startup...");
			var ref = cordova.InAppBrowser.open(url, '_blank', 'location=no');
//			$.get(url, function( data ){
//
			//});
//			$.getJSON( API_info + tid, function(data){
//				var obj = data;
//				//setInfoTit( obj.data.title );
//				$("#info_tit").html( obj.data.title );
//				$("#info_txt").html( obj.data.content );
//				$("#info_author").html( obj.data.author.loginname );
//				$("#info_date").html( obj.data.last_reply_at.substr(0,10) );
//
//				var temp = template('temp_discuss_list', data);
//				$("#box_discuss_list").html(temp);
//
//				$.ui.hideMask();
//				$.ui.loadContent("#info",false,false,"none");
//			});
		}
	}
	_$.event = new event;
	
})(CNode);