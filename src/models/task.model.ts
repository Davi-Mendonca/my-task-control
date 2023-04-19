import { Schema } from "mongoose";
import mongoose from "mongoose";

export interface ITask {
  title: string;
  description: string;
  owner: string;
  started?: Date;
  deliveryTime?: Date;
  finishedIn?: Date;
  status: string;
  priority: number;
  createdAt: string | Date;
}

export const taskSchema = new Schema<ITask>({
  title: {
    type: String
  },
  description: {
    type: String
  },
  owner: {
    type: String
  },
  started: {
    type: Date
  },
  deliveryTime: {
    type: Date
  },
  finishedIn: {
    type: Date,
  },
  status: {
    type: String
  },
  priority: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const Task = mongoose.model<ITask>('Task', taskSchema)