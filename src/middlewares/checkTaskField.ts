import { Request, Response, NextFunction } from "express";
import { IDefaultResponse } from "../interfaces";

export function checkTaskField(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const { title, description } = req.body;

	if (!title) {
		return res.status(404).json({
			ok: false,
			message: "Preencher o campo Título!",
		} as IDefaultResponse);
	}

	if (!description) {
		return res.status(404).json({
			ok: false,
			message: "Preencher o campo Descrição!",
		} as IDefaultResponse);
	}

	next();
}
