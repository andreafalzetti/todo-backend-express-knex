const app = require('./server-config.js');
const registerRoutesTodo = require('./routes/todo.js');
const registerRoutesUser = require('./routes/user.js');
const registerRoutesLogin = require('./routes/login.js');

const port = process.env.PORT || 5000;

registerRoutesTodo(app);
registerRoutesUser(app);
registerRoutesLogin(app);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = app;