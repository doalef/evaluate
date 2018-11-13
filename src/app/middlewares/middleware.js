'use strict';
import {authenticateToken,verifyAccess} from './auth';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors'

export default (app) => {
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Headers', 'Origin, x-access-token, X-Requested-With, Content-Type, Accept');
        next();
    });
    app.use(cookieParser())
    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.use(authenticateToken);
    // app.use(verifyAccess)
};