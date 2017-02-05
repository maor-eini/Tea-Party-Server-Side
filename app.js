/**
 * Created by maoreini on 24/12/2016.
 */
var express = require('express');
var app = express();
var db = require('monk')('localhost:27017');
var teaData = db.get('tea');

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.post('/', function (req, res) {
    res.send('Got a POST request')
});

app.put('/item', function (req, res) {
    res.send('Got a PUT request at /user')
});

app.delete('/item', function (req, res) {
    res.send('Got a DELETE request at /user')
});

module.exports = app;