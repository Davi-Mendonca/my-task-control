import cors from 'cors';
import express from 'express';
import routes from './routers';
import conn from './config/database'

const app = express()

app.use(cors());
app.use(express.json());
app.use(routes);

require("dotenv").config()

const port = 3000;

conn.then(() => {
    console.log('Banco de dados Online.');
    
    app.listen(port, () => {
        console.log('Aplicação online\nPorta: ', port);
    });
}).catch((err: any) => console.log(err))