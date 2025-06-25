import express from 'express';
import { getUsers, 
       createUser, 
       deleteUser, 
       updateUser,
       getMovie,
       getReview,
       
} from '../controllers/userController.js';

const router = express.Router();
router.get('/users', getUsers);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

router.get('/movies', getMovie);
router.get('/review', getReview);


export default router;

