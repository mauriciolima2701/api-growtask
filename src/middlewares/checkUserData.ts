import { Request, Response, NextFunction } from "express";
import { data } from "../services/data";
import { IDefaultResponse } from "../interfaces";

export function checkUserData(req: Request, res: Response, next: NextFunction) {
	const { name, email, password, task } = req.body;

	const userEmailExists = data.allUsers().some((user) => user.email === email);

	if (!name || !email || !password || !task) {
		return res.status(404).json({
			ok: false,
			message: "Preencher todos os campos!",
		} as IDefaultResponse);
	}

	if (userEmailExists) {
		return res.status(400).json({
			ok: false,
			message: "Já existe um usuário cadastrado com este e-mail",
		} as IDefaultResponse);
	}

	next();
}
