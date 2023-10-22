const {Database, User}=require('./mongoose')
const express = require("express")
const cors=require('cors')
const app = express();
app.use(express.json());

app.use(cors())
const port=process.env.PORT || 3000
app.listen(3000, () => {
  console.log(`The server is active on port ${port}`);
});

const db =new Database()
app.post('/register', (req, res) => {
    const { number, password } = req.body; // Assuming your frontend is sending a JSON object with 'number' and 'email' fields
    // console.log("kkk",req.body)
    const newUser = new User({
      number: number,
      password: password,
    });

    newUser.save()
      .then(() => {
        res.send('User saved to MongoDB');
        const message = 'User saved to MongoDB';
        res.send(message);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Error saving user to MongoDB');
      });
  });
  