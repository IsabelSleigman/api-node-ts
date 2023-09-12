import { UserController } from "./UserController";
import { UserService } from "../services/UserService";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { makeMockRequest } from "../__mocks__/mockRequest.mock";
import { Request } from "express";

describe("UserController", () => {
  const mockUserService: Partial<UserService> = {
    createUser: jest.fn(),
    getAllUsers: jest.fn(),
  };

  const userController = new UserController(mockUserService as UserService);
  const mockResponse = makeMockResponse();

  it('Deve adicionar um novo usuário', () => {
    const mockRequest = {
      body: {
        name: "Bel",
        email: "bel@teste.com",
      },
    } as Request;

    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(201);
    expect(mockResponse.state.json).toMatchObject({
      message: "Usuário criado com sucesso",
    });
  });

  it('Deve retornar erro caso o usuário não informado o name', () => {
    const mockRequest = {
        body: {
          name: "",
          email: "bel@teste.com",
        },
      } as Request;
      
      userController.createUser(mockRequest, mockResponse);
      expect(mockResponse.state.status).toBe(400);
      expect(mockResponse.state.json).toMatchObject({
        message: "Bad request: Nome/email obrigatorio",
    });
  })

  it('Deve retornar erro caso o usuário não informe o email', () => {
    const mockRequest = {
        body: {
          name: "Bel",
          email: "",
        },
      } as Request;
      
      userController.createUser(mockRequest, mockResponse);
      expect(mockResponse.state.status).toBe(400);
      expect(mockResponse.state.json).toMatchObject({ message: "Bad request: Nome/email obrigatorio" });
  })

  it('Deve retornar a lista de usuários', () => {
    const mockRequest = makeMockRequest({})
    userController.getAllUsers(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(200);
  })

  it('Deve retornar a mensagem de usuário deletado', () => {
    const mockRequest = {
      body: {
        name: "Bel",
        email: "bel@gmail.com",
      },
    } as Request;
    
    userController.deleteUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(200);
    expect(mockResponse.state.json).toMatchObject({ message: "Usuário deletado com sucesso" });
  })
});
