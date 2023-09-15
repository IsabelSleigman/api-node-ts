export class UserModel{
    userId: string
    name:string
    email:string

    constructor(name:string, email:string, userId:string){
        this.name = name
        this.email = email
        this.userId = userId
    }
}