import { Request, Response } from "express";
import { data } from "../services/data";
import { IDefaultResponse } from "../interfaces";

const getTaskById = (req: Request, res: Response) => {
	const { email, id } = req.params;

	const userId = data.getUserById(email);

	let findTask;

	if (userId) {
		findTask = userId.task.find((task) => task.id === id);
	}

	if (!findTask) {
		return res.status(404).json({
			ok: false,
			message: "Tarefa não encontrada!",
		} as IDefaultResponse);
	}

	return res.status(200).json({
		ok: true,
		message: `Tarefa encontrada para usuário ${userId!.name}`,
		data: findTask,
	} as IDefaultResponse);
};

export { getTaskById };
