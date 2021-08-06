import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv';
import productRoutes from './routes/products';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import categoryRouter from './routes/category';
import authRouter from './routes/auth';
import userRouter from './routes/user'
import cors from 'cors';
import expressValidator from 'express-validator';
import contact from './routes/contact';
const app = express();
const path = require('path');
dotenv.config();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors({ credentials: 'same-origin' }));
app.use(expressValidator());
// connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => {
  console.log(`Database connected`);
});

mongoose.connection.on('Error', err => {
  console.log(`Database connection failed, ${err.message}`);
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
}


//Router
app.use('/api', productRoutes);
app.use('/api', categoryRouter);
app.use('/api', authRouter);
app.use('/api', userRouter);
app.use('/api', contact)

//app.use('/api', userRouter);
const port = process.env.PORT || 8000


app.listen(port, () => {
  console.log(`Server is runing on port : ${port}`);
})