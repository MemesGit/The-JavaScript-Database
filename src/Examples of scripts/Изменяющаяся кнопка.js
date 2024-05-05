<SCRIPT LANGUAGE="JavaScript">
<!--
var blinking = true;
var mypos = 0;
var dpos = 25;
var a = 1;
var b = 1;
stringm = new Array(4);
       stringm[1] = "Эта кнопка";
       stringm[2] = "изменила";
       stringm[3] = "свою надпись";
       stringm[4] = "Вам нравится?!";
function ablink() {
if (b==1) {
 document.forms[0].abutton.value = stringm[a]
   b-- ;
    a++;
  if (a>4) {a = 1};}
else {
 document.forms[0].abutton.value = "";
   b++ }
}
function myblink() {
 if (dpos > 13) {
   mypos++}
 if (dpos > 48) {
   mypos = 0;
   dpos = 25;
                 }
 else {dpos++}
ianID = setTimeout ("myblink(); ablink()", 300);
}
function stopit() {
if (blinking==true) {
 clearTimeout(ianID);
  document.forms[0].abutton.value = "Нажми для продолжения!";
  blinking = false;
}
else {
    myblink();
 document.forms[0].abutton.value = "Продолжаю анимацию" ;
 blinking = true;
}
}
//-->
</SCRIPT>

<a name="ChangeBotton"><CENTER><H3>Изменяющаяся кнопка.</H3></CENTER></a><p>
<SCRIPT LANGUAGE="JavaScript">
<!--
document.write("<FORM NAME=\"pajjs\">");
document.write("<INPUT TYPE=\"BUTTON\" NAME=\"abutton\" VALUE=\" WAITING \" SIZE=\"18\" onclick=\"stopit()\">");
document.write("</FORM>");
myblink();
//-->
</SCRIPT>

<form>
  <p align="center">
  <input type="button" value="  НАЗАД  " onclick="Home()">
   <script>
	function Home()
	{location.href="/java/example.php";}
   </script></p>
</form>
