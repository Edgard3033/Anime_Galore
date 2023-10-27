const client = require("./client");
//RESTART POSTBIRD
//sudo service postgresql restart

//imports
const { createUser } = require("./adapters/users");
const { createCategories } = require("./adapters/anime_categories");
const { createProduct } = require("./adapters/products");
const { createCart } = require("./adapters/cart");

//Seed Data
const { users, categories, products, carts } = require("./seedData");
async function dropTables() {
  await client.query(`
  DROP TABLE IF EXISTS cart;
  DROP TABLE IF EXISTS products;
  DROP TABLE IF EXISTS anime_categories;
  DROP TABLE IF EXISTS userz; 
  `);
}

async function createTables() {
  console.log("Starting to create tables...");

  await client.query(`
  CREATE TABLE userz (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
  )
  `);

  await client.query(`
  CREATE TABLE anime_categories (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
  )
  `);

  await client.query(`
  CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL, 
    description TEXT NOT NULL,
    image_url TEXT,
    price INTEGER,
    category_id INTEGER REFERENCES anime_categories(id)
  )
`);

  await client.query(`
  CREATE TABLE cart (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id),
    quantity INTEGER DEFAULT 1
  )
  `);
}

async function populateTables() {
  // Seed tables with dummy data from seedData.js
  console.log("Starting to populate data");
  //User
  for (const user of users) {
    await createUser(user);
  }

  //categories
  for (const category of categories) {
    await createCategories(category);
  }

  //products
  for (const product of products) {
    await createProduct(product);
  }

  //carts
  for (const cart of carts) {
    await createCart(cart);
  }
}

async function rebuildDb() {
  client.connect();
  try {
    await dropTables();
    await createTables();
    await populateTables();
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
}

rebuildDb();
