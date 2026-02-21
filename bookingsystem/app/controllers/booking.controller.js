import Booking from "../models/booking.model.js";

// User requests a ride (creates pending booking)
export const requestRide = async (req, res) => {
    try {
        const { pickupLocation, dropLocation, pickupDate, pickupTime } = req.body;
        const userId = req.user.id; // From verifySupabaseUser middleware

        if (!pickupLocation || !dropLocation) {
            return res.status(400).json({ message: "Pickup and drop locations are required" });
        }

        const orderNumber = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

        const booking = new Booking({
            orderNumber,
            userId,
            pickupLocation: JSON.stringify(pickupLocation),
            dropLocation: JSON.stringify(dropLocation),
            pickupDate: pickupDate ? new Date(pickupDate) : new Date(),
            pickupTime: pickupTime ? new Date(pickupTime) : new Date(),
            status: "pending"
        });

        await booking.save();

        res.status(201).json({
            message: "Ride requested successfully. Waiting for a driver.",
            booking
        });
    } catch (error) {
        console.error("Error requesting ride:", error);
        res.status(500).json({ message: "Server error requesting ride" });
    }
};

// Driver views all pending rides
export const getPendingRides = async (req, res) => {
    try {
        // Find all bookings with status "pending"
        const pendingRides = await Booking.find({ status: "pending" });

        res.json(pendingRides);
    } catch (error) {
        console.error("Error fetching pending rides:", error);
        res.status(500).json({ message: "Server error fetching rides" });
    }
};

// Driver accepts a ride
export const acceptRide = async (req, res) => {
    try {
        const { bookingId } = req.params;
        const driverId = req.user.id; // From verifyDriver middleware

        const booking = await Booking.findById(bookingId);

        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        if (booking.status !== "pending") {
            return res.status(400).json({ message: "This ride is no longer available" });
        }

        // Update booking with driver and new status
        booking.driverId = driverId;
        booking.status = "accepted";

        await booking.save();

        res.json({
            message: "Ride accepted successfully",
            booking
        });
    } catch (error) {
        console.error("Error accepting ride:", error);
        res.status(500).json({ message: "Server error accepting ride" });
    }
};

// Driver updates ride status (e.g., in_progress, completed)
export const updateRideStatus = async (req, res) => {
    try {
        const { bookingId } = req.params;
        const { status } = req.body;
        const driverId = req.user.id;

        const validStatuses = ["accepted", "in_progress", "completed", "cancelled"];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ message: "Invalid status update" });
        }

        const booking = await Booking.findById(bookingId);

        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        // Ensure this driver owns the ride
        if (booking.driverId.toString() !== driverId) {
            return res.status(403).json({ message: "You are not authorized to update this ride" });
        }

        booking.status = status;
        await booking.save();

        res.json({
            message: `Ride status updated to ${status}`,
            booking
        });
    } catch (error) {
        console.error("Error updating ride status:", error);
        res.status(500).json({ message: "Server error updating status" });
    }
};
