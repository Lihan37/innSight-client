import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setBookings(data);
            });
    }, []);

    return (
        <div>
            <h2 className='text-white text-5xl'>My Bookings {bookings.length}</h2>

            <div className="overflow-x-auto m-10">
                <table className="table bg-gradient-to-r from-gray-500 to-indigo-600">
                    {/* head */}
                    <thead>
                        <tr className='text-lg text-yellow-400'>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Room Type</th>
                            <th>Price</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                            ></BookingRow>)
                        }



                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyBookings;
