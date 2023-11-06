import React, { useEffect, useState } from 'react';
import NavBar from '../../shared/NavBar/NavBar';

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
            <div className='px-20'>
                <h1 className="text-4xl font-bold mb-4 text-center text-yellow-200">Discover Our Luxurious Rooms</h1>
                <p className="text-lg text-center text-blue-300 mb-8">
                    Experience comfort and elegance in our carefully designed rooms. Whether you're looking for a cozy single room or a spacious ocean-view suite, we have the perfect accommodations to make your stay memorable. Explore our room offerings below and start planning your dream getaway.
                </p>


            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rooms;