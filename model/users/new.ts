import db from '../../database/connection.ts'

interface userType{
    name:string,
    username: string,
    email: string,
    password: string,
    birthday: Date
}

const persistUser = async (user:userType) =>{
    return await db('users').insert(user)
}

export default persistUser