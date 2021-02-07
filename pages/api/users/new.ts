import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../database/connection";
import {hashPassword} from '../../../util/cript'


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

const NewUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  if (method !== "POST") {
    res.status(404).send({ error: "This route don't suport this method" });
  } else {
    const { name, username, email, password, birthday } = req.body;
    res.send(
      await persistUser({
        name,
        username,
        email,
        password : hashPassword(password),
        birthday: new Date(birthday),
      })
    );
  }
};

export default NewUser;
