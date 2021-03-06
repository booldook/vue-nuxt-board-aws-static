var express = require('express');
var path = require('path');

var app = express();
app.listen(5000, () => {
	console.log('=====================');
	console.log('http://127.0.0.1:5000');
	console.log('=====================');
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

