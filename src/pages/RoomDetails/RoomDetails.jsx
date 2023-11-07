import { useLoaderData } from "react-router-dom";


const RoomDetails = () => {

    const roomDetail =useLoaderData();
    const {_id, roomType} = roomDetail;

    return (
        <div>
            <h2 className="text-white">Room Type: {roomType}</h2>
        </div>
    );
};

export default RoomDetails;