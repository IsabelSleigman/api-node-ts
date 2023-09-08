import { UserController } from './UserController';
import { UserService } from '../services/UserService';
import { makeMockResponse } from '../__mocks__/mockResponse.mock';
import { Request } from 'express'

describe('UserController', () => {
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn()
    }

    const userController = new UserController(mockUserService as UserService)

    it('Deve adicionar um novo usuário', () => {
        const mockRequest = {
            body: {
                name:'Bel',
                email:'bel@teste.com'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({message: 'Usuário criado com sucesso'})
    })

})