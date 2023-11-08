
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Room = ({ room }) => {
  const { _id, id, roomType, image, price } = room;

  return (
    <div className="mb-5">
      <div className="card bg-blue-950 card-compact p-5 h-96 w-96 shadow-2xl shadow-orange-950">
        <figure>
          <img className="h-full rounded-sm w-full" src={image} alt="Room" />
        </figure>
        <div className="card-body h-1/2">
          <h2 className="card-title text-yellow-200 font-medium text-xl">{roomType}</h2>
          <p className="text-blue-300 text-lg">Price: ${price}</p>
          <p className="text-blue-300 text-lg">Total Reviews:</p>
          <div className="card-actions justify-end">
            <Link to={`/roomDetails/${_id}`}>
              <button className="btn bg-purple-900 text-yellow-200 hover:text-gray-600">
                Show Details <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
