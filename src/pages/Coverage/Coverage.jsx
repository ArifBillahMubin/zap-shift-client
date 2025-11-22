import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';

const position = [23.8103, 90.4125]
const Coverage = () => {
    const warehouses = useLoaderData();
    // console.log(warehouses);
    return (
        <div>
            <h1>All map</h1>
            <div>

            </div>
            <div className='border h-[800px]'>
                <MapContainer 
                center={position} 
                zoom={8} 
                scrollWheelZoom={false}
                className='h-[800px]'>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        warehouses.map((center,index) => 
                            <Marker key={index} position={[center.latitude, center.longitude]}>
                                <Popup>
                                    <strong>{center.city}</strong> <br />
                                    Services Aria : {center.covered_area.join(', ')}
                                </Popup>
                            </Marker>
                        )
                    }
                </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;