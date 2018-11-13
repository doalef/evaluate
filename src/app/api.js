'use strict';
import StudentRouter from './routes/studentRouter';
import ParentRouter from './routes/parentRouter';

var api = (app) => {
    app.use('/api/student',StudentRouter())
    app.use('/api/parent',ParentRouter())
};

export default api;