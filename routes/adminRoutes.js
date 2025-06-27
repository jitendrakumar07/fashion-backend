import express from "express";
import { requireAuth, requireAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/dashboard", requireAuth, requireAdmin, (req, res) => {
  res.status(200).json({ message: "Welcome to admin dashboard" });
});

export default router;
