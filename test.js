function Init () {
	var button = document.getElementById ("testButton");
	var el = document.getElementById("outside");
	//el.addEventListener('click',modifyText,false);
	window.setInterval(function(){showTime()},100);
	if (button.addEventListener) {  // all browsers except IE before version 9
		button.addEventListener ("mousedown", function () {OnButtonDown (button)}, false);
		button.addEventListener ("mouseup", function () {OnButtonUp (button)}, false);
	}
	else {
		if (button.attachEvent) {   // IE before version 9
			button.attachEvent ("onmousedown", function () {OnButtonDown (button)});
			button.attachEvent ("onmouseup", function () {OnButtonUp (button)});
		}
	}
}

function showTime(){
	var d = new Date();
	var t = d.toLocaleTimeString();
	document.getElementById("time").innerHTML=t;
}

function modifyText(){
	var t1 = document.getElementById("t1");
	var t2 = document.getElementById("t2");
	var x = parseInt(t1.firstChild.nodeValue);
	var x2 = parseInt(t2.firstChild.nodeValue);
	x++;
	x2 += 2;
	t1.firstChild.nodeValue = x;
	t2.firstChild.nodeValue = x2;
}
