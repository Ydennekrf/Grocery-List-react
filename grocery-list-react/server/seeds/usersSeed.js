const { Users } = require('../models');

const userSeed = [
]

const usersSeeding = () => Users.bulkCreate(userSeed);

module.exports = usersSeeding;