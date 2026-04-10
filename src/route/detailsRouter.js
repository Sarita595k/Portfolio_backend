import express from 'express'
import { submitContactForm } from '../controller/detailsController.js';

const router = express.Router();
// POST /api/contact
router.post('/contact', submitContactForm);

export default router
