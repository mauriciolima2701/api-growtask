import { ITask } from "./ITask";

interface IUser {
	name: string;
	email: string;
	password: string;
	task: Array<ITask>;
}

export { IUser };
