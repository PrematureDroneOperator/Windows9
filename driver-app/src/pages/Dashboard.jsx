import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useSocket } from '../hooks/useSocket';
import { useLocation } from '../hooks/useLocation';
import Map from '../components/Map';
import StatusToggle from '../components/StatusToggle';
import RideRequestModal from '../components/RideRequestModal';
import RideDetails from '../components/RideDetails';
import { LogOut, User } from 'lucide-react';

export default function Dashboard() {
    const { user, logout } = useAuth();
    const socket = useSocket();
    const [status, setStatus] = useState('Offline'); // Offline, Available, On Trip
    const { location, error: locationError } = useLocation(true); // Always track locally to show on map

    const [incomingRequest, setIncomingRequest] = useState(null);
    const [currentRide, setCurrentRide] = useState(null);

    // Handle Socket Events
    useEffect(() => {
        if (!socket) return;

        const handleNewRequest = (rideData) => {
            // Only show if driver is available
            if (status === 'Available') {
                setIncomingRequest(rideData);
            }
        };

        const handleRideCancelled = (rideId) => {
            if (incomingRequest?.id === rideId) {
                setIncomingRequest(null);
            }
            if (currentRide?.id === rideId) {
                setCurrentRide(null);
                setStatus('Available');
                alert('Ride was cancelled by the user.');
            }
        };

        socket.on('newRideRequest', handleNewRequest);
        socket.on('rideCancelled', handleRideCancelled);

        return () => {
            socket.off('newRideRequest', handleNewRequest);
            socket.off('rideCancelled', handleRideCancelled);
        };
    }, [socket, status, incomingRequest, currentRide]);

    // Send Location Updates
    useEffect(() => {
        if (socket && location && status !== 'Offline') {
            console.log(location)
            // Throttle to every 3 seconds inside the component or server side, 
            // but watchPosition only triggers on change. 
            // Emitting on location change is usually fine, but let's implement a 3s interval if we strictly want that.
            socket.emit('driverLocationUpdate', {
                driverId: user?.id,
                lat: location.lat,
                lon: location.lng,
                status
            });
        }
    }, [location, socket, status, user]);

    const handleStatusChange = (newStatus) => {
        console.log(newStatus)
        setStatus(newStatus);
        if (socket) {
            if (newStatus === "offline") {
                socket.emit('driveOffline', { driverId: user?.id });
            }
            if (newStatus === "available") {
                socket.emit('driveAvailable', { driverId: user?.id });
            }

        }
    };

    const handleAcceptRide = () => {
        if (socket && incomingRequest) {
            socket.emit('acceptRide', { rideId: incomingRequest.id, driverId: user?.id });
            setCurrentRide(incomingRequest);
            setIncomingRequest(null);
            handleStatusChange('On Trip');
        }
    };

    const handleRejectRide = () => {
        setIncomingRequest(null);
    };

    const handleCompleteRide = () => {
        if (socket && currentRide) {
            socket.emit('completeRide', { rideId: currentRide.id });
        }
        setCurrentRide(null);
        handleStatusChange('Available');
    };

    return (
        <div className="h-screen w-full flex flex-col bg-dark-900 overflow-hidden">
            {/* Header */}
            <header className="bg-dark-800 border-b border-dark-700 p-4 flex justify-between items-center z-10 shadow-md">
                <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <User className="text-primary w-6 h-6" />
                    </div>
                    <div>
                        <h2 className="text-white font-semibold">{user?.name || 'Driver'}</h2>
                        <div className="flex items-center text-sm text-gray-400 space-x-2">
                            <span>{user?.email}</span>
                            <span>•</span>
                            <span className="flex items-center text-yellow-500">⭐ {user?.rating || '5.0'}</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center space-x-6">
                    <StatusToggle status={status} onChange={handleStatusChange} disabled={status === 'On Trip'} />
                    <button
                        onClick={logout}
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                        title="Wait, logout?"
                    >
                        <LogOut className="w-6 h-6" />
                    </button>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 relative flex flex-col md:flex-row">

                {/* Left Panel - Ride Details if On Trip */}
                {status === 'On Trip' && currentRide && (
                    <div className="w-full md:w-96 bg-dark-800 border-r border-dark-700 z-10 flex flex-col hide-scrollbar overflow-y-auto">
                        <RideDetails ride={currentRide} onComplete={handleCompleteRide} />
                    </div>
                )}

                {/* Map Area */}
                <div className="flex-1 relative z-0">
                    <Map location={location} />

                    {/* Overlay Status Badge */}
                    <div className="absolute top-4 right-4 z-[400]">
                        <div className={`px-4 py-2 rounded-full shadow-lg font-medium text-sm backdrop-blur-md border border-white/10
              ${status === 'Available' ? 'bg-success/20 text-success' :
                                status === 'On Trip' ? 'bg-primary/20 text-primary' :
                                    'bg-dark-700/80 text-gray-400'}`}>
                            Status: {status}
                        </div>
                    </div>

                    {locationError && (
                        <div className="absolute top-4 left-4 z-[400] bg-danger/90 text-white px-4 py-2 rounded-lg shadow-lg text-sm">
                            Location Error: {locationError}
                        </div>
                    )}
                </div>
            </main>

            {/* Ride Request Modal */}
            {incomingRequest && (
                <RideRequestModal
                    request={incomingRequest}
                    onAccept={handleAcceptRide}
                    onReject={handleRejectRide}
                />
            )}
        </div>
    );
}
