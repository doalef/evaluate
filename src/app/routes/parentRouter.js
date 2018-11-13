import express from 'express';
import { add, list, update } from '../controllers/mother';
let parentRouter = express.Router();

export default () => {
    parentRouter.post('/add',add);
    parentRouter.post('/list',list);

    return parentRouter;
}