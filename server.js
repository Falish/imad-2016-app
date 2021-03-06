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
app.get('profile/index1.html', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui/profile', 'index1.html'));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/profile/index.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/profile', 'index.html'));
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

app.get('/ui/style1.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/profile/css', 'style1.css'));
});
app.get('/ui/animation.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/profile/js', 'animation.js'));
});
app.get('/ui/jquery.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/profile/js', 'jquery.js'));
});
app.get('/ui/validate.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/profile/js', 'validate.js'));
});
app.get('/ui/profile/css/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/profile/css', 'style.css'));
});

app.get('/ui/profile/css/reset.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/profile/css', 'reset.css'));
});

app.get('/ui/home.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'home.png'));
});
app.get('/ui/Articles.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Articles.png'));
});
app.get('/ui/about.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'about.png'));
});
app.get('/ui/album.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'album.png'));
});
app.get('/ui/video.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'video.jpg'));
});
app.get('/ui/Angles.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Angles.jpg'));
});
app.get('/ui/profile/images/texture.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/profile/images', 'texture.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
