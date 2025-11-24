import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';
import { FiSearch } from 'react-icons/fi';

const position = [23.8103, 90.4125]
const Coverage = () => {
    const warehouses = useLoaderData();
    // console.log(warehouses);

    const mapRef = useRef(null);

    const handleSearch = (e) => {
        e.preventDefault();
        const location = e.target.location.value;
        const district = warehouses.find(c => c.district.toLowerCase().includes(location.toLowerCase()));

        if(district){
            const coord = [district.latitude,district.longitude];
            console.log(district,coord);
            //go to the location 
            mapRef.current.flyTo(coord,15)
        }
    }
    return (
        <div className='bg-base-100 rounded-2xl p-5 md:10 lg:p-20 my-12 md:my-16 space-y-4 md:space-y-8'>
            <h1 className='font-bold text-3xl md:text-6xl text-secondary'>We are available in 64 districts</h1>

            <div>
                <form onSubmit={handleSearch} className="join w-full max-w-xl">

                    {/* Input + Icon */}
                    <div className="relative w-full">
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                        <input
                            name='location'
                            type="text"
                            placeholder="Search here"
                            className="input w-full bg-[#F0F3F7] pl-10 rounded-l-full focus:outline-none"
                        />
                    </div>

                    {/* Search Button */}
                    <button
                        type="submit"
                        className="btn bg-primary text-black font-semibold rounded-r-full px-8 border-none"
                    >
                        Search
                    </button>
                </form>
            </div>

            <div className='border h-[500px]'>
                <MapContainer
                    center={position}
                    zoom={7}
                    scrollWheelZoom={false}
                    className='h-[500px]'
                    ref={mapRef}
                    >

                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        warehouses.map((center, index) =>
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