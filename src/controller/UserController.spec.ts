import { UserController } from "./UserController";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { makeMockRequest } from "../__mocks__/mockRequest.mock";
import { Request } from "express";

const mockUserService = {
  createUser: jest.fn(),
  getUser: jest.fn()
}

// mocando em memoria 
jest.mock("../services/UserService", () => {
  return {
    UserService: jest.fn().mockImplementation(() => {
      return mockUserService
    })
  }
})

describe("UserController", () => {

  const userController = new UserController();
  const mockResponse = makeMockResponse();

  it('Deve adicionar um novo usuário', () => {
    const mockRequest = {
      body: {
        name: "Bel",
        email: "bel@teste.com",
        password:"12345"
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
          password:"12345"
        },
      } as Request;
      
      userController.createUser(mockRequest, mockResponse);
      expect(mockResponse.state.status).toBe(400);
      expect(mockResponse.state.json).toMatchObject({
        message: "Bad request: Nome/Email e Password obrigatorio",
    });
  })

  it('Deve retornar erro caso o usuário não informe o email', () => {
    const mockRequest = {
        body: {
          name: "Bel",
          email: "",
          password:"12345"
        },
      } as Request;
      
      userController.createUser(mockRequest, mockResponse);
      expect(mockResponse.state.status).toBe(400);
      expect(mockResponse.state.json).toMatchObject({ message: "Bad request: Nome/Email e Password obrigatorio" });
  })

  it('Deve retornar erro caso o usuário não informe o password', () => {
    const mockRequest = {
        body: {
          name: "Bel",
          email: "bel@teste.com",
          password:""
        },
      } as Request;
      
      userController.createUser(mockRequest, mockResponse);
      expect(mockResponse.state.status).toBe(400);
      expect(mockResponse.state.json).toMatchObject({ message: "Bad request: Nome/Email e Password obrigatorio" });
  })

  it('Deve retornar usuario com id especifico', () => {
    const mockRequest = makeMockRequest({})
      userController.getUser(mockRequest, mockResponse);
      expect(mockResponse.state.status).toBe(400);
  });

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
