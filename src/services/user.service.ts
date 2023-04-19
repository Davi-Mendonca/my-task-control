import userRepository from "../repositories/user.repository";
import { IUser } from "../models/user.model";
import bcrypt, { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secretJWT = process.env.JWT_SECRET_KEY || ""

class userService {

    getAll() {
        return userRepository.getAll()
    }

    async getByDocument(document: string) {
        const foundUser = await userRepository.getByDocument(document);
        if (!foundUser) throw new Error("User not found.");
        return foundUser;
    }

    async create(user: IUser) {
        return userRepository.create(user)
    }

    // async authorization(document: string, password: string) {
    //     const user = await userRepository.getByID(document);
        
    //     if(!user) throw new Error('User not found.');

    //     const result = await bcrypt.compare(password, user.password);

    //     if(result) {            
    //         return jwt.sign({document: user.document, _id: user.document},
    //             secretJWT, {expiresIn: '1h'})
    //     }

    //     throw new Error('Falha na utenticação')
    // }

    async remove(document: string){
        const foundUser = await userRepository.getByDocument(document);
        if (!foundUser) throw new Error("User not found.");
        return userRepository.delete(document)
    }

    async update(document: string, user: Partial<IUser>) {
        const foundUser = await userRepository.getByDocument(document);
        if (!foundUser) throw new Error("User not found.");
        return userRepository.update(document, user)
    }
}

export default new userService();