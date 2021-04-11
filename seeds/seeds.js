const sequelize = require('../config/connection');
const { User } = require('../models');

//why isn't User turning green like most models? constructors?

const userData = require('./userData.json');

const seedDb = async ()=>{
    await sequelize.sync({force:true});

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0)
};

seedDb();