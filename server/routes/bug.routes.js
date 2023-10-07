import express from 'express';

import {getAllBugs, createBug, changeCompletedStatus} from '../controllers/bug.controller.js'

const router = express.Router();

router.get('/', getAllBugs);

router.post('/', createBug)
//routes can be the same, if the action is different, such as post, get etc.

router.put('/:id/completedStatus', changeCompletedStatus);

export default router;