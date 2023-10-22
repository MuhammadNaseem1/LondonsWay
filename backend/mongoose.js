const mongoose = require("mongoose");

const server = '127.0.0.1:27017'; 
const database = 'LONDON'; 
class Database {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose
      .connect(`mongodb://${server}/${database}`)
      .then(() => {
        console.log('Database connection successful');
      })
      .catch((err) => {
        console.error('Database connection failed');
      });
  }
}
const userSchema = new mongoose.Schema({
    number: String,
    password:String
  });

  const User = mongoose.model('User', userSchema);
// const newUser = new User({
//   number: '03243043007',
//   password: 'Admin12#',
// });

// newUser.save()
// .then(() => {
//   console.log('Save User at MongoDB');
// })
// .catch((error) => {
//   console.error(error);
// });

module.exports = { Database, User };

