const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./configdb');
const paymen = require('./Payment');
require('dotenv').config();

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/payments', paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
