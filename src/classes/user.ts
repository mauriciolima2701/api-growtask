import { ITask, IUser } from "../interfaces";

class User implements IUser {
	name: string;
	email: string;
	password: string;
	task: Array<ITask>;

	constructor(name: string, email: string, password: string) {
		this.name = name;
		this.email = email;
		this.password = password;
		this.task = [];
	}
}

export { User };
