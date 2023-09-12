import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database:"./src/database/db.sqlite",
    migrations: [
    
        "./src/database/migrations/*.ts"
    ],
})

AppDataSource.initialize()
    .then(() => {
        console.log("Conectado ao banco de dados!")
    })
    .catch((error) => {
        console.error(error)
    })

