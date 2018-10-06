OthetPage = function(){
		document.location.href="http://google.com";
	}
ChangeStyle = function () {
	document.getElementsByClassName("SetButtons")[0].style.border="3px dashed green";
	for(i=0; i<3; i++){
		var styleButton=document.getElementsByClassName("button")[i].style;
		styleButton.border="2px dotted red";
		styleButton.backgroundColor="#ff9900";
		styleButton.color="#ffeeff";
	}
}
task = function(){
	location.replace("./flexboxTask4/index.html");
}