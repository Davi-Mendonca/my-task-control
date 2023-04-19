import { IUser } from "../models/user.model";
import { User } from "../models/user.model";

class TaskRepository {
    getAll() {
        return User.find();
    }

    getByDocument(document: string) {
        return User.findOne({ document: document});
    }

    create(user: IUser) {
        return User.create(user);
    }

    update(document: string, user: Partial<IUser>) {
        return User.updateOne({ document: document }, { $set: user});
    }

    delete(document: string) {
        return User.findOneAndRemove({ document: document })
    }
}

export default new TaskRepository();