import express from "express";
import { getProducts } from "../controllersExpressjs/client.js";

const router = express.Router();
router.get("/products", getProducts);

export default router;
