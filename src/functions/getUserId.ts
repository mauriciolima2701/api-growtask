import { Request, Response } from "express";
import { data } from "../services/data";
import { IDefaultResponse } from "../interfaces";

const getUserId = (req: Request, res: Response) => {
	const { email } = req.params;

	const userId = data.getUserById(email);

	return res.status(200).json({
		ok: true,
		message: "Usuário encontrado com sucesso!",
		data: userId,
	} as IDefaultResponse);
};

export { getUserId };
