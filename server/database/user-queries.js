const knex = require("./connection.js");

async function create(name, passwordHash) {
  const results = await knex("users")
    .insert({ name, password_hash: passwordHash })
    .returning("*");
  return results[0];
}

async function login(name, passwordHash) {
  const results = await knex("users")
    .where({ name, password_hash: passwordHash })
    .limit(1)
    .returning("*");
  return results[0];
}

module.exports = {
  create,
  login,
};
