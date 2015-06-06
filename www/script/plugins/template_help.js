/**
 * 　　　┏┓　　　┏┓
 * 　　┏┛┻━━━┛┻┓
 * 　　┃　　　　　　　┃
 * 　　┃　　　━　　　┃
 * 　　┃　┳┛　┗┳　┃
 * 　　┃　　　　　　　┃
 * 　　┃　　　┻　　　┃
 * 　　┃　　　　　　　┃
 * 　　┗━┓　　　┏━┛
 * 　　　　┃　　　┃
 * 　　　　┃　　　┃
 * 　　　　┃　　　┗━━━┓
 * 　　　　┃　　　　　　　┣┓
 * 　　　　┃　　　　　　　┏┛
 * 　　　　┗┓┓┏━┳┓┏┛
 * 　　　　　┃┫┫　┃┫┫
 * 　　　　　┗┻┛　┗┻┛
 * ━━━━━━神兽保佑,代码无bug━━━━━━
 *
 *
 * @date		2014年11月10日 17:47:25
 * @author		por
 * @version		v 1.0.0
 * @email		675972282@qq.com
 *
 *
 */

template.helper('hot_status', function (data) {
	var obj = data;
	
	if( obj.top == true ){
		return data = "置顶";
	}else if( obj.good == true ){
		return data = "精华";
	}else{
		
		switch( obj.tab ){
			case "share":
				data = "分享";
				break;
			case "ask":
				data = "问答";
				break;
			case "job":
				data = "招聘";
				break;
			default:
				data = "其他";
				break;
		}
		
		return data;
		
	}
});

template.helper("avater",function( data ){
	var avastr = data.substr(0,5);
	
	
	if( avastr == "https" ){
		return data;
	}else{
		return data = "https:" + data;
		//console.error("xx");
	}


})