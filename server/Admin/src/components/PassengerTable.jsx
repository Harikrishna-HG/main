import React from 'react';

const PassengerTable = () => {
  // Sample data
  const passengers = [
    { id: 1, name: 'John Doe', phone: '123-456-7890', seats: 2, status: 'Booked' },
    { id: 2, name: 'Jane Smith', phone: '234-567-8901', seats: 1, status: 'Pending' },
    { id: 3, name: 'Alice Johnson', phone: '345-678-9012', seats: 3, status: 'Cancelled' },
    { id: 4, name: 'Robert Brown', phone: '456-789-0123', seats: 4, status: 'Booked' },
  ];

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200 text-left text-xs md:text-sm text-gray-600">ID</th>
            <th className="py-2 px-4 bg-gray-200 text-left text-xs md:text-sm text-gray-600">Name</th>
            <th className="py-2 px-4 bg-gray-200 text-left text-xs md:text-sm text-gray-600">Phone Number</th>
          
          </tr>
        </thead>
        <tbody>
          {passengers.map((passenger) => (
            <tr key={passenger.id} className="border-b hover:bg-gray-100">
              <td className="py-2 px-4 text-xs md:text-sm text-gray-700">{passenger.id}</td>
              <td className="py-2 px-4 text-xs md:text-sm text-gray-700">{passenger.name}</td>
              <td className="py-2 px-4 text-xs md:text-sm text-gray-700">{passenger.phone}</td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PassengerTable;

