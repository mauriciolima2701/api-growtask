import { Request, Response } from "express";
import { IDefaultResponse } from "../interfaces";
import { data } from "../services/data";

const deleteTask = (req: Request, res: Response) => {
	const { email, id } = req.params;

	const user = data.getUserById(email);

	const taskIndex = user!.task.findIndex((task) => task.id === id);

	if (taskIndex === -1) {
		return res.status(404).json({
			ok: false,
			message: "Tarefa não encontrada!",
		} as IDefaultResponse);
	}

	user!.task.splice(taskIndex, 1);

	return res.status(200).json({
		ok: true,
		message: "Tarefa excluída com sucesso!",
	} as IDefaultResponse);
};

export { deleteTask };
