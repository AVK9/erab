const mongoose = require('mongoose');
const app = require('./app');
// const { MongoClient } = require('mongodb');

const { DB_HOST, PORT = 4000 } = process.env;
// const client = new MongoClient(DB_HOST);

mongoose.set('strictQuery', true);

const serverMain = () => {
  mongoose
    .connect(DB_HOST)

    .then(() => {
      app.listen(PORT, () => {
        console.log('Database connection successful');
        // const database = client.db('db-events');
        // const collection = database.collection('events');
      });
    })
    .catch(error => {
      console.log(error.message);
      process.exit(1);
    });
};
serverMain();

module.exports = serverMain;
