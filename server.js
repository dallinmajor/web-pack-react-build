var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var server = require('http').createServer(app);

var PORT = 4000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, './dist')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './dist', 'index.html'));
});

app.get('/api/hi', (req, res) => {
    res.send('Hello World');
})

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})

