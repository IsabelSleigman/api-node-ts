const db = [
    {
        name: "isabel",
        email: "isabel@gmail.com"
    }
]

export class UserService{
    createUser = (name: string , email: string)=> {
        const user = {
            name,
            email,
        }

        db.push(user)
        console.log(db)
    }

    getAllUsers = () => {
        return db
    }

    updateUser = () => {
        
    }

    deleteUser = () => {

    }
}