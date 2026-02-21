import express from "express";
import { requestRide, getPendingRides, acceptRide, updateRideStatus } from "../controllers/booking.controller.js";
import { verifySupabaseUser, verifyDriver } from "../middleware/auth.middleware.js";

const router = express.Router();

// User Routes
// POST /api/bookings/request (Requires Supabase JWT)
router.post("/request", verifySupabaseUser, requestRide);

// Driver Routes
// GET /api/bookings/pending (Requires Driver JWT)
router.get("/pending", verifyDriver, getPendingRides);

// PUT /api/bookings/:bookingId/accept (Requires Driver JWT)
router.put("/:bookingId/accept", verifyDriver, acceptRide);

// PUT /api/bookings/:bookingId/status (Requires Driver JWT)
router.put("/:bookingId/status", verifyDriver, updateRideStatus);

export default router;
