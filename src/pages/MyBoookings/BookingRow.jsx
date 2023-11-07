import React from 'react';

const BookingRow = ({ booking }) => {

    const {customerName, email, date, service, price, image} = booking;

    return (
        <tr className='text-white text-lg'>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
               
                    <div className="avatar">
                        <div className="rounded w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    
                
            </td>
            <td>
                {customerName}
                
            </td>
            <td>{email}</td>
            <td>{service}</td>
            <td>${price}</td>
            <td>{date}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default BookingRow;
