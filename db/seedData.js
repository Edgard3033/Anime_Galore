// Create dummy data to seed into your DB
const users = [
  { username: "Edgard123", password: "Password123" },
  { username: "Hayley123", password: "Password123" },
];

const categories = [
  { name: "Naruto" },
  { name: "One Piece" },
  { name: "Dragon Ball Z" },
];

const products = [
  {
    title: "Naruto Action Figure",
    description:
      "Anime action figure from the famous anime show Naruto Shippuden",
    image_url:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FUltimate-Legends-Naruto-Uzumaki-Action%2Fdp%2FB09Y9LLRFK&psig=AOvVaw3Kkgdn25VaHiA-XkfJXdqM&ust=1698511120373000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLD775HVloIDFQAAAAAdAAAAABAQ",
    price: 21,
    category_id: 1,
  },
  {
    title: "Attack on Titan chapter 10",
    description: "Famous amime series manga Attack on Titan Chapter 10",
    image_url:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.penguinrandomhouse.com%2Fbooks%2F235917%2Fattack-on-titan-10-by-hajime-isayama%2F&psig=AOvVaw1N_sfzY1NQfXEFOSv5VT8P&ust=1698511276529000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCXvNzVloIDFQAAAAAdAAAAABAE",
    price: 11,
    category_id: 2,
  },
];

const carts = [
  {
    product_id: 1,
    quantity: 1,
  },
  {
    product_id: 2,
    quantity: 2,
  },
];

module.exports = {
  users,
  categories,
  products,
  carts,
};
