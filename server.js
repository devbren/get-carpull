const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 3001;

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//static middleware pointing to the public folder 
app.use(express.static('public'));


app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/api, apiRoutes');
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log (`API server working on Port ${PORT}!`);
});