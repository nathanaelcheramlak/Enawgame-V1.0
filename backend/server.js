import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import messageRoutes from './routes/message.routes.js';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';

import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // parse incoming requests with JSON payloads(req.body or data)
app.use(cookieParser()); // parse cookies attached to the client request
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

// app.get("/", (req, res) => {
//   res.send("Root Page");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`The server is running on port ${PORT}`);
});
