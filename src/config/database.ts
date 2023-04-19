import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config();

const databaseURL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/myTaskControl';

export default mongoose.connect(databaseURL)