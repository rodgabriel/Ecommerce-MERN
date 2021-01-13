import express from "express";
<<<<<<< HEAD
import {
  getProductById,
  getProducts,
} from "../controllers/productController.js";
=======
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
>>>>>>> 707884f9c09f0281d08654c12b07652870a97685

const router = express.Router();

// GET api/products => Fetch all products
<<<<<<< HEAD
router.route("/").get(getProducts);

// GET api/products/:id => Fetch single product
router.route("/:id").get(getProductById);
=======
router.get(
    "/",
    asyncHandler(async (req, res) => {
        const products = await Product.find({});
        res.json(products);
    })
);

// GET api/products/:id => Fetch single product
router.get(
    "/:id",
    asyncHandler(async (req, res) => {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404);
            throw new Error("Product not found");
        }
    })
);
>>>>>>> 707884f9c09f0281d08654c12b07652870a97685

export default router;
