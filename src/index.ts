import 'reflect-metadata'
import express, { Request, Response } from 'express';
import { router } from './routes';
import { AppDataSource } from './database';
const porta: number = 5000

const server = express();

server.use(express.json())
server.use(router)

server.get('/', (request: Request, response: Response) => {
    return response.status(200).json({message: 'Servidor rodando'})
})

server.listen(porta,  () => console.log(`Servidor rodando http://localhost:${porta}.`))
