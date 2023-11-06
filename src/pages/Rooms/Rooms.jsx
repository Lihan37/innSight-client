import React, { useEffect, useState } from 'react';
import NavBar from '../../shared/NavBar/NavBar';
import Room from './Room';

const Rooms = () => {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch('rooms.json')
            .then(res => res.json())
            .then(data =>
                setRooms(data))
    }, [])

    return (
        <div className='mt-10' >
            <div className='px-20 w-3/4 mx-auto'>
                <h1 className="text-4xl font-bold mb-4 text-center text-yellow-200">Discover Our Luxurious Rooms</h1>
                <p className="text-lg text-center text-blue-300 mb-8">
                    Experience comfort and elegance in our carefully designed rooms. Whether you're looking for a cozy single room or a spacious ocean-view suite, we have the perfect accommodations to make your stay memorable. Explore our room offerings below and start planning your dream getaway.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-5 mb-10 mx-auto'>
                {
                    rooms.map(room => <Room
                        key={room.id}
                        room={room}
                    ></Room>)
                }
            </div>
        </div>
    );
};

export default Rooms;