import { AppDataSource } from "../database";
import { User } from "../entities/User";
import { UserUpdateModel } from "../models/UserUpdateModel";
import { UserRepository } from "../repositories/UserRepository"

export class UserService{
    private userRepository: UserRepository;

    constructor(
        userRepository= new UserRepository(AppDataSource.manager)
    ){
        this.userRepository = userRepository
    }

    createUser = async (name: string , email: string, password: string)=> {
        const user = new User(name, email, password);
        return this.userRepository.createUser(user);
    }

    getUser = (idUser: string) => {
        return this.userRepository.getUser(idUser)
    }

    updateUser = (idUser: string, userUpdate: UserUpdateModel) => {
        return this.userRepository.updateUser(idUser, userUpdate)
    }

    deleteUser = (idUser: string) => {
        return this.userRepository.deleteUser(idUser)
    }
}