const client = require("../client");

async function createCategories({ name }) {
  console.log("Creating categories");
  const {
    rows: [category],
  } = await client.query(
    `
    INSERT INTO anime_categories(name)
    VALUES($1) 
    RETURNING *;
    `,
    [name]
  );
  return category;
}

module.exports = {
  createCategories,
};
