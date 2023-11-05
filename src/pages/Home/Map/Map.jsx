import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Map = () => {
    const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

    useEffect(() => {
        
        AOS.init();

        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            });
        }
    }, []);

    return (
        <div className='mb-10'>
            <div>
                <h2 className='text-4xl text-white font-semibold text-center'>This is our location</h2>
                <p className='text-xl text-white font-medium text-center mb-5'>*Zoom-in or zoom-out to locate our exact location and be comfortable to find us*</p>
            </div>
            <MapContainer
                center={[location.latitude, location.longitude]}
                zoom={13}
                style={{ height: '400px', width: '100%' }}
                data-aos="fade-up" 
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[location.latitude, location.longitude]}>
                    <Popup>Your Location</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;