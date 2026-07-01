import 'dotenv/config'
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';




//app setup
const app = express();
const PORT = process.env.PORT || 4000;

//middlewares
app.use(cors());
app.use(express.json());

//DB connection
connectDB();

//api endpoints

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//api endpoints
app.use('/api/food', foodRouter);
app.use('/images', express.static(path.join(__dirname, 'uploads')))
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get("/", (req, res) => {
    res.send("Hello from the backend server!");
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

