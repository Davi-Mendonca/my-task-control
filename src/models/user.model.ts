import { Schema } from "mongoose";
import mongoose from "mongoose";

export interface IUser{
  name: string;
  email: string;
  document: string;
  password: string;
  phone?: string;
  createdAt: string | Date;
}

export const userSchema = new Schema<IUser>({
  name: {
    type: String
  },
  email: {
    type: String
  },
  document: {
    type: String
  },
  password: {
    type: String
  },
  phone: {
    type: String
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

export const User = mongoose.model<IUser>('User', userSchema);