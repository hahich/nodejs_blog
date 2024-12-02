import express from 'express';
import SiteController from '../app/controllers/SiteController.js'; // Sử dụng import thay vì require

const router = express.Router();
const siteController = new SiteController();

// newsController.index
router.use('/search', siteController.search.bind(siteController));
router.use('/', siteController.home.bind(siteController));

export default router; // Xuất router