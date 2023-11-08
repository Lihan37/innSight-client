import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    
      
      


    const url = `https://innsight-server.vercel.app/bookings?email=${user?.email}`;


//    const handleReviewClick =()=>{

//    } 

    
    useEffect(() => {

        axios.get(url, { withCredentials: true })
            .then(res => {
                setBookings(res.data);
            })
        // fetch(url)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setBookings(data);
        //     });
    }, [url]);

    const pageTitle = 'My Bookings';
    const pageDescription = 'View and manage your bookings';

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
                fetch(`https://innsight-server.vercel.app/bookings/${id}`, {
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

    const handleConfirm = id => {
        fetch(`https://innsight-server.vercel.app/bookings/${id}`)
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, update it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://innsight-server.vercel.app/bookings/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ status: 'confirm' })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            Swal.fire(
                                'Updated!',
                                'Your booking has been updated.',
                                'success'
                            ).then(() => {
                                const remaining = bookings.filter(booking => booking._id !== id);
                                const updated = bookings.find(booking => booking._id === id);
                                updated.status = 'confirm'
                                const newBookings = [updated, ...remaining];
                                setBookings(newBookings);
                            });
                        }
                    });
            }
        });
    };

    return (
        <div>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Helmet>
            <h2 className='text-yellow-200 italic mt-10 text-center text-4xl'>{pageTitle}</h2>
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
                                handleConfirm={handleConfirm}
                                // handleReview={handleReviewClick}
                            />
                        ))}

                    </tbody>
                </table>
                
            </div>
        </div>
    );
};

export default MyBookings; 
