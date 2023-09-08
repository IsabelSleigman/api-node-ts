import { UserService, IUser } from './UserService';

describe('UserService', () => {
    const mockDb: IUser[] = []
    const userService = new UserService(mockDb);

    it('Deve adicionar um novo usuário', () => {
        const mockConcole = jest.spyOn(global.console, 'log')
        userService.createUser('Bel', 'bel@gmail.com')
        expect(mockConcole).toHaveBeenCalled()
    })
})