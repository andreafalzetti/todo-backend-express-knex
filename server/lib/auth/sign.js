const fs = require("fs");
const jwt = require("jsonwebtoken");
const path = require("path");

const privateKey = fs.readFileSync(
  path.join(__dirname, "../../config/private_key.pem"),
  "utf8"
);

function sign(payload) {
  return jwt.sign(payload, privateKey, { algorithm: "RS256", expiresIn: "1h" });
}

module.exports = sign;
