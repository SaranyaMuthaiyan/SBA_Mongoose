import express from 'express';
import { getUsers, 
       createUser, 
       deleteUser, 
       updateUser
} from '../controllers/userController.js';

const router = express.Router();
router.get('/', getUsers);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
