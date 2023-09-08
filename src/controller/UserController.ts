import { Request, Response } from "express"
import { UserService } from "../services/UserService"

export class UserController{
    createUser = (request: Request, response: Response) => {
        const userService = new UserService()
        const user = request.body

        if(!user.name || !user.email){
            return response.status(400).json({message: 'Bad request: Nome obrigatorio'})
        }

        userService.createUser(user.name, user.email)
        return response.status(201).json({message: 'Usuário criado com sucesso'})
    }

    getAllUsers = (request: Request, response: Response) => {
        const userService = new UserService()

        const users = userService.getAllUsers()
        return response.status(200).json(users)
    }

    updateUser = (request: Request, response: Response) => {

    }

    deleteUser = (request: Request, response: Response) => {
        const user = request.body
        console.log('Deletando usuário...', user)
        return response.status(200).json({message: 'Usuário deletado com sucesso'})
    }
}