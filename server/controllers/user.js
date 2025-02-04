const _ = require("lodash");
const users = require("../database/user-queries.js");
const addErrorReporting = require("../lib/addErrorReporting.js");
const crypto = require("crypto");
const sign = require("../lib/auth/sign.js");

function toUserData(req, data) {
  if (data && data.password_hash) {
    delete data.password_hash;
  }
  return data;
}

async function postUser(req, res) {
  const passwordHash = crypto
    .createHash("md5")
    .update(req.body.password)
    .digest("hex");

  const created = await users.create(req.body.name, passwordHash);
  return res.send(toUserData(req, created));
}

async function loginUser(req, res) {
  const passwordHash = crypto
    .createHash("md5")
    .update(req.body.password)
    .digest("hex");

  const loggedIn = await users.login(req.body.name, passwordHash);
  
  const token = sign({ id: loggedIn.id, name: loggedIn.name });
  
  return res.send({ token });
}

const toExport = {
  postUser: { method: postUser, errorMessage: "Could not post user" },
  loginUser: { method: loginUser, errorMessage: "Could not login user" },
};

for (let route in toExport) {
  toExport[route] = addErrorReporting(
    toExport[route].method,
    toExport[route].errorMessage
  );
}

module.exports = toExport;
