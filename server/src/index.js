const express = require('express');
const dotenv = require('dotenv');
const ProductRouter = require('./routes/product');

dotenv.config();

// Create app
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.status(200).send('OK');
});
app.use('/product', ProductRouter);

// Run server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
 
