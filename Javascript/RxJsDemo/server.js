var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var variables1 = require('./server/variables/variables');
// var rep1 = require('./server/variables/representation1');
// var rep2 = require('./server/variables/representation2');


var routes = require('./server/routes/index');
var readers = require('./server/routes/readers');
var books = require('./server/routes/books');
var errors = require('./server/routes/errors');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '/server/views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

// app.use('/', routes);
console.log('hi', readers, variables1);
app.use('/api/variables', readers);
// app.use('/api/rep1', rep1);
// app.use('/api/rep2', rep2);

app.use('/api/readers', readers);
app.use('/api/books', books);
app.use('/api/errors', errors);
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var debug = require('debug')('server');

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'));

console.log('Listening on port: ' + app.get('port'));

module.exports = app;
