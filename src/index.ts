import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from "morgan";
import * as dotenv from 'dotenv';

import router from './router';
import { PORT, MONGO_URL } from 'config';

dotenv.config();
const app = express();

app.use(cors({
  credentials: true,
}));

app.use(morgan("dev"));
app.use(compression())
app.use(cookieParser());
app.use(bodyParser.json());


const server = http.createServer(app);

server.listen(8000, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});


mongoose.Promise = Promise;
mongoose.connect(MONGO_URL)
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router());
