import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RoomDetails = () => {
    const roomDetail = useLoaderData();
    const {
        roomType,
        image,
        price,
        description,
        pricePerNight,
        roomSize,
        availability,
        images,
        specialOffers,
        reviews,
    } = roomDetail;

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleBookNow = () => {
        // Add your logic to handle the booking using the selectedDate.
    };

    return (
        <div className="mx-auto p-12 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-500 mb-4">{roomType}</h2>
            <div className="mb-4">
                <img src={image} alt={roomType} className="w-full h-auto rounded-lg" />
            </div>
            <p className="text-yellow-200 text-2xl mb-4">{description}</p>
            <div className="flex items-center justify-between mb-4">
                <p className="text-blue-700 text-xl">Price per Night: <span className="text-green-500">${pricePerNight}</span></p>
                <p className="text-green-500 text-xl">Availability: {availability} rooms</p>
            </div>
            <p className="text-yellow-200 text-xl mb-4">Room Size: {roomSize}</p>
            <div className="mb-4 flex  mt-5">
                <div className="w-3/4 " >
                    <h3 className="text-2xl font-bold text-blue-500 mb-2">Room Images</h3>
                    <div className="grid grid-cols-2 gap-2 ">
                        {images.map((img, index) => (
                            <img key={index} src={img} alt={`Room ${index}`} className="w-full h-auto rounded-lg" />
                        ))}
                    </div>
                </div>
                <div className="card flex-shrink-0 w-1/3  max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <h2 className="text-center text-2xl font-bold">Book here!</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <DatePicker name="date"
                                selected={selectedDate}
                                onChange={handleDateChange}
                                dateFormat="MM/dd/yyyy" 
                                placeholderText="Select a date"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <input onClick={handleBookNow} type="submit" className="btn bg-blue-600 text-white" value="Book Now" />
                        </div>
                    </form>
                </div>
            </div>
            {specialOffers.length > 0 ? (
                <div className="mb-4">
                    <h3 className="text-2xl font-bold text-blue-500 mb-2">Special Offers</h3>
                    <ul className="list-disc list-inside">
                        {specialOffers.map((offer, index) => (
                            <li key={index} className="text-gray-600">
                                {offer}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p className="text-gray-600">No special offers available for this room.</p>
            )}
            {reviews.length > 0 ? (
                <div className="mb-4">
                    <h3 className="text-2xl font-bold text-blue-500 mb-2">Reviews</h3>
                    <ul className="space-y-2">
                        {reviews.map((review, index) => (
                            <li key={index} className="text-gray-600">
                                <p className="font-semibold">{review.user}</p>
                                <p>Rating: {review.rating}</p>
                                <p>{review.comment}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p className="text-gray-600">No reviews available for this room.</p>
            )}
        </div>
    );
};

export default RoomDetails;
