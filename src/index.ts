import express, { Request, Response } from 'express';

const porta: number = 5000

const server = express();

server.use(express.json())

server.get('/', (request: Request, response: Response) => {
    return response.status(200).json({message: 'Servidor rodando'})
})

server.post('/user', (request: Request, response: Response) => {
    const body = request.body
    console.log(body)
    return response.status(201).json({message: 'Usuário criado com sucesso'})
})

server.listen(porta,  () => console.log(`Servidor rodando http://localhost:${porta}.`))
