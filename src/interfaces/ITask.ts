export type status = "arquivado" | "ativo";

interface ITask {
	id: string;
	status: status;
	title: string;
	description: string;
}

export { ITask };
