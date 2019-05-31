var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http')
var socketIo = require('socket.io');

var app = express();
var server = http.createServer(app);
var io = socketIo(server);

var PORT = 4000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, './dist')))
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './dist', 'index.html'));
});

io.on('connection', socket => {
    console.log('connection made!')
    socket.on('message', body => {
        socket.broadcast.emit('message', {
            body,
            from: socket.id.slice(15)
        })
    })
})

app.get('/api/hi', (req, res) => {
    res.send('Hello World');
})

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})

