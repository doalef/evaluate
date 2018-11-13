'use strict';
import "./app/config/env";
import GLOBAL from './global';
import express from 'express';
import ip from 'ip';
import config from './../config';
import mongoose from 'mongoose';
import path from 'path';
import api from './app/api';
import middleware from './app/middlewares/middleware';
import ExpressPlugin from './app/middlewares/expressPlugin';
var app = express();
mongoose.connect(process.env.DB_URL, {
    useMongoClient: true
}, (err) => {
    if (err) return console.log(err);
    console.log('connected to database');
});


middleware(app);
app.use(ExpressPlugin);
app.use(express.static(path.join(__dirname + '/app/public')))
api(app);

app.get('/', (req, res) => {
    res.send('index.html');
});

app.listen(process.env.API_PORT, (err) => {
    if (!err) {
        console.log('check out http://' + ip.address() + ':'+process.env.API_PORT);
    }
});