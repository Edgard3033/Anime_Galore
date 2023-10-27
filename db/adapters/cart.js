const client = require("../client");

async function createCart({ product_id, quantity }) {
  try {
    console.log("Inserting cart items into database.");
    const {
      rows: [cart],
    } = await client.query(
      `
        INSERT INTO cart(product_id, quantity)
        VALUES($1, $2)
        RETURNING *;
        `,
      [product_id, quantity]
    );
    return cart;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createCart,
};
