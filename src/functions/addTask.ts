import { Request, Response } from "express";
import { data } from "../services/data";
import { Task } from "../classes";
import { IDefaultResponse } from "../interfaces";

const addTask = (req: Request, res: Response) => {
	const { email } = req.params;
	const { title, description } = req.body;

	const userId = data.getUserById(email);

	const newTask = new Task(title, description);

	userId!.task.push(newTask);

	return res.status(201).json({
		ok: true,
		message: "Tarefa criada com sucesso!",
		data: newTask,
	} as IDefaultResponse);
};

export { addTask };
