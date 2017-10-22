(function(bili) {
	"use strict";
	var converts = [
		{ // Video
			from: /<a href="(?:https?:\/\/)?(?:www\.)?bilibili\.(?:tv|com)\/video\/av(\d+).*?">.+<\/a>/g,
			to: '<div class="embed-responsive embed-responsive-16by9">'+
			'<div class="btn btn-primary bilibili" id="$1" ' +
			'onclick="{this.innerText=\'Loading Video...\';genBiliVideo(this.id, 640, 480, this);}" ' +
			' >BiliBili Video: $1</div>'+
			'</div>'
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
		console.log("o.o...");
		scripts.push('node_modules/nodebb-plugin-bilibili/public/src/bilibili.js');
		callback(null,scripts);
	}
})(module.exports);
