import { UserService } from "./UserService";

describe('UserService', () => {
    const userService = new UserService();

    it('Deve adicionar um novo usuário', () => {
        const mockConcole = jest.spyOn(global.console, 'log')
        userService.createUser('Bel', 'bel@gmail.com')
        expect(mockConcole).toHaveBeenCalled()
    })
})