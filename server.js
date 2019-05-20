var app = require('express')();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var path = require('path');

var PORT = 4000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './dist', 'index.html'));
});

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})

