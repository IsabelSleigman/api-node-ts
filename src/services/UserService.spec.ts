import { User } from '../entities/User';
import { UserModel } from '../models/UserModel';
import { UserService  } from './UserService';

jest.mock("../repositories/UserRepository")
jest.mock("../database", () => {
    initialize: jest.fn()
})

const mockUserRepository = require("../repositories/UserRepository")

const mockUser: User = {
    id_user: '123455',
    name: 'TesteUser',
    email: 'teste@teste.com',
    password: 'teste'
}

describe('UserService', () => {
    const userService = new UserService(mockUserRepository)

    it('Deve adicionar um novo usuário', async () => {
        mockUserRepository.createUser = jest.fn().mockImplementation(() => Promise.resolve(mockUser))
        const response = await userService.createUser('TesteUser', 'teste@teste.com', 'teste')
        expect(mockUserRepository.createUser).toHaveBeenCalled()
        expect(response).toMatchObject(mockUser)
    })

    it('Deve retornar usuario com id especifico', async () => {
        const user: UserModel = {
            name:'teste',
            email:'teste@email',
            userId:'1234'
        }
        mockUserRepository.getUser = jest.fn().mockImplementation(() => Promise.resolve(user))
        const response = await userService.getUser(user.userId)
        expect(mockUserRepository.getUser).toHaveBeenCalled()
        expect(response).toMatchObject(user)
    })
})