import { Request, Response } from "express";
import { User } from "../classes";
import { data } from "../services/data";
import { IDefaultResponse, IUser } from "../interfaces";

const addUser = (req: Request, res: Response) => {
	const { name, email, password } = req.body;

	const newUser: IUser = new User(name, email, password);

	data.addUser(newUser);

	return res.status(201).json({
		ok: true,
		message: "Usuário criado com sucesso!!",
		data: newUser,
	} as IDefaultResponse);
};

export { addUser };
