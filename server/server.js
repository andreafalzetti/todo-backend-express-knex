const app = require('./server-config.js');
const registerRoutesTodo = require('./routes/todo.js');

const port = process.env.PORT || 5000;

registerRoutesTodo(app);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = app;