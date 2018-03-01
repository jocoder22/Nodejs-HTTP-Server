const express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    MyStrategy = require('passport-local').Strategy;

passport.use(new MyStrategy(
    (username, password, done) => {
        if(password !== 'password'){
            return done(null, false);
        }
        return done(null, {username: username});
}));

passport.serializeUser((user, done) => {
    done(null, user);
});


passport.deserializeUser((user, done) => {
    done(null, user);
});



var OauthMiddleware = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else{
        res.redirect('/login');
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
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

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
    console.log(req.session);    
    res.render('profile', 
    {   title: `${req.session.passport.user.username} HomePage`,
        username: req.session.passport.user.username
    });
}]);


app.get('/login', (req, res) => {
    res.render('login', {title: 'Login'});
});


app.post('/login', passport.authenticate('local',
    {
        successRedirect: '/',
        failureRedirect: '/login'
    }
));

app.listen(9500);