/***********************************************
* JavaScriptKit.com Multiple Choice Quiz Script (http://www.javascriptkit.com)
* Copyright 2003 JavaScript Kit- http://www.javascriptkit.com
* This notice and footnote must stay intact for use
* Visit JavaScript Kit (http://www.javascriptkit.com/) for full source code
***********************************************/

//Enter total number of questions:
var totalquestions=15

//Enter the solutions corresponding to each question:
var correctchoices=new Array()
correctchoices[1]='c'
correctchoices[2]='a'
correctchoices[3]='d'
correctchoices[4]='c'
correctchoices[5]='c'
correctchoices[6]='b'
correctchoices[7]='a'
correctchoices[8]='d'
correctchoices[9]='b'
correctchoices[10]='a'
correctchoices[11]='a'
correctchoices[12]='b'
correctchoices[13]='a'
correctchoices[14]='c'
correctchoices[15]='a'

/////Don't edit beyond here//////////////////////////

function gradeit(){
var incorrect=null
for (q=1;q<=totalquestions;q++){
	var thequestion=eval("document.myquiz.question"+q)
	for (c=0;c<thequestion.length;c++){
		if (thequestion[c].checked==true)
		actualchoices[q]=thequestion[c].value
		}
		
	if (actualchoices[q]!=correctchoices[q]){ //process an incorrect choice
		if (incorrect==null)
		incorrect=q
		else
		incorrect+="/"+q
		}
	}

if (incorrect==null)
incorrect="a/b"
document.cookie='q='+incorrect
if (document.cookie=='')
alert("Your browser does not accept cookies. Please adjust your browser settings.")
else
window.location="results.htm"
}


function showsolution(){
var win2=window.open("","win2","width=200,height=350, scrollbars")
win2.focus()
win2.document.open()
win2.document.write('<title>Solution</title>')
win2.document.write('<body bgcolor="#FFFFFF">')
win2.document.write('<center><h3>Jawaban Quiz</h3></center>')
win2.document.write('<center><font face="Arial">')
for (i=1;i<=totalquestions;i++){
for (temp=0;temp<incorrect.length;temp++){
if (i==incorrect[temp])
wrong=1
}
if (wrong==1){
win2.document.write("Pertanyaan "+i+"="+correctchoices[i].fontcolor("red")+"<br>")
wrong=0
}
else
win2.document.write("Pertanyaan "+i+"="+correctchoices[i]+"<br>")
}
win2.document.write('</center></font>')
win2.document.write("<h5>Note: Tulisan merah berarti jawaban anda salah</h5><p align='center'><small><a href='http://www.javascriptkit.com' target='_new'>JavaScript Kit quiz script</a></small>")
win2.document.close()
}
