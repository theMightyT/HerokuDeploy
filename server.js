const http = require('http');
const port=process.env.PORT || 3000

let msg = process.env.MESSAGE || "Hello World!"

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end(`<h1>${msg} This is my Heroku app! I like Heroku!</h1>`);
});

server.listen(port,() => {
	console.log(`Server running at port `+ port);
});