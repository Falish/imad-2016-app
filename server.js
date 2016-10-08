var express = require('express');//library for create web server ports
var morgan = require('morgan');//library for output logs
var path = require('path');

var app = express();
app.use(morgan('combined'));

//if this particular '/' url is requested then run the function
var names = [];
app.get('/submit-name', function (req, res) {
    var name = req.query.name;
    names.push(name);
  res.send(JSON.stringify(names));
});
var i=0; 
app.get('/article-one', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-three', function (req, res) {
  res.send('hey there! this is article three...');
});
app.get('/article-three', function (req, res) {
  res.send('hey there! this is article three...');
});
var counter=0;
app.get('/counter', function (req, res) {
    counter=counter+1;
  res.send(counter.toString());
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/Angles.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Angles.jpg'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
