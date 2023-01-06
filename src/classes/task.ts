import { ITask, status } from "../interfaces";
import { v4 as uuid } from "uuid";

class Task implements ITask {
	id: string = uuid();
	status: status = "ativo";
	title: string;
	description: string;

	constructor(title: string, description: string) {
		this.title = title;
		this.description = description;
	}
}

export { Task };
