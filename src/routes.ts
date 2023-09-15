import { Router} from 'express'
import { UserController } from './controller/UserController';

const userController = new UserController()

export const router = Router()

router.post('/user', userController.createUser)
router.get('/user/:userId', userController.getUser)
router.put('/user/:userId', userController.updateUser)
router.delete('/user/:userId', userController.deleteUser)