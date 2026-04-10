import express from 'express'
import { submitContactForm } from '../controller/detailsController.js';
import { getProjectAiDetails } from '../controller/aiController.js';

const router = express.Router();
// POST /api/contact
router.post('/contact', submitContactForm);

// ai endppoint for project 
router.post('/project-analysis', getProjectAiDetails);

export default router
