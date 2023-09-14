import { Router} from 'express'
import { UserController } from './controller/UserController';

const userController = new UserController()

export const router = Router()

router.post('/user', userController.createUser)
router.get('/user', userController.getUser)
router.delete('/user', userController.deleteUser)