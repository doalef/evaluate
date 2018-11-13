'use strict';
import jwt from 'jsonwebtoken';
import config from './../../../config';

export let authenticateToken = (req ,res, next) => {
    let token = req.body.token || req.headers['x-access-token'] || req.cookies['x-access-token'];
    if (token) {
        jwt.verify(token, config.secretKey, (err, decoded) => {
            if (err) {
                req.user = undefined;
                next();
            } else {
                req.user = decoded;
                next();
            }
        });
    } else {
        req.user = undefined;
        next();
    }
};

export let verifyAccess = (req, res, next) => {
    if (req.user) {
        model.UserSchema.findById(req.user._id).select('type')
            .lean().exec((err, user) => {
                if (err) {
                    req.admin = false;
                    req.author = false;
                    next();
                } else if (!user) {
                    req.admin = false;
                    req.author = false;
                    req.user = undefined;
                    next();
                } else {
                    if (user.type >= 2) {
                        req.admin = true;
                        req.author = true;
                        next();
                    } else if (user.type == 1) {
                        req.admin = false;
                        req.author = true;
                        next();
                    } else {
                        req.admin = false;
                        req.author = false;
                        next();
                    }
                }
            })
    }
}