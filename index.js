(function(bili) {
  "use strict";

  var converts = [
    { // Video
      from: /<a href="(?:http:\/\/)?(?:www\.)?bilibili\.(?:tv|com)\/video\/av(\d+).*?">.+<\/a>/g,
      to: '<div class="embed-responsive embed-responsive-16by9">'+
      '<embed width="440" height="356" wmode="transparent"'+
      'quality="high" allowfullscreen="true" flashvars="playMovie=true&auto=1"'+
      'pluginspage="http://get.adobe.com/flashplayer/"'+
      'allowscriptaccess="never" src="http://share.acg.tv/flash.swf?aid=$1&page=1" '+'type="application/x-shockwave-flash"class="embed-responsive-item"></div>'
    }
  ];

  bili.parse = function(postContent, callback) {
    try {
      for(var i = 0; i < converts.length; i++)
        postContent = postContent.replace(converts[i].from, converts[i].to);
      callback(null, postContent);
    } catch(ex) {
      callback(ex, postContent);
    }
  };

})(module.exports);
