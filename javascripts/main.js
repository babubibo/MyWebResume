function alertFunction(){
	alert("408850393 葉柏甫");
}
//點擊My Web Resume跳出視窗
//------------------------------------------------------------------------------------------
var slideShowSpeed = 2000;
var Pic = new Array();
	Pic[0] = 'images/RP1.jpg'
	Pic[1] = 'images/RP2.jpg'
	Pic[2] = 'images/RP3.jpg'
	Pic[3] = 'images/RP4.jpg'
	Pic[4] = 'images/RP5.jpg'
var t;
var j = 0;
var p = Pic.length;
var preLoad = new Array();
var crossFadeDuration = 3;
for(i = 0; i < p; i++){
	preLoad[i] = new Image();
	preLoad[i].src = Pic[i];
}
function runSlideShow(){
	if(document.all){
		document.images.SlideShow.style.filter="blendTrans(duration=2)";
		document.images.SlideShow.style.filter="blendTrans(duration=crossFadeDuration)";
		document.images.SlideShow.filters.blendTrans.Apply();
	}
	document.images.SlideShow.src = preLoad[j].src;
if(document.all){
	document.images.SlideShow.filters.blendTrans.Play();
}
j = j + 1;
if(j > (p - 1)) j = 0;
	t = setTimeout('runSlideShow()', slideShowSpeed);
}
//About下方照片播放
//--------------------------------------------------------------------------------------------------
function startTime(){
	var today = new Date();
	var hh = today.getHours();
	var mm = today.getMinutes();
	var ss = today.getSeconds();
	hh = checkTime(hh);
	mm = checkTime(mm);
	ss = checkTime(ss);
	document.getElementById('clock').innerHTML = hh + ":" + mm + ":" + ss;
	var timeoutId = setTimeout(startTime, 500);
}
function checkTime(i){
	if(i < 10) {
		i = "0" + i;
	}
	return i;
}
//header裡意義不明的時鐘
