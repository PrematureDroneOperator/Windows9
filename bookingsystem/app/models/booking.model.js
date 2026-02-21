import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    orderNumber: {
        type: String,
        required: true,
        unique: true
    },
    driverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Driver"
    },
    userId: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    pickupLocation: {
        type: String,
        required: true
    },
    dropLocation: {
        type: String,
        required: true
    },
    pickupDate: {
        type: Date,
        required: true
    },
    pickupTime: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        default: "pending"
    }
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
