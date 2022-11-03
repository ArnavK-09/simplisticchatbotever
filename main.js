// imports
import createError from 'http-errors';
import express from 'express';
import logger from 'morgan';
import indexRouter from './routes/routes.js';

// new server
var app = express();

// view engine setup
app.set('views', './views');
app.set('view engine', 'jade');

// plugins
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./public'));

// adding routes
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/***Starting Sever***/
var PORT = 3000;
app.listen(PORT, (error) => {
  if (!error)
    console.log("🟢 Server is Successfully Running, and App is listening on port " + PORT)
  else {
    console.log("🔴 Error occurred, server can't start\n\t", error);
  }
});

// exporting app 
export default app;
