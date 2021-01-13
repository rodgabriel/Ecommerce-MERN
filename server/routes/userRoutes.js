import express from "express";
import { authUser } from "../controllers/userController.js";

const router = express.Router();

// GET api/products => Fetch all products
router.post("/login", authUser);

export default router;
