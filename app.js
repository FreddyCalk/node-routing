var http = require('http');
var url = require('url');
var fs = require('fs');
var homePageHTML = fs.readFileSync('homePageHTML.html');


function renderNewPage(req, res){
	res.writeHead(200,{
		'content-type': 'text/html'
	});
	res.write('Hello World!!!!')
	res.end();
}

function render404(req,res){
	res.writeHead(404)
	res.end('404, page not found.')
}
function renderHomePage(req,res){
	res.writeHead(200,{
		'content-type': 'text/html'
	})
	res.end(homePageHTML);
}

var server = http.createServer(function (req, res){

	var newUrl = '/page/new';
	// renderNewPage(req, res);
	var pathName = url.parse(req.url);
	console.log(req.url);
	console.log(pathName);
	if(newUrl == pathName.pathname){
		renderNewPage(req, res)
	}else if(pathName.pathname == '/'){
		renderHomePage(req,res)
	}else{
		render404(req, res);
	}
})
var port = 8080;

server.listen(port);
console.log('Server is listening on port '+ port);