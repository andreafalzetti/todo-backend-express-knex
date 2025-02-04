const controller = require("../controllers/user");

function routes(app) {
  app.post("/user", controller.postUser);
}

module.exports = routes;
