import { NextApiRequest, NextApiResponse } from "next";
import persistUser from "../../../model/users/new.ts";

const NewUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  if (method !== "POST") {
    res.status(400).send({ error: "This route don't suport this method" });
  } else {
    const { name, username, email, password, birthday } = req.body;
    res.send(
      await persistUser({
        name,
        username,
        email,
        password,
        birthday: new Date(birthday),
      })
    );
  }
};

export default NewUser;
