function inCookie(n,v,d){
 var expireTimestamp = new Date();
 expireTimestamp.setDate(expireTimestamp.getDate() + d);
 var content = n +"="+ escape(v) +"; path=/";
 if(typeof d != "undefined"){content+="; expires="+ expireTimestamp.toGMTString()+";";}
 document.cookie = content;
}

function outCookie(n){
 n = n +"=";
 var data = document.cookie;
 var begin = data.indexOf(n);
 var content = "";
 if(begin != -1){
  begin += n.length;
  var end = data.indexOf(";",begin);
  if(end == -1){end = data.length;}
  content = data.substring(begin,end);
 }
 return unescape(content);
}

function padzero(n,l){return (Array(l).join("0")+n).slice(-l);}

function toPageTop(){window.scrollTo(0,0);}
function toPageBottom(){window.scrollTo(0,document.body.scrollHeight);}

function openSidebar(){document.getElementById("sidebar").style.display = "block";}
function closeSidebar(){document.getElementById("sidebar").style.display = "none";}
