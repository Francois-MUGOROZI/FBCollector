const passport = require('passport');

//auth handller
module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  //auth callback hander
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  //logout route
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  //test
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
