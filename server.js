const http = require("http")

const server = http.createServer(function (req, res) {
    if (req.url === "/hi") {
        res.end("Hi there!");
    } else {
        res.end("Hello world");
    }
});

server.listen(7777);