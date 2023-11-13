const { User } = require('../models');

const userData =
[
  {
    "username": "DavidM",
    "email": "davidm@gmail.com",
    "password": "admin12345"
  },
  {
    "username": "blackberry",
    "email": "blackberry@gmail.com",
    "password": "password12345"
  },
  {
    "username": "JerryS",
    "email": "jerry@gmail.com",
    "password": "jerry12345"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;