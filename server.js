var express = require('express');

//Create our app

var app = express();
app.use(function(req, resp, next) {
    if (req.headers['x-forwarded-protot'] === 'http') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }

});
app.use(express.static('public'));
const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log('the server is up');
});