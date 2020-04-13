var express = require('express');
var app = express();
const cors = require('cors')

app.use(cors())
app.use(express.static('public'));
app.set('view engine', 'ejs');

const corsOptions = {
    origin: 'http://localhost:3000'
}

app.get('/', cors(), function(req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.listen(3001, function() {
    console.log('Example app listening on port 3000!');
});