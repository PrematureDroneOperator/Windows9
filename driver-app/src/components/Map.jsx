import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet's default icon path issues with webpack/vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Component to recenter map when location changes
function MapRecenter({ location }) {
    const map = useMap();
    useEffect(() => {
        if (location) {
            map.flyTo([location.lat, location.lng], map.getZoom());
        }
    }, [location, map]);
    return null;
}

export default function Map({ location }) {
    const defaultCenter = [40.7128, -74.0060]; // NY default
    const position = location ? [location.lat, location.lng] : defaultCenter;

    return (
        <div className="w-full h-full z-0 relative">
            <MapContainer
                center={position}
                zoom={15}
                scrollWheelZoom={true}
                className="w-full h-full"
                zoomControl={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />
                {location && (
                    <Marker position={position}>
                        <Popup>
                            You are here.
                        </Popup>
                    </Marker>
                )}
                <MapRecenter location={location} />
            </MapContainer>
        </div>
    );
}
