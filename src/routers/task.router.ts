import { Request, Response, Router } from "express";
import TaskService from "../services/task.service";

const router = Router();

router.get('/', async (request: Request, response: Response) => {
    const tasks = await TaskService.getAll();
    response.status(200).send(tasks);
})

router.get('/:id', async (request: Request, response: Response) => {
    try {
        const task = await TaskService.getById(request.params.id);
        response.status(200).send(task);
        
    } catch (error: any) {
        response.status(400).send({message: error.message})
    }
})

router.post('/', async (request: Request, response: Response) => {
    await TaskService.create(request.body);
    response.status(201).send({
        message: 'Task created',
        task: request.body
    })
})

router.delete('/:id', async (request: Request, response: Response) => {
    await TaskService.remove(request.params.id)
    response.status(200).send({ message: "Task deleted successfully" })
})

router.put('/:id', async (request: Request, response: Response) => {
    try {
        await TaskService.update(request.params.id, request.body)
        response.status(200).send({ message: "update seccessfully"})
    } catch (error: any) {
        response.status(400).send({ message: error.message })
    }
})

export default router;