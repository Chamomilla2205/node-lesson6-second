const express = require('express');
const mongoose = require('mongoose');
const apiRouter = require('./router/api.router');
const constant = require('./constants');

const app = express();

_connectDB();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/', apiRouter);

app.listen(6000, () => {
    console.log('App listen 6000');
});

function _connectDB() {
    mongoose.connect(constant.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

    const { connection } = mongoose;

    connection.on('error', (err) => {
        console.log(err);
    });
}
