import { Request, Response } from "express";
import { IDefaultResponse } from "../interfaces";
import { data } from "../services/data";

const updateUser = (req: Request, res: Response) => {
	const { email } = req.params;
	const { newInfoUser } = req.body;

	const user = data.getUserById(email);

	user!.task = newInfoUser;

	// const userNewInfo = (user!.task = newInfoUser ?? []);

	return res.status(200).json({
		ok: true,
		message: "Tarefas do usuário atualizadas com sucesso!",
		data: user!.task,
	} as IDefaultResponse);
};

export { updateUser };
