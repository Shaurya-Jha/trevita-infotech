import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config({
    path: './.env',
});

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/contact", contactRoutes);

// connection file to connect to the database
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_DB);

    console.log(`\n Database connected`);
  } catch (err) {
    console.log(`\n Connection failed`, err);
    process.exit(1);
  }
};

// establish connection
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server started: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Connection to MongoDB failed ${err}`);
  });

  // connectDB();