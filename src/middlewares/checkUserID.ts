import { Request, Response, NextFunction } from "express";
import { data } from "../services/data";
import { IDefaultResponse } from "../interfaces";

export function checkUserId(req: Request, res: Response, next: NextFunction) {
	const { email } = req.params;

	const userId = data.getUserById(email);

	if (!userId) {
		return res.status(404).json({
			ok: false,
			message: "Usuário não encontrado!",
		} as IDefaultResponse);
	}

	next();
}
