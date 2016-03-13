var http = require('http');
var httpServer = http.createServer();
var io = require('socket.io')(httpServer);


io.sockets.on('connection', function (socket)
{
    console.log("Connected");
    socket.on('message', function(data)
    {
      socket.broadcast.emit('server_message', data);
    });

});

httpServer.listen(8080);
