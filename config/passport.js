const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const db = require('../models');

// Set up passport authentication strategy
passport.use(
  new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
      try {
        const user = await db.User.findOne({ where: { email } });

        if (!user) {
          return done(null, false, { message: 'Incorrect email.' });
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
          return done(null, false, { message: 'Incorrect password.' });
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

// Serialize user to maintain session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user from session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.User.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

module.exports = passport;
