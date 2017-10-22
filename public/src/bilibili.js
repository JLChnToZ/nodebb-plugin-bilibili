function genBilibiliFrame(aid,cid,width,height,divid)
{
	var f = '<iframe src="http://www.bilibili.com/html/html5player.html?aid='+
		aid+
		'&cid='+
		cid+
		'" width="'+
		width+
		'" height="'+
		height+
		'" frameborder="0" ' +
		'webkitallowfullscreen ' +
		'mozallowfullscreen ' +
		'allowfullscreen>' +
		'</iframe>'
	return f;
}

function genBiliVideo(aid,width,height,divid)
{
	$.get( "https://cors-anywhere.herokuapp.com/www.bilibili.com/video/av" + aid, function( data ) {
		//console.log(data.match(/cid=\d+/)[0].match(/\d+/)[0]);
		// console.log(genBilibiliFrame(aid,data.match(/cid=\d+/)[0].match(/\d+/)[0],width,height));
		divid.className = "bilibilivideo";
		divid.innerHTML = genBilibiliFrame(aid,data.match(/cid=\d+/)[0].match(/\d+/)[0],width,height);
	});
}
/*
$(".bilibili").click(function(){
	console.log(this.id);
	console.log(this.innerHTML);
	this.innerText = "Loading Video...";
	genBiliVideo(this.id,640,480,this);
});
*/