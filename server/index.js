import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

// routes
import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express();
dotenv.config();

app.use(bodyParser.json( {limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded( {limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);
app.use("/user", userRouter);

// connect to db

// const CONNECTION_URL = "mongodb+srv://nawill:usha0816@cluster0.g8vx0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true} )
.then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
.catch( (error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
