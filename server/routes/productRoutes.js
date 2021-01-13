import express from "express";
import {
  getProductById,
  getProducts,
} from "../controllers/productController.js";

const router = express.Router();

// GET api/products => Fetch all products
router.route("/").get(getProducts);

// GET api/products/:id => Fetch single product
router.route("/:id").get(getProductById);

export default router;
