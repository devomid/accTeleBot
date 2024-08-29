const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');

// ROUTES IMPORT
const itemsRoutes = require('./routes/itemsRoutes');
const partiesRoutes = require('./routes/partiesRoutes');
const loginRoutes = require('./routes/loginRoutes');
const selectRoutes = require('./routes/selectRoutes');

// DOTENV CONFIG
dotenv.config();
const portNum = process.env.PORT;

// APP INIT
const app = express();

// APP & MIDDLEWARES CONFIGS
app.use(express.json());
app.use("*", cors());
app.use(helmet());

// ROUTES
app.use('/', loginRoutes);
app.use('/select', selectRoutes);
app.use('/parties', partiesRoutes);
app.use('/items', itemsRoutes);


app.listen(portNum, () => {
    console.log(`server running on port ${portNum}`);
});
