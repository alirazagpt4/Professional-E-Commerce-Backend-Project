const express  = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/database')
connectDB()
const morgan = require('morgan');
const port = 5000;
app.use(morgan('dev')) // Use morgan for logging requests in development mode
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})

