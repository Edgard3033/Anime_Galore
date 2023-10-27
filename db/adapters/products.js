const client = require("../client");

async function createProduct({
  title,
  description,
  image_url,
  price,
  category_id,
}) {
  try {
    console.log("starting to insert Products into database.");
    const {
      rows: [product],
    } = await client.query(
      `
        INSERT INTO products(title, description, image_url, price, category_id)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
    `,
      [title, description, image_url, price, category_id]
    );
    return product;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createProduct,
};
