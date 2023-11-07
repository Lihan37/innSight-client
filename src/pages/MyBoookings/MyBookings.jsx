import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';
import Swal from 'sweetalert2'; 

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
    }, [url]);

    const handleDelete = (id) => {
        
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        
                        Swal.fire(
                            'Deleted!',
                            'Your booking has been deleted.',
                            'success'
                        ).then(() => {
                            
                            const remaining = bookings.filter(booking => booking._id !== id);
                            setBookings(remaining);
                        });
                    }
                });
            }
        });
    };
    

    return (
        <div>
            <h2 className='text-white text-5xl'>My Bookings {bookings.length}</h2>
            <div className="overflow-x-auto m-10">
                <table className="table bg-gradient-to-r from-gray-500 to-indigo-600">
                    {/* head */}
                    <thead>
                        <tr className='text-lg text-yellow-400'>
                            <th>
                                Cancel
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Room Type</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map(booking => (
                            <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;
