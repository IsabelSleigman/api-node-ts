import { EntityManager } from 'typeorm/entity-manager/EntityManager';
import { getMockEntityManager } from '../__mocks__/mockEntityManager.mock';
import { User } from '../entities/User';
import { UserRepository } from './UserRepository';
describe('UserRepository', () => {

    let userRepository: UserRepository
    let managerMock: Partial<EntityManager>

    const mockUser: User = {
        id_user: '123455',
        name: 'TesteUser',
        email: 'teste@teste.com',
        password: 'teste'
    }

    beforeAll( async () => {
        managerMock = await getMockEntityManager({
            saveReturn: mockUser
        })
        userRepository = new UserRepository(managerMock as EntityManager)
    })

    it('Deve cadastrar um novo usuário no banco de dados', async () => {
        const response = await userRepository.createUser(mockUser)
        expect(managerMock.save).toHaveBeenCalled()
        expect(response).toMatchObject(mockUser)
    })
})