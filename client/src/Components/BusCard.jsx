import React, { useState, useEffect } from 'react';

const BusCard = () => {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/bus", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBuses(data);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchBuses();
  }, []);

  if (loading) return <p className="text-purple-700">Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex flex-wrap pt-24 mb-8 px-2">
      {buses.length > 0 ? (
        <div className="w-full  p-5">
          {buses.map((bus) => (
            <div key={bus._id} className="p-4 border rounded shadow-sm bg-white mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-purple-700">Bus Number: {bus.busnumber}</h3>
                  <p className='text-purple-700'>Type: {bus.bustype}</p>
                  <p className='text-purple-700'>Category: {bus.category}</p>
                  <p className='text-purple-700'>Price: {bus.price}</p>
                  <p className='text-purple-700'>Contact: {bus.contact}</p>
                  <p className='text-purple-700'>Available Seats: {bus.seats}</p>
                </div>
                <button className="px-4 py-2 bg-purple-700 text-white rounded hover:border hover:bg-white hover:text-purple-700">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-white">No buses available.</p>
      )}
    </div>
  );
};

export default BusCard;
