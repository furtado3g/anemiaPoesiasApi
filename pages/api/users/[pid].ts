import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../database/connection";
import {hashPassword} from '../../../util/cript'

interface userType {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  birthday: Date;
}

async function update(user: userType) {
  return db("users").update(user).where("id", user.id);
}

async function getUserInfo(id: any) {
  return db("users").select("*").where("id", id);
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { pid } = req.query;
  const { id, name, username, email, password, birthday } = req.body;
  switch (req.method) {
    case "GET":
      return res.json(await getUserInfo(pid));
    case "PUT":
      return res.json(
        await update({
          id,
          name,
          username,
          email,
          password: hashPassword(password),
          birthday: new Date(birthday),
        })
      );
  }
};
