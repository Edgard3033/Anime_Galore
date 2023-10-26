const client = require("../client");

async function createUser(userObj) {
  console.log("Probe 2");
  try {
    const {
      rows: [user],
    } = await client.query(
      `
      INSERT INTO userz(username, password)
      VALUES($1, $2)
      ON CONFLICT (username) DO NOTHING
      RETURNING *;
      `,
      [userObj.username, userObj.password]
    );
    //console.log("Createuser log:", user);
    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUser,
};
