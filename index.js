var StaticServer = require('static-server');
var server = new StaticServer({
    rootPath: './web',            // required, the root of the server file tree
    name: '',   // optional, will set "X-Powered-by" HTTP header
    port: 8080,               // optional, defaults to a random port
    host: 'localhost',       // optional, defaults to any interface
    cors: '*',                 // optional, defaults to undefined
    followSymlink: true,      // optional, defaults to a 404 error
});

server.start(function () {
    console.log('Server listening to', server.port);
});

server.on('request', function (req, res) {
    // req.path is the URL resource (file name) from server.rootPath
    // req.elapsedTime returns a string of the request's elapsed time
});