import {Router} from 'express';
import { addContactFormData, getAllContactFormData } from '../controllers/contactController.js';


const router = Router();

// REST API methods
router.get('/', getAllContactFormData);

router.post('/', addContactFormData);

export default router;