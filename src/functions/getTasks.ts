import { Request, Response } from "express";
import { data } from "../services/data";
import { IDefaultResponse } from "../interfaces";

const getTasks = (req: Request, res: Response) => {
	const { email } = req.params;
	const { title, status } = req.query;

	const user = data.getUserById(email);

	if (!user) {
		return res.status(404).json({
			ok: false,
			message: "Usuário não encontrado!",
		} as IDefaultResponse);
	}

	if (user!.task.length === 0) {
		return res.status(404).json({
			ok: false,
			message: "Não tem nenhuma tarefa cadastrada para este usuário!",
		} as IDefaultResponse);
	}

	const filterTasks = user!.task.filter(
		(task) =>
			(!title ||
				task.title.toLowerCase().includes(title!.toString().toLowerCase())) &&
			(!status || task.status.toLowerCase() == status)
	);

	return res.status(200).json({
		ok: true,
		message: "tarefas do usuário!",
		data: filterTasks,
	} as IDefaultResponse);
};

export { getTasks };
