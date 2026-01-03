import express from "express";
import { protect, allowRole } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get(
  "/",
  protect,
  allowRole("HR"),
  (req, res) => {
    res.json({ message: "Employee API working ✅" });
  }
);

export default router;
