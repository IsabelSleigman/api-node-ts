import { EntityManager } from "typeorm";
import { User } from "../entities/User";
import { UserModel } from "../models/UserModel";
import { UserUpdateModel } from "../models/UserUpdateModel";

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

    updateUser = async ( userId: string, userUpdate: UserUpdateModel) =>{
        await this.manager.createQueryBuilder()
        .update(User)
        .set({
            name: userUpdate.name,
            email: userUpdate.email,
            password: userUpdate.password,
        })
        .where({id_user: userId})
        .execute()
    }

    deleteUser = async (userId: string) => {
        await this.manager
        .createQueryBuilder()
        .delete()
        .from(User)
        .where({id_user: userId})
        .execute()
    }
}