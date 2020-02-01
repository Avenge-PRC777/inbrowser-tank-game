var express=require('express');
var http=require('http');//This is a standard http server code 
//with express as defacto server side code

var path=require('path');
var socketIO=require('socket.io');

var app=express();//require('module.js')(.js can be omitted) 
//returns whatever is exported by that module.js as module.exports=
//an object or function or string
//So, express returns/exports a function to variable express, and app
//calls it

var port=5000||process.env.PORT;
//http.Server.listen(port) is same as app.listen(port)
//app is to be given to node's HTTP servers as callback function

var server=http.Server(app);

var io=socketIO(server);app.set('port',port);

app.use(express.static('public'));//Middleware, called before sending response

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname,'index.html'));
});

server.listen(port,()=>{
	console.log(`Starting server on port ${port}`);
});
