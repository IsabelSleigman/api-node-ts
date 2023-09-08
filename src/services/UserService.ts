export interface IUser {
    name: string
    email: string
}

const db = [
    {
        name: "isabel",
        email: "isabel@gmail.com"
    }
]

export class UserService{
    db: IUser[]

    constructor(dataBase = db){
        this.db = dataBase
    }

    createUser = (name: string , email: string)=> {
        const user = {
            name,
            email,
        }

        this.db.push(user)
        console.log('DB atualizado',this.db)
    }

    getAllUsers = () => {
        return this.db
    }

    updateUser = () => {
        
    }

    deleteUser = () => {

    }
}