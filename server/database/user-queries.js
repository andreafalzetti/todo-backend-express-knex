const knex = require("./connection.js");

async function create(name) {
  const results = await knex("users").insert({ name }).returning("*");
  return results[0];
}

module.exports = {
  create,
};
