import TaskRepository from "../repositories/task.repository";
import { ITask } from "../models/task.model";
import bcrypt, { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config();

const secretJWT = process.env.JWT_SECRET_KEY || ""

class TasksService {

    getAll() {
        return TaskRepository.getAll()
    }

    getById(id: string) {
        if (mongoose.Types.ObjectId.isValid(id)) {
            return TaskRepository.getByID(id);
        }
        throw new Error("Task not found")
    }

    async create(task: ITask) {
        return TaskRepository.create(task)
    }

    // async authorization(id: string, password: string) {
    //     const task = await TaskRepository.getByID(id);
        
    //     if(!task) throw new Error('Estudante não encontrado.');

    //     const result = await bcrypt.compare(password, task.password);

    //     if(result) {            
    //         return jwt.sign({id: task.id, _id: task.id},
    //             secretJWT, {expiresIn: '1h'})
    //     }

    //     throw new Error('Falha na utenticação')
    // }

    remove(id: string){
        if (mongoose.Types.ObjectId.isValid(id)){
        return TaskRepository.delete(id)
        }
        throw new Error("Task not found")
    }

    update(id: string, task: Partial<ITask>) {
        if (mongoose.Types.ObjectId.isValid(id)){
            return TaskRepository.update(id, task)
        }
        throw new Error("Task not found")
    }
}

export default new TasksService();