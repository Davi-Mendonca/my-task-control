import { ITask } from "../models/task.model";
import { Task } from "../models/task.model";

class TaskRepository {
    getAll() {
        return Task.find();
    }

    getByID(id: string) {
        return Task.findById(id);
    }

    create(task: ITask) {
        return Task.create(task);
    }

    update(id: string, task: Partial<ITask>) {
        return Task.findByIdAndUpdate(id, task);
    }

    delete(id: string) {
        return Task.findByIdAndDelete(id)
    }
}

export default new TaskRepository();