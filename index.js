const express = require("express");
const app = express();
const dotenv = require("dotenv");


//Configuration for .env
dotenv.config();

//Routes
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/test', (req, res) => {
  res.send('Hello Test');
});

//Configuration for Port 
app.listen(process.env.PORT, () => {
  console.log( `Backend server is running on port ${process.env.PORT}`);
});