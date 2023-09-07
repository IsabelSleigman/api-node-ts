import express, { Request, Response } from 'express';
import { UserController } from './controller/UserController';
const porta: number = 5000

const userController = new UserController()

const server = express();

server.use(express.json())

server.get('/', (request: Request, response: Response) => {
    return response.status(200).json({message: 'Servidor rodando'})
})

server.post('/user', userController.createUser)
server.get('/user', userController.getAllUsers)

server.listen(porta,  () => console.log(`Servidor rodando http://localhost:${porta}.`))
