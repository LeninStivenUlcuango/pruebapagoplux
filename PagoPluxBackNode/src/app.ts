import express from "express";
import dotenv from 'dotenv';
import cors from 'cors'
dotenv.config({ path: ".env" });

import userRoutes from "./routes/userRoutes";
import pagosPluxRoutes from "./routes/pagosPluxRoutes";

const app=express();

const corsOptions = {
    origin: 'http://localhost:4200',
    credentials: true, // Permite el envío de credenciales
  };

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api',userRoutes);
app.use('/api',pagosPluxRoutes);

app.listen(3000);
console.log('Server on port',3000);


// import {connectDB} from "./config/config";
// import { PrismaClient } from '@prisma/client';

// //coneccion a la base de datos
// connectDB();


// const prisma = new PrismaClient()

// async function main() {
//   // ... you will write your Prisma Client queries here
//   const allUsers = await prisma.user.findMany()
//   console.log(allUsers)
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })

