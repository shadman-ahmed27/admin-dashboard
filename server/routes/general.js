import express from "express";
import { getUser, getDashboardStats } from "../controllersExpressjs/general.js";

const router = express.Router();

router.get("/User/:id", getUser);
router.get("/dashboard", getDashboardStats);

export default router;
