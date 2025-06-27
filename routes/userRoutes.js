import express from "express";
import { requireAuth } from "../middlewares/authMiddleware.js";

const router = express.Router();

// @route   GET /api/user/profile
// @access  Private
router.get("/profile", requireAuth, (req, res) => {
  res.status(200).json({
    message: "User profile fetched successfully",
    user: req.user,
  });
});

export default router;
