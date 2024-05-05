var nav,iex=(document.all),yyy=-1000;
nav=(navigator.appName=="Netscape");
document.write('<DIV id="dek" style="Z-INDEX:100; POSITION:absolute;top:0;left:0">'+(nav?'<div id="in" style="position:relative"><div id="det" style="position:absolute;top:0;left:0"></DIV></DIV>':'')+'</DIV>');

Xoff=-60;
Yoff= 20;

var sk=(nav)?document.getElementById("dek") : dek.style;
if(nav)var st=document.getElementById("det");
if(document.layers)document.captureEvents(Event.MOUSEMOVE);
document.onmousemove=get_mouse;

function popup(e){
if(nav){sk=e.target; Str=(sk.alt==null)?sk.nodeValue:sk.alt;}
else {e=event.srcElement; Str=(e.alt==null)?e.outerText:e.alt;}
if(Str==null||Str.length<3)return;
var content="<TABLE WIDTH=150 height=60 BORDER=1 BORDERCOLOR=black CELLPADDING=2 CELLSPACING=0 BGCOLOR=lightblue><TD ALIGN=center><FONT COLOR=black SIZE=+1>"+Str+"</FONT></TD></TABLE>";
yyy=Yoff;
 if(nav){st.innerHTML=content; sk.visibility="visible"}
 if(iex){document.all("dek").innerHTML=content;sk.visibility="visible"}
}

function get_mouse(e){
var x=(nav)?e.pageX:event.x+document.body.scrollLeft;
var y=(nav)?e.pageY:event.y+document.body.scrollTop;
sk.left=x+Xoff;
sk.top=y+yyy;
if(nav){st.style.left=x+Xoff;
    st.style.top=y+yyy;}
}

function kill(e){
if(nav){yyy=-1000;sk.visibility="hidden";}
if(iex)document.all("dek").innerHTML='';
}
[html]
<p>Подключение:</p>
[html]
<script type=text/javascript src="popup.js"></script>

for (i=0;i<document.links.length;i++)
if(document.links[i].onmouseover==null)
 {if(document.layers){document.links[i].captureEvents(Event.MOUSEOVER);document.links[i].captureEvents(Event.MOUSEOUT);}
  document.links[i].onmouseover=popup;
