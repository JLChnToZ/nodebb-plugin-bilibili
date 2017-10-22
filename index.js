(function(bili) {
	"use strict";
	var converts = [
		{ // Video
			from: /<a href="(?:https?:\/\/)?(?:www\.)?bilibili\.(?:tv|com)\/video\/av(\d+).*?">.+<\/a>/g,
			to: '<div class="embed-responsive embed-responsive-16by9">'+
			'<div class="btn btn-primary bilibili" id="$1" >BiliBili Video: $1</div>'+
			'</div>'
		}
	];

	bili.genBilibiliFrame = function (aid, cid, width, height, divid) {
		var f = '<iframe src="http://www.bilibili.com/html/html5player.html?aid=' +
			aid +
			'&cid=' +
			cid +
			'" width="' +
			width +
			'" height="' +
			height +
			'" frameborder="0" ' +
			'webkitallowfullscreen ' +
			'mozallowfullscreen ' +
			'allowfullscreen>' +
			'</iframe>'
		return f;
	};

	bili.genBiliVideo = function (aid, width, height, divid) {
		$.get("https://cors-anywhere.herokuapp.com/www.bilibili.com/video/av" + aid, function (data) {
			//console.log(data.match(/cid=\d+/)[0].match(/\d+/)[0]);
			// console.log(genBilibiliFrame(aid,data.match(/cid=\d+/)[0].match(/\d+/)[0],width,height));
			divid.className = "bilibilivideo";
			divid.innerHTML = genBilibiliFrame(aid, data.match(/cid=\d+/)[0].match(/\d+/)[0], width, height);
		});
	};

	bili.onload = function() {
		$(".bilibili").click(function () {
			console.log(this.id);
			console.log(this.innerHTML);
			this.innerText = "Loading Video...";
			genBiliVideo(this.id, 640, 480, this);
		});
	}

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
})(module.exports);
