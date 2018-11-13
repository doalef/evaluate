import model from '../model';
import {add,list,update} from '../controllers/student';
import express from 'express';
let studentRouter = express.Router();

export default () => {
    studentRouter.post('/add',add);
    studentRouter.post('/list',list);
    studentRouter.post('/update',update);
    
    return studentRouter;
}