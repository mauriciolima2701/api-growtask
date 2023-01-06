import { Request, Response, Router } from "express";
import {
	getUserId,
	addUser,
	addTask,
	getTasks,
	getTaskById,
	updateTask,
	deleteTask,
	updateUser,
} from "../functions";
import { data } from "../services/data";
import { checkTaskField, checkUserData, checkUserId } from "../middlewares";

const router = Router();

// Buscando todos os usuários;
router.get("/users", (req: Request, res: Response) => {
	data.getUsers(req, res);
});

// Buscando um usuário específico
router.get("/users/:email", checkUserId, (req: Request, res: Response) => {
	getUserId(req, res);
});

// Criando usuário
router.post("/users", checkUserData, (req: Request, res: Response) => {
	addUser(req, res);
});

// Atualizar usuário
router.put("/users/:email", checkUserId, (req: Request, res: Response) => {
	updateUser(req, res);
});

//------------ Recados ------------------

// Criar uma tarefa
router.post(
	"/user/:email/task",
	[checkUserId, checkTaskField],
	(req: Request, res: Response) => {
		addTask(req, res);
	}
);

// Buscar tarefas de um usuário e com opção de filtros
router.get("/user/:email/task", checkUserId, (req: Request, res: Response) => {
	getTasks(req, res);
});

// Buscar uma tarefa específica
router.get(
	"/user/:email/task/:id",
	[checkUserId],
	(req: Request, res: Response) => {
		getTaskById(req, res);
	}
);

// Atualizar tarefa
router.put(
	"/user/:email/task/:id",
	[checkUserId, checkTaskField],
	(req: Request, res: Response) => {
		updateTask(req, res);
	}
);

// Deletar tarefa
router.delete(
	"/user/:email/task/:id",
	[checkUserId],
	(req: Request, res: Response) => {
		deleteTask(req, res);
	}
);

export default router;
