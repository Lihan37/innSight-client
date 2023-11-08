import  { useEffect, useState } from 'react';
import Room from './Room';
import { Helmet } from 'react-helmet';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [sortOrder, setSortOrder] = useState('default');

  useEffect(() => {
    fetch('https://innsight-server.vercel.app/rooms')
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);

  const handleSort = (order) => {
    if (order === 'default') {
      setSortOrder('default');
      return;
    }

    const sortedRooms = [...rooms];
    if (order === 'highToLow') {
      sortedRooms.sort((a, b) => b.price - a.price);
    } else if (order === 'lowToHigh') {
      sortedRooms.sort((a, b) => a.price - b.price);
    }
    setRooms(sortedRooms);
    setSortOrder(order);
  };

  return (
    <div className="mt-10">
      <Helmet>
        <title>Discover Luxurious Rooms - InnSight</title>
        
      </Helmet>
      <div className="px-20 w-3/4 mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-yellow-200">
          Discover Our Luxurious Rooms
        </h1>
        <p className="text-lg text-center text-blue-300 mb-8">
          Experience comfort and elegance in our carefully designed rooms. Whether you're looking for a cozy single room or a spacious ocean-view suite, we have the perfect accommodations to make your stay memorable. Explore our room offerings below and start planning your dream getaway.
        </p>
        <div className="flex justify-center space-x-4 mb-4">
          <select
            value={sortOrder}
            onChange={(e) => handleSort(e.target.value)}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
          >
            <option value="highToLow">Price High to Low</option>
            <option value="lowToHigh">Price Low to High</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-5 mb-10 mx-auto">
        {rooms.map((room) => (
          <Room key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
