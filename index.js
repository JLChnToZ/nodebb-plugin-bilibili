(function(bili) {
	"use strict";
	var converts = [
		{ // Video
			from: /<a href="(?:https?:\/\/)?(?:www\.)?bilibili\.(?:tv|com)\/video\/av(\d+).*?">.+<\/a>/g,
			to: '<div class="embed-responsive embed-responsive-16by9">'+
			'<iframe allowfullscreen="" scrolling="no" src="//www.bilibili.com/html/player.html?aid=$1&as_wide=1" '+
			'style="border:0;height:100%;left:0;position:absolute;width:100%"></iframe></div>'
		}
	];

	bili.parse = function(data, callback) {
		//console.log(data);
		try {
			for(var i = 0; i < converts.length; i++)
				data.postData.content = data.postData.content.replace(converts[i].from, converts[i].to);
			callback(null, data);
		} catch(ex) {
			callback(ex, data);
		}
	};

	bili.addScripts = function (scripts, callback){
		//console.log("o.o...");
		scripts.push('/assets/src/bilibili.js');
		callback(null,scripts);
	}
})(module.exports);
