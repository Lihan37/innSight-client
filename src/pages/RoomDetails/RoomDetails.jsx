import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../providers/AuthProvider";

const RoomDetails = () => {
    const roomDetail = useLoaderData();
    const {
        _id,
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

    const { user } = useContext(AuthContext);

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleBookNow = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;

        const booking = {
            customerName: name,
            email,
            date,
            service: _id,
            price: price
        }

        console.log(booking);
    };

    return (
        <div className="mx-auto p-6 sm:p-12 lg:p-16 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-500 mb-4">{roomType}</h2>
            <div className="mb-4">
                <img src={image} alt={roomType} className="w-full h-auto rounded-lg" />
            </div>
            <p className="text-yellow-200 text-2xl mb-4">{description}</p>
            <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
                <p className="text-blue-700 text-xl mb-2 sm:mb-0">Price per Night: <span className="text-green-500">${pricePerNight}</span></p>
                <p className="text-green-500 text-xl">Availability: {availability} rooms</p>
            </div>
            <p className="text-yellow-200 text-xl mb-4">Room Size: {roomSize}</p>
            <div className="mb-4 sm:flex sm:mt-5">
                <div className="w-full sm:w-3/4">
                    <h3 className="text-2xl font-bold text-blue-500 mb-2">Room Images</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {images.map((img, index) => (
                            <img key={index} src={img} alt={`Room ${index}`} className="w-full h-auto rounded-lg" />
                        ))}
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full sm:w-1/3 max-w-sm sm:max-w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleBookNow} className="card-body">
                        <h2 className="text-center text-2xl font-bold">Book here!</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                defaultValue={user?.displayName}
                                name="name"
                                placeholder="Name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input
                                type="text"
                                defaultValue={price}
                                name="price"
                                placeholder="Due Amount"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                defaultValue={user?.email}
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <DatePicker
                                name="date"
                                selected={selectedDate}
                                onChange={handleDateChange}
                                dateFormat="MM/dd/yyyy"
                                placeholderText="Select a date"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn bg-blue-600 text-white" value="Book Now" />
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
