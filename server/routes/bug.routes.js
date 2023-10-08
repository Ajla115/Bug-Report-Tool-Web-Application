import express from 'express';

//since we exported middleware as default variable, we can write it just like this without " "
import authMiddleware from '../middleware/auth.middleware.js';
import {getAllBugs, createBug, changeCompletedStatus, getBugsByUserId} from '../controllers/bug.controller.js'

const router = express.Router();

router.get('/', authMiddleware, getAllBugs);

router.post('/', authMiddleware, createBug)
//routes can have the same name, if the action is different, such as post, get etc.

router.put('/:id/completedStatus', authMiddleware, changeCompletedStatus);

router.get('/:userId', authMiddleware, getBugsByUserId);

export default router;

//middleware is here used as middle function, so when any of these routes is actually being called,
//first a middleware function will be executed, and if T, it will continue to the next function
//if it is False, it will return error message 401- Unathorized