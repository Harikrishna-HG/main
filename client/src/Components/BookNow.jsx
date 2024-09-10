import React, { useState } from 'react';
import { toast } from 'react-toastify';


const BookNow = () => {
  const [location, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [tripType, setTripType] = useState('one-way');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedBus, setSelectedBus] = useState(null); // For tracking selected bus for payment
  const [showPaymentModal, setShowPaymentModal] = useState(false); // Payment modal state
  const [verificationCode, setVerificationCode] = useState(''); // Verification code input
  const [paymentSuccess, setPaymentSuccess] = useState(false); // Payment success state

  const dummyBuses = [
    {
      busNumber: 'MH12AB1234',
      busType: 'AC',
      category: 'Deluxe',
      price: '500',
      contact: '9876543210',
      availableSeats: 20,
    },
    {
      busNumber: 'MH12AB5678',
      busType: 'Non-AC',
      category: 'Economy',
      price: '300',
      contact: '9876543210',
      availableSeats: 15,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchResults(dummyBuses);
  };

  const handleBookNow = (bus) => {
    setSelectedBus(bus); // Set selected bus for booking
    setShowPaymentModal(true); // Show payment modal
  };

  const handlePaymentSubmit = () => {
    if (verificationCode === '8848') {
      setPaymentSuccess(true); // Set payment success state
      setShowPaymentModal(false); // Close payment modal
      toast.success('Payment Successful! Your booking is confirmed.');
    } else {
      toast.error('Invalid verification code. Please try again.');
    }
  };

  return (
    <div className="flex flex-wrap pt-24 mb-8 px-2">
      {/* Booking Form */}
      <div className="w-full lg:w-1/2 p-5 bg-white rounded shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-purple-700">From:</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setFromLocation(e.target.value)}
              className="w-full text-purple-700 mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Enter starting location"
              required
            />
          </div>
          <div>
            <label className="block text-purple-700">To:</label>
            <input
              type="text"
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value)}
              className="w-full text-purple-700 mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Enter destination location"
              required
            />
          </div>
          <div>
            <label className="block text-purple-700">Date:</label>
            <input
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              className="w-full text-purple-700 mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div className="flex items-center space-x-4">
            <div>
              <input
                type="radio"
                id="one-way"
                name="tripType"
                value="one-way"
                checked={tripType === 'one-way'}
                onChange={(e) => setTripType(e.target.value)}
                className="mr-1"
              />
              <label htmlFor="one-way" className="text-purple-700">One-way</label>
            </div>
            <div>
              <input
                type="radio"
                id="two-way"
                name="tripType"
                value="round-trip"
                checked={tripType === 'round-trip'}
                onChange={(e) => setTripType(e.target.value)}
                className="mr-1"
              />
              <label htmlFor="two-way" className="text-purple-700">Round-trip</label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Search
          </button>
        </form>
      </div>

      {/* Search Results */}
      <div className="w-full lg:w-1/2 p-5">
        {searchResults.length > 0 ? (
          <div className="space-y-5">
            {searchResults.map((bus, index) => (
              <BusCard key={index} bus={bus} onBookNow={handleBookNow} />
            ))}
          </div>
        ) : (
          <p className="text-white">No search results yet. Fill out the form and click "Search" to see available buses.</p>
        )}
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold text-purple-700 mb-4">Payment Options</h3>
            <p className="mb-2 text-purple-700">Select a payment method:</p>
            <select className="w-full p-2 border rounded mb-4 text-purple-700">
              <option value="esewa">eSewa</option>
              <option value="phonepe">PhonePe</option>
              <option value="bank">Other Banks</option>
            </select>
            <p className="mb-2 text-purple-700">Enter verification code:</p>
            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="w-full p-2 border rounded mb-4 text-purple-700"
              placeholder="Enter verification code"
            />
            <button
              onClick={handlePaymentSubmit}
              className="w-full p-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
              Submit Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const BusCard = ({ bus, onBookNow }) => (
  <div className="p-4 border rounded shadow-sm bg-white">
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold text-purple-700">Bus Number: {bus.busNumber}</h3>
        <p className="text-purple-700 ">Type: {bus.busType}</p>
        <p className="text-purple-700">Category: {bus.category}</p>
        <p className="text-purple-700">Price: {bus.price}</p>
        <p className="text-purple-700">Contact: {bus.contact}</p>
        <p className="text-purple-700">Available Seats: {bus.availableSeats}</p>
      </div>
      <button
        onClick={() => onBookNow(bus)}
        className="px-4 py-2 bg-purple-700 text-white rounded hover:border hover:bg-white hover:text-purple-700"
      >
        Book Now
      </button>
    </div>
  </div>
);

export default BookNow;
