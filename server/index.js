import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

// routes
// import postRoutes from './routes/posts';

const app = express();

// app.use('/posts', postRoutes);

app.use(bodyParser.json( {limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded( {limit: "30mb", extended: true}));
app.use(cors());

// connect to db

const CONNECTION_URL = "mongodb+srv://nawill:usha0816@cluster0.g8vx0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true} )
.then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
.catch( (error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
