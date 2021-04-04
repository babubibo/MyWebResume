var slideShowSpeed = 2000;
var Pic = new Array();
	Pic[0] = 'https://i.ibb.co/bX5psXk/RP1.jpg'
	Pic[1] = 'https://i.ibb.co/kh3JHKy/RP2.jpg'
	Pic[2] = 'https://i.ibb.co/Srj76yB/RP3.jpg'
	Pic[3] = 'https://i.ibb.co/RzV73Sz/RP4.jpg'
	Pic[4] = 'https://i.ibb.co/5B19jzb/RP5.jpg'
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
