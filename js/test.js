var time = {"h":"01", "m":"00", "s":"03"};
var cur_time = toSeconds(time);
var timerID = null;
var isPause = false;
var old_conteiner, new_conteiner;

$( document ).ready(function() {
	old_conteiner = $("#countdown ul#old");
	new_conteiner = $("#countdown ul#new");
	$("#pause-btn").css("pointer-events", "none");
	$("#pause-btn").css("opacity", "0.3");
	setTime(cur_time);
	Anim();
	startCountDown();
});

function Anim(){
	var shift;

	var h_old_0 = 	old_conteiner.find("li:nth-child(1)");
	var h_old_1 = 	old_conteiner.find("li:nth-child(2)");
	var m_old_0 = 	old_conteiner.find("li:nth-child(4)");
	var m_old_1 = 	old_conteiner.find("li:nth-child(5)");
	var s_old_0 = 	old_conteiner.find("li:nth-child(7)");
	var s_old_1 = 	old_conteiner.find("li:nth-child(8)");

	var h_new_0 = 	new_conteiner.find("li:nth-child(1)");
	var h_new_1 = 	new_conteiner.find("li:nth-child(2)");
	var m_new_0 = 	new_conteiner.find("li:nth-child(4)");
	var m_new_1 = 	new_conteiner.find("li:nth-child(5)");
	var s_new_0 = 	new_conteiner.find("li:nth-child(7)");
	var s_new_1 = 	new_conteiner.find("li:nth-child(8)");
	
	shift =  parseInt(h_old_0.css('line-height'), 10);
	//alert("h_old_0.css('line-height') : "+h_old_0.css('line-height'));
	//alert("shift : "+shift);
	
	if (h_new_0.text()!=h_old_0.text()){	
		h_new_0.css('top', -shift+"px").animate({top: "0px"});
		h_old_0.css('top', -shift + "px").animate({top: shift+"px"});
	}


	if (h_new_1.text()!=h_old_1.text()){
		h_new_1.css('top', -shift+"px").animate({top: "0px"});
		h_old_1.css('top', -shift + "px").animate({top: shift+"px"});
	}

	if (m_new_0.text()!=m_old_0.text()){ 
		m_new_0.css('top', -shift+"px").animate({top: "0px"});
		m_old_0.css('top', -shift + "px").animate({top: shift+"px"});
	}
	
	if (m_new_1.text()!=m_old_1.text()){
		m_new_1.css('top', -shift+"px").animate({top: "0px"});
		m_old_1.css('top', -shift + "px").animate({top: shift+"px"});
	}


	if (s_new_0.text()!=s_old_0.text()){
		s_new_0.css('top', -shift + "px").animate({top: "0px"});
		s_old_0.css('top', -shift + "px").animate({top: shift});
	}
			
	if (s_new_1.text()!=s_old_1.text()){
		s_new_1.css('top', -shift + "px").animate({top: "0px"});
		s_old_1.css('top',  -shift + "px").animate({top: shift});
	}
	
}

function setTime(time){
	//alert("setTime(time)的time:"+time);
		var time_arr = toTime(time);
		//alert("setTime(time)里面的totime(time)给了time_arr"+time_arr);
		var h_old_0 = 	old_conteiner.find("li:nth-child(1)");
		//alert("h_old_0:"+h_old_0.text());
		var h_old_1 = 	old_conteiner.find("li:nth-child(2)");
		//alert("h_old_1:"+h_old_1.text());
		var m_old_0 = 	old_conteiner.find("li:nth-child(4)");
		//alert("m_old_0:"+m_old_0.text());
		var m_old_1 = 	old_conteiner.find("li:nth-child(5)");
		//alert("m_old_1:"+m_old_1.text());
		var s_old_0 = 	old_conteiner.find("li:nth-child(7)");
		//alert("s_old_0:"+s_old_0.text());
		var s_old_1 = 	old_conteiner.find("li:nth-child(8)");
		//alert("s_old_1:"+s_old_1.text());
		
		var h_new_0 = 	new_conteiner.find("li:nth-child(1)");
		//alert("h_new_0:"+h_new_0.text());
		var h_new_1 = 	new_conteiner.find("li:nth-child(2)");
		//alert("h_new_1:"+h_new_1.text());
		var m_new_0 = 	new_conteiner.find("li:nth-child(4)");
		//alert("m_new_0:"+m_new_0.text());
		var m_new_1 = 	new_conteiner.find("li:nth-child(5)");
		//alert("m_new_1:"+h_new_1.text());
		var s_new_0 = 	new_conteiner.find("li:nth-child(7)");
		//alert("s_new_0:"+s_new_0.text());
		var s_new_1 = 	new_conteiner.find("li:nth-child(8)");
		//alert("s_new_1:"+s_new_1.text());
		
		h_old_0.text(h_new_0.text());
		h_old_1.text(h_new_1.text());
		m_old_0.text(m_new_0.text());
		m_old_1.text(m_new_1.text());
		s_old_0.text(s_new_0.text());
		s_old_1.text(s_new_1.text());
		
		
		h_new_0.text(time_arr[0]);	
		//alert("time_arr[0] : "+time_arr[0]);
		h_new_1.text(time_arr[1]);
		//alert("time_arr[1] : "+time_arr[1]);
		m_new_0.text(time_arr[2]);
		//alert("time_arr[2] : "+time_arr[2]);
		m_new_1.text(time_arr[3]);		
		//alert("time_arr[3] : "+time_arr[3]);
		s_new_0.text(time_arr[4]);
		//alert("time_arr[4] : "+time_arr[4]);
		s_new_1.text(time_arr[5]);	
		//alert("time_arr[5] : "+time_arr[5]);
	
}
function doUpdate() { 
	if (cur_time > 0) {
		setTime(--cur_time);	
		Anim();
	}else{
		clearCountDown();
		SubmitPapers();
		//toggleStartBtn("#start-btn");
	}
};

function SubmitPapers(){
	/*document.getElementById("form1").action="www.baidu.com";*/
	//document.getElementById("form1").submit();
	//alert("SubmitPaper");
}

/*function toggleStartBtn(target){
	cur_time = toSeconds(time);
	setTime(cur_time);
	Anim();	
	$( target ).toggleClass( "highlight" );
	$( target ).html()=="Clear"? $( target ).html("Start"): $( target ).html("Clear");
}*/

/*function togglePauseBtn(target){
	$( target ).toggleClass( "highlight" );
	$( target ).html()=="Pause"? $( target ).html("Resume"): $( target ).html("Pause");	
}*/

function startCountDown(){		
	timerID = setInterval(doUpdate, 1000);
}

function clearCountDown(){		
	clearInterval(timerID);
	timerID = null;
}


function pauseCounDown(){
	isPause = true;
	clearInterval(timerID);
	timerID = null;
}
/*$(document).ready(function(){
	$("#start-btn").click(function() {
		toggleStartBtn(this);
		if(!timerID && !isPause){
			$("#pause-btn").css("pointer-events", "auto");
			$("#pause-btn").css("opacity", "1");
			cur_time = toSeconds(time);
			startCountDown();
		}else{
			$("#pause-btn").css("pointer-events", "none");
			$("#pause-btn").css("opacity", "0.3");
			clearCountDown();
			if(isPause){
				togglePauseBtn("#pause-btn");
			}
			isPause = false;
		}
	});
});

$(document).ready(function(){
	$("#pause-btn").click(function() {
		if(!isPause){
			togglePauseBtn(this);	
			isPause = true;
			pauseCounDown();
		}else if(isPause){
			togglePauseBtn(this);
			isPause = false;
			startCountDown()
		}
	});
});*/

///////////////////////////////

function toTime(totalSeconds){
	hours = Math.floor(totalSeconds / 3600).toString().rjust(2, "0");
	totalSeconds %= 3600;
	minutes = Math.floor(totalSeconds / 60).toString().rjust(2, "0");
	seconds = (totalSeconds % 60).toString().rjust(2, "0");
	return [hours[0], hours[1], minutes[0], minutes[1], seconds[0], seconds[1]];
}

function toSeconds(hms){
	var a = [hms.h, hms.m, hms.s];
	return (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
}

String.prototype.rjust = function( width, padding ) {
	padding = padding || " ";
	padding = padding.substr( 0, 1 );
	if( this.length < width ){
		return padding.repeat( width - this.length ) + this;
	}
	else{
		return this;
	}
}