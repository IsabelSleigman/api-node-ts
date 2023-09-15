import { Request, Response } from "express"
import { UserService } from "../services/UserService"

export class UserController{
    userService: UserService

    //injeção de dependencia
    constructor(userService = new UserService){
        this.userService = userService
    }

    createUser = (request: Request, response: Response) => {
        const user = request.body

        if(!user.name || !user.email || !user.password){
            return response.status(400).json({message: 'Bad request: Nome/Email e Password obrigatorio'})
        }

        this.userService.createUser(user.name, user.email, user.password)
        return response.status(201).json({message: 'Usuário criado com sucesso'})
    }

    getUser = async (request: Request, response: Response) => {
        const userId = request.params.userId
        const user = await this.userService.getUser(userId)
        if(user){
            return response.status(200).json(user)
        }
        return response.status(404).json({message: 'Usuário não encontrado'})
    }

    updateUser = (request: Request, response: Response) => {

    }

    deleteUser = (request: Request, response: Response) => {
        const user = request.body
        console.log('Deletando usuário...', user)
        return response.status(200).json({message: 'Usuário deletado com sucesso'})
    }
}