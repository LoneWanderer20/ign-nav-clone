// JavaScript Document

var menuBoxFunc = function() {
	"use strict";

    var onHovFired = false, //tracks if the mouse has entered the specified area
    divXPos, //tracks the x coordinate of the mouse cursor
    divYPos,//tracks the y coordinate of the mouse cursor
    scrolledBy, //tracks how much the page has scrolled
	navBottom = document.getElementById("navBottom");

    var onHovFunc = function() {
	
	    var browseDiv = document.getElementById("browseDiv"), //browse hover button id
	    browseCont = document.getElementById("browseCont"), //browse menu box id
	    backR, //background color rgb red value
	    backG, //background color rgb green value
    	backB, //background color rgb blue value
    	bordR, //border color rgb red value
    	bordG, //border color rgb green value
    	bordB, //border color rgb blue value
    	contHeight, //browse menu box height
    	timer, //setInterval timer
		divOpacity, //browse menu box opacity
    	divOpString, //browse menu box opacity toString()
	    xLowLimit,
		xHighLimit,
		yLowLimit,
		yHighLimit,
		yHighLimit2;
		
		divXPos = event.clientX - parseInt(navBottom.offsetLeft);
        scrolledBy = document.body.scrollTop || document.documentElement.scrollTop;
    	if(scrolledBy>275) {
	    	divYPos = event.clientY;
	    	browseCont.style.position = "fixed";
	    	browseCont.style.top = "46px";
			xLowLimit = 0;
			xHighLimit = 260;
			yLowLimit = 0;
			yHighLimit = 40;
			yHighLimit2 = 400;
	    } else {
	        divYPos = event.clientY - parseInt(navBottom.offsetTop) + scrolledBy;
	    	browseCont.style.position = "absolute";
	    	browseCont.style.top = "121px";
			xLowLimit = 185;
			xHighLimit = 445;
			yLowLimit = 200;
			yHighLimit = 240;
			yHighLimit2 = 600;
	    }
		
	    if(divXPos<xHighLimit && divXPos>=xLowLimit && divYPos<yHighLimit && divYPos>=yLowLimit && onHovFired === false) {
	
	        onHovFired = true;
		    backR = 191;
	        backG = 19;
	        backB = 19;
	        bordR = 143;
	        bordG = 14;
            bordB = 14;
	        contHeight = 315;
            timer = 0;
	        divOpacity = 0;
            browseCont.style.opacity = "0";
	        browseCont.style.height = "315px";
            browseDiv.style.backgroundColor = "rgb(191,19,19)";
            browseDiv.style.borderColor = "rgb(143,14,14)";
		
	        var showCont = setInterval(function() {
		        if(timer<500) {
		    		timer +=10;
		    	} else if(timer<560) {
			        timer += 10;
			        divOpacity += 0.05;
			        divOpString = divOpacity.toString();
			        backR -= 8;
			        backG += 1;
			        backB += 1;
				    contHeight += 2;
			        browseDiv.style.backgroundColor = "rgb(" + backR + "," + backG + "," + backB + ")";
			        browseCont.style.height = contHeight + "px";
			 
			        if(divOpString.length === 3) {
			            browseCont.style.opacity = divOpString;
			        }
			
		        } else if(timer<690) {
		    	    timer += 10;
			        divOpacity += 0.05;
			        divOpString = divOpacity.toString();
			        backR -= 8;
			        backG += 1;
			        backB += 1;
			        bordR -= 9;
			        bordG += 1;
			        bordB += 1;
				    contHeight += 2;
			        browseDiv.style.backgroundColor = "rgb(" + backR + "," + backG + "," + backB + ")";
			        browseDiv.style.borderColor = "rgb(" + bordR + "," + bordG + "," + bordB + ")";
				    browseCont.style.height = contHeight + "px";
			
			        if(divOpString.length === 3) {
			            browseCont.style.opacity = divOpString;
			        }
			
		        } else if(timer<700) {
			        timer += 10;
			        divOpacity += 0.05;
			        divOpString = divOpacity.toString();
			        backR -= 2;
			        backB += 1;
			        bordB += 1;
			        contHeight += 2;
			        browseDiv.style.backgroundColor = "rgb(" + backR + "," + backG + "," + backB + ")";
			        browseDiv.style.borderColor = "rgb(" + bordR + "," + bordG + "," + bordB + ")";
		            browseCont.style.height = contHeight + "px";
			        browseCont.style.opacity = divOpString;
			
		        } else {
		  	        clearInterval(showCont);	
		        }	
		
	        },10);
	    }
	
		
	    if((divXPos<=xLowLimit || divXPos>xHighLimit || divYPos>yHighLimit2 || divYPos<=yLowLimit) && onHovFired === true) {
	    	onHovFired = false;
	    	backR = 37;
	        backG = 38;
	        backB = 39;
	        bordR = 28;
        	bordG = 28;
        	bordB = 29;
	    	contHeight = 355;
        	timer = 0;
        	divOpacity = 1;
        	browseCont.style.opacity = "1";
    		browseCont.style.height = "355px";
        	browseDiv.style.backgroundColor = "rgb(37,38,38)";
        	browseDiv.style.borderColor = "rgb(28,28,29)";
	
	        var hideCont = setInterval(function() {
		        if(timer<500) {
	    			timer += 10;
		    	} else if(timer<560) {
			        timer += 10;
			        divOpacity -= 0.05;
			        divOpString = divOpacity.toString();
			        backR += 8;
			        backG -= 1;
			        backB -= 1;
		    		contHeight -= 2;
		    	    browseDiv.style.backgroundColor = "rgb(" + backR + "," + backG + "," + backB + ")";
		    	    browseCont.style.height = contHeight + "px";
				
			        if(divOpString.length === 3) {
			            browseCont.style.opacity = divOpString;
			        }
			
		        } else if(timer<690) {
		    	    timer += 10;
		    	    divOpacity -= 0.05;
		    	    divOpString = divOpacity.toString();
		    	    backR += 8;
		    	    backG -= 1;
		    	    backB -= 1;
		        	bordR += 9;
		        	bordG -= 1;
		        	bordB -= 1;
		    		contHeight -= 2;
		    	    browseDiv.style.backgroundColor = "rgb(" + backR + "," + backG + "," + backB + ")";
		    	    browseDiv.style.borderColor = "rgb(" + bordR + "," + bordG + "," + bordB + ")";
		    	    browseCont.style.height = contHeight + "px";
				
		    	    if(divOpString.length === 3) {
		    	        browseCont.style.opacity = divOpString;
		    	    }
			
		        } else if(timer<700) {
		    	    timer += 10;
		    	    divOpacity -= 0.05;
		    	    divOpString = divOpacity.toString();
		    	    backR += 2;
			        backB -= 1;
		    	    bordB -= 1;
			    	contHeight -= 2;
			        browseDiv.style.backgroundColor = "rgb(" + backR + "," + backG + "," + backB + ")";
			        browseDiv.style.borderColor = "rgb(" + bordR + "," + bordG + "," + bordB + ")";
		            browseCont.style.height = contHeight + "px";
		        	browseCont.style.opacity = divOpString;
			  
	        	} else {
		        	clearInterval(hideCont);	
		        }	
		
	        },10);			
    	}
    };
    document.onmousemove = onHovFunc;
	
};
menuBoxFunc();

var searchTabFunc = function() {
	"use strict";
	var searchTab = document.getElementById("searchTab"); //search tab id

    var onFocFunc = function() {
	
	    searchTab.value = "";
    };
    searchTab.onfocus = onFocFunc;

    var onBlurFunc = function() {
	
	     searchTab.value = "Search";
    };
    searchTab.onblur = onBlurFunc;
	
};
searchTabFunc();

var scrolledBy;
var onScrollFunc = function() {
	"use strict";
	var navBottom = document.getElementById("navBottom"), //navigation bottom id
	navBottBG = document.getElementById("navBottBG"); //tracks how much the page has been scrolled
	
	scrolledBy = document.body.scrollTop || document.documentElement.scrollTop;
	
	if(scrolledBy>275) {
		navBottom.style.position = "fixed";
		navBottom.style.top = "0px";
		navBottBG.style.position = "fixed";
		navBottBG.style.top = "-1px";
	} else {
		navBottom.style.position = "absolute";
		navBottom.style.top = "75px";
		navBottBG.style.position = "absolute";
		navBottBG.style.top = "74px";
	}	
};
window.onscroll = onScrollFunc;