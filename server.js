const http = require ('http');

const myServer=http.createServer(function(req,res){
	if(req.url==='/myServer'){
		res.writeHead(200,{'content-type': 'text/plain'});
		res.end('My Server Ok :)');
	}
	else if(req.url==='/hello'){
		res.writeHead(200,{'content-type': 'text/plain'});
		res.end('Hello from my new server');
	} 
	else if(req.url==='/welcome'){
		res.writeHead(200,{'content-type': 'text/plain'});
		res.end('Welcome to my first server');
	} 
	else if(req.url==='/myServe'){
		res.writeHead(200,{'content-type': 'text/plain'});
		res.end('Do you mean myServer?');
	} 
	else if(req.url==='/bye'){
		res.writeHead(200,{'content-type': 'text/plain'});
		res.end('Goodbye :)');
	} 
	else {
		res.writeHead(404,{'content-type' : 'text/plain'});
		res.end('My Server Not Found :(')
	}

});

myServer.listen(3100);