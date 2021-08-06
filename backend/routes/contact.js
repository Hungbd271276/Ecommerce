import express from 'express';
const router = express.Router();
import { create, list, contactById, remove } from '../controllers/contact';

router.post('/contacts', create),
router.get('/contact', list),
router.delete('/contact/:contactId', remove),
router.param("contactId", contactById);
module.exports = router; 