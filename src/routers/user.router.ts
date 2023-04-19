import { Request, Response, Router } from "express";
import userService from "../services/user.service";

const router = Router();

router.get('/', async (request: Request, response: Response) => {
    const users = await userService.getAll();
    response.status(302).send(users);
})

router.get('/:document', async (request: Request, response: Response) => {
    try {
        const user = await userService.getByDocument(request.params.document);
        response.status(302).send(user);
    } catch (error: any) {
        response.status(400).send({ message: error.message })
    }
})

router.post('/', async (request: Request, response: Response) => {
    await userService.create(request.body);
    response.status(201).send({
        message: 'User created',
        user: request.body
    })
})

router.delete('/:document', async (request: Request, response: Response) => {
    try {
        await userService.remove(request.params.document)
        response.status(200).send({ message: "User deleted successfully" })
    } catch (error: any) {
        response.status(400).send({ message: error.message })
    }
})

router.put('/:document', async (request: Request, response: Response) => {
    try {
        await userService.update(request.params.document, request.body)
        response.status(200).send({ message: "update seccessfully"})
    } catch (error: any) {
        response.status(400).send({ message: error.message })
    }
})

export default router;