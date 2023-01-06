import { Request, Response } from "express";
import { IDefaultResponse, ITask, IUser } from "../interfaces";
import { Task, User } from "../classes/index";

class Data {
	private users: IUser[] = [];
	private tasks: ITask[] = [];

	allUsers(): User[] {
		return this.users;
	}

	getUsers(req: Request, res: Response) {
		const users: User[] = this.users;

		if (users.length === 0) {
			return res.status(404).json({
				ok: false,
				message: "Nenhum usuário encontrado!",
			} as IDefaultResponse);
		}

		return res.json({
			ok: true,
			message: "Dados encontrados com sucesso!",
			data: users,
		} as IDefaultResponse);
	}

	getUserById(email: string) {
		return this.users.find((user) => user.email === email);
	}

	addUser(user: User) {
		this.users.push(user);
	}

	// ------ Recados -------

	allTasks(): Task[] {
		return this.tasks;
	}
}

const data = new Data();

export { data };
