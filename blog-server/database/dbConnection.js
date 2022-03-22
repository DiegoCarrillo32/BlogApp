const mongoose = require('mongoose');
const dbConnection = async () => {
  try {
    mongoose.connect(process.env.DB_CON, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      }); 
  } catch (error) {
    console.log(error);
    throw new Error('Database connection failed, check logs for more info')
  }
}

module.exports = {
    dbConnection
}