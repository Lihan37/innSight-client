import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const MyBookings = () => {

    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState();

    const url = `http://localhost:5000/bookings?email=${user.email}`;

    useEffect(()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
        })
    }, [])

    return (
        <div>
            <h2>My Bookings</h2>
        </div>
    );
};

export default MyBookings;