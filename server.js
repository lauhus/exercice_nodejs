var http = require('http');
var url = require('url');
var fs = require('fs');


let server = http.createServer((req, res) => {
    let myUrl = url.parse(req.url, true);

    if(myUrl.pathname === '/index.html') {
        fs.readFile('./index.html', (err , data) => {
            res.end(data)
        })
    } else if (myUrl.pathname === '/css.css') {
        fs.readFile('./css.css', (err , data) => {
            res.end(data)
        })
    } else {
        res.end('404')
    }
    
})
server.listen(8080)