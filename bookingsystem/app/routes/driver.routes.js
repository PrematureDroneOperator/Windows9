import express from "express";
import { registerDriver, loginDriver, getDriverProfile, onboardDriver } from "../controllers/driver.controller.js";
import { verifyDriver } from "../middleware/auth.middleware.js";

const router = express.Router();

// POST /api/drivers/register
router.post("/register", registerDriver);

// POST /api/drivers/login
router.post("/login", loginDriver);

// GET /api/drivers/profile (Protected Route)
router.get("/profile", verifyDriver, getDriverProfile);

//POST /api/drivers/onboard (Protected Route)
router.post("/onboard",verifyDriver,onboardDriver)

export default router;
