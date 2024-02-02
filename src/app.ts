import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from 'mongoose';
import compression from 'compression';
import * as dotenv from 'dotenv';

dotenv.config();

import router from "./router";
import { MONGO_URL } from './config';

const app = express();

app.use(cors({credentials: true}));
app.use(morgan("dev"));
app.use(compression())
app.use(express.json());

app.use('/', router());

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL)
mongoose.connection.on('error', (error: Error) => console.log(error));

export default app;
