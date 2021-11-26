const dotenv = require('dotenv');
const bcrypt = require('bcrypt');

const { Admin } = require('../models');

const saltRounds = 10;

async function seedAdmin(login, password) {
  dotenv.config();
  try {
    const admin = await Admin.create({
      login,
      password: await bcrypt.hash(password, saltRounds),
    });
    return console.log(`Admin has been created! login: ${login}, password: ${password}`);
  } catch (error) {
    return console.log(`Something wrong :(. Error: ${error.message} `);
  }
}

seedAdmin(process.argv[2], process.argv[3]);
