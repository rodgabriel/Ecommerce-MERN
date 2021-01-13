import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import productRoutes from "./routes/productRoutes.js";
<<<<<<< HEAD
import userRoutes from "./routes/userRoutes.js";
=======
>>>>>>> 707884f9c09f0281d08654c12b07652870a97685

dotenv.config();
connectDB();

const app = express();

<<<<<<< HEAD
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
=======
app.get("/", (req, res) => {
    res.send("API is running");
});

app.use("/api/products", productRoutes);
>>>>>>> 707884f9c09f0281d08654c12b07652870a97685

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
<<<<<<< HEAD
  PORT,
  console.log(`Running in ${process.env.NODE_ENV} mode on port ${PORT}`)
=======
    PORT,
    console.log(`Running in ${process.env.NODE_ENV} mode on port ${PORT}`)
>>>>>>> 707884f9c09f0281d08654c12b07652870a97685
);
