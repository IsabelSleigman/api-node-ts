import { EntityManager } from "typeorm";
import { User } from "../entities/User";
import { UserModel } from "../models/UserModel";

export class UserRepository{
    private manager: EntityManager

    constructor(manager: EntityManager){
        this.manager = manager
    }

    createUser = async (user: User): Promise<User> => {
        return this.manager.save(user)
    }

    getUser = async (userId: string) => {
        const user = await this.manager.findOne(User, {
            where: {
                id_user: userId
            }
        })

        if(user){
            const userModel: UserModel = {
                name: user.name,
                email: user.email,
                userId: user.id_user
            }
            return userModel
        }
        return user
    }
}