import mongoose from "mongoose";
import Driverlocation from "../models/driver.location.model.js";
import Driver from "../models/driver.model.js";

export default function setupSocketEvents(io) {
    io.on("connection", (socket) => {
        //check for the driver connection 
        console.log("New client connected: " + socket.id);
        //for checking the driver online or not
        socket.on("driverOnline", async (driverId) => {
            try {
                console.log(`Driver ${driverId} is online`);
                const driverLocationUpdate = new Driverlocation({
                    driver: driverId,
                    status: "available",
                    socketId: socket.id
                });
                await driverLocationUpdate.save();
                socket.join(`driver_${driverId}`);
            } catch (error) {
                console.error("Error updating driver location:", error);
            }

        });
        //if the drive is offline or disconnecting from the server
        socket.on("driveOffline", async (driverId) => {
            try {
                console.log(`Driver ${driverId} is offline`);
                await Driverlocation.findOneAndUpdate(
                    { driver: new mongoose.Types.ObjectId(driverId) },
                    {
                        status: "offline",
                        socketId: null
                    },
                    { new: true }
                );
                socket.leave(`driver_${driverId}`);
            } catch (error) {
                console.error("Error updating driver location:", error);
            }
        })
        //updatinging the driver location in the database
        socket.on("driverLocationUpdate", async (data) => {
            try {
                const { driverId, lat, lon } = data;

                // 1️⃣ Basic validation
                if (!driverId || typeof lat !== "number" || typeof lon !== "number") {
                    return socket.emit("error", { message: "Invalid location data" });
                }

                // 2️⃣ Update driver location
                const updatedDriver = await Driverlocation.findOneAndUpdate(
                    { driver: driverId },
                    {
                        $set: {
                            location: {
                                type: "Point",
                                coordinates: [lon, lat], // GeoJSON format
                            },
                            status: "available",
                            socketId: socket.id,
                            timestamp: new Date(),
                        },
                    },
                    { upsert: true, new: true }
                );

                console.log("Driver location updated:", updatedDriver._id);

            } catch (error) {
                console.error("Error updating driver location:", error);
            }
        });
        //socket on disconnecting
        socket.on("disconnect", async () => {
            try {
                console.log("Client disconnected: " + socket.id);
                await Driverlocation.findOneAndUpdate(
                    { socketId: socket.id },
                    {
                        status: "offline",
                        socketId: null
                    },
                    { new: true }
                );
            } catch (error) {
                console.error("Error updating driver location on disconnect:", error);
            }
        });
    });
}