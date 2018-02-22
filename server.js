var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server),
	screenshot = require('desktop-screenshot'),
	fs = require('fs'),
	compression = require('compression');
	

var http = require('http');	



//node js server	
server.listen(3000);


//Web server files
app.use(express.static(__dirname + '/views'));
app.use("/scripts", express.static(__dirname + '/scripts'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/images", express.static(__dirname + '/images'));
app.use("/templates", express.static(__dirname + '/templates'));

//Requests that pass through the middleware will be compressed.
app.use(compression())


//Get IP Address of Server and Store in File serverip.txt
var os = require('os');
var ifaces = os.networkInterfaces();

Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false || ifname.includes('vmnet') ) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    } 

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      console.log(ifname + ':' + alias, iface.address);
    } else {
      // this interface has only one ipv4 adress
      //console.log(ifname, iface.address);      
      var fs = require('fs');
      var stream = fs.createWriteStream("serverip.txt");
      stream.once('open', function(fd) {
      stream.write("http://" + iface.address + ":3000");
      stream.end();
      console.log("Server Address Saved in TextFile");
     });

    }
    ++alias;
  });
});



app.get('/', function(req,res){
	res.sendFile('index.html');
});



//video processor
if(true)
{
	
	var processrequest = true;	
	var request = require('request').defaults({ encoding: null });
	setInterval(function(){
        		
			if(processrequest == true){
				
				processrequest =false;
				screenshot("screenshots/screenshot.png", {width: 1280, quality: 60}, function(error, complete) {
					if(error)
					{
						console.log("Screenshot failed", error);
					}				
					else
					{
						console.log("Screenshot captured");					
						var data = fs.readFileSync('screenshots/screenshot.png');				
						io.sockets.emit('image-video', { image: true, buffer: data });
						processrequest =true;				
					}			
				});

			}
			
		
		
	
	}, 300);
}




io.sockets.on('connection', function(socket){	
	
});
