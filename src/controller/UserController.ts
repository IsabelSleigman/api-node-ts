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
        return response.status(400).json({message: 'Usuário não encontrado'})
    }

    updateUser = async (request: Request, response: Response) => {
        const userUpdate = request.body
        const userId = request.params.userId

        const user = await this.userService.getUser(userId)
        if(user){
            if(!userUpdate){
                await this.userService.updateUser(userId, user)
                return response.status(200).json({message: 'Usuário atualizado com sucesso'})
            }
            return response.status(400).json({message: 'Campos de alteração não enviados'})
        }
        return response.status(400).json({message: 'Usuário não encontrado'})

    }

    deleteUser = async (request: Request, response: Response) => {
        const userId = request.params.userId
        const user = await this.userService.getUser(userId)
        if(user){
            await this.userService.deleteUser(userId)
            return response.status(200).json({message: 'Usuário deletado com sucesso'})
        }
        return response.status(400).json({message: 'Usuário não encontrado'})
    }
}