const express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser');

var OauthMiddleware = (req, res, next) => {
    if (false) {
        next();
    } else{
        res.redirect('/');
    }
};

var app = express();

app.set('views', './views');
app.set('view engine', 'pug');


app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: false}));

app.use(session({
    secret: 'SuperSecret',
    resave: false,
    saveUninitialized: false,
}));


app.use((req, res, next) => {
    console.log(req.url);
    next();    
});

app.get('/', (req, res) => {
    req.session.count = (req.session.count || 0) + 1;
    console.log(req.session);
    res.render('Oauth', {title: 'Welcome'});
});

app.get('/profile', [OauthMiddleware, (req, res) => {
    res.render('profile');
}]);

app.listen(9500);