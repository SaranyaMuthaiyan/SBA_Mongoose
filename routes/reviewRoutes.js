import express from 'express';
import {
    getReviews, createReview, deleteReview } from '../controllers/revContoller.js';
const router = express.Router();
router.get('/', getReviews);
router.post('/',createReview);
router.delete(':/id', deleteReview);

export default router;