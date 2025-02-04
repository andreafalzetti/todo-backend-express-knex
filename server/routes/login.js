const controller = require("../controllers/user");

function routes(app) {
  app.post("/login", controller.loginUser);
}

module.exports = routes;
