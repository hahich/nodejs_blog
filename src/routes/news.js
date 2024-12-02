import express from 'express';
import NewsController from '../app/controllers/NewsController.js';

const router = express.Router();
const newsController = new NewsController();

// newsController.index
router.use('/:show', newsController.show.bind(newsController));
router.use('/', newsController.index.bind(newsController));

export default router; // Xuất router