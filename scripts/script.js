
function b64(e){var t="";var n=new Uint8Array(e);var r=n.byteLength;for(var i=0;i<r;i++){t+=String.fromCharCode(n[i])}return window.btoa(t)}

var cache_videoImage;

function nodeProperties(){
	var socket = io.connect();
	
	
	socket.on("image-video", function(data) {
	  	  		
		if(cache_videoImage != null){
		  
		  //cache_videoImage.src = data.buffer;
		  cache_videoImage.src = "data:image/png;base64,"+b64(data.buffer);
		}
		
		
	});

}


$(document).ready(function(){

	//load cache variables
	cache_videoImage = document.getElementById("videoimage");
	
	//Code related to callbacks and requests to node.js
	nodeProperties();
	
	$( "#videoimage" ).click(function() {
	 $("#videoimage").toggleFullScreen();
	});
	
	$("#lblMessage").fadeTo(5000,1).fadeOut(3000);
		
});





