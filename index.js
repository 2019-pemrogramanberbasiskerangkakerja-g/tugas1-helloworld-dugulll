// var http = require('http'),
// 	parse = require('url').parse,
// 	join = require('path').join,
// 	fs = require('fs'),
//     root = join(__dirname, 'www'),
//     PORT = 3300,

//    	server = http.createServer(function(req, res){
//    		var url = parse(req.url),
//    			path = join(root, url.pathname),
//    			stream = fs.createReadStream(path);

//    		stream.on('data', function(bagian){
//    			res.write(bagian);
//    		});

//    		stream.on('end', function(){
//    			res.end();
//    		});

//    		stream.on('error', function(){
//    			res.setHeader('Content-Type','text/html');

//    			var url_demo = "http://localhost:"+PORT+"/coba.jpg";
//    			res.write("coba buka <a href="+url_demo+">"+url_demo+"</a>");
//    			res.end();
//    		})
//    	});

//    	server.listen(PORT);

//    	console.log("Port "+PORT+": Server File ");

// var http = require('http')
// 	PORT = 3400;

// var server = http.createServer(function(req, res){
// 	var body = "<pre>Haruskah belajar Node.js?</pre><p><h3>...Yo Mesto!</h3></p>"
// 	res.writeHead(200, {
// 		'Content-Length':body.length,
// 		'Content-Type':'text/html',
// 		'Pesan-Header':'pengenalan Node.js'
// 	});

// 	res.write(body);
// 	res.end();
// });

// server.listen(PORT);

// console.log("Port "+PORT+" : Node.js Server...");

const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});

var fs = require('fs');

fs.readFile('package.json', function(err, data){
	if(err) throw err;
	console.log(JSON.parse(data));
});

console.log('Selanjutnya...');