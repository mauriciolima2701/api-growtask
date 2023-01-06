import { Request, Response } from "express";
import { IDefaultResponse } from "../interfaces";
import { data } from "../services/data";

const updateTask = (req: Request, res: Response) => {
	const { email, id } = req.params;
	const { title, description, status } = req.body;

	const user = data.getUserById(email);

	const taskUser = user!.task.find((task) => task.id === id);

	if (!taskUser) {
		return res.status(404).json({
			ok: false,
			message: "Tarefa não encontrada!",
		} as IDefaultResponse);
	}

	if (!status) {
		return res.status(404).json({
			ok: false,
			message: "Preencher o campo status corretamente",
		} as IDefaultResponse);
	}

	if (title) taskUser!.title = title;
	if (description) taskUser!.description = description;
	if (status) taskUser!.status = status;

	return res.status(200).json({
		ok: true,
		message: "Tarefa atualizada com sucesso!",
		data: taskUser,
	} as IDefaultResponse);
};

export { updateTask };
