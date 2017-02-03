var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

  var loggedin = 0;

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect email.' });

        loggedin = 0;
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });

        loggedin = 0;
      }
      return done(null, user);
      loggedin = 1;
    });
  }
));