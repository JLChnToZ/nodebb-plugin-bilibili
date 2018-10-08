//gen html
function genBilibiliFrame(aid,cid,width,height,divid)
{
	var f = '<iframe src="https://player.bilibili.com/player.html?aid='+
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

//get video cid
function genBiliVideo(aid,width,height,divid)
{
	$.get( "https://cors-anywhere.herokuapp.com/www.bilibili.com/video/av" + aid, function( data ) {
		console.log(data.match(/cid=\d+/)[0].match(/\d+/)[0]);
		console.log(genBilibiliFrame(aid,data.match(/cid=\d+/)[0].match(/\d+/)[0],width,height));
		divid.className = "bilibilivideo";
		divid.innerHTML = genBilibiliFrame(aid,data.match(/cid=\d+/)[0].match(/\d+/)[0],width,height);
	});
}
