import React, { useState } from 'react';
import Sidebar from './Sidebar';
import PassengerTable from './PassengerTable';
import BookingTable from './BookingTable';
import BusCard  from './BusCard';

const Dashboard = ({ img }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard'); // To track active tab

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          setActiveTab={setActiveTab}
        />
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <header className="flex items-center justify-between p-4 shadow-md bg-white">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-2xl md:hidden"
          >
            ☰
          </button>
          <h1 className="md:text-2xl text-lg font-semibold">Welcome, Admin</h1>
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Admin Photo */}
            <img
              src={img}
              alt="Admin"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white"
            />
            {/* Sign Out Button */}
            <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm">
              Sign Out
            </button>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          {/* Conditional Rendering based on activeTab */}
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-3">
              <div className="p-4 bg-white shadow-md rounded-lg border-l-4 border-green-500">
                <h2 className="font-semibold text-gray-700 mb-1 md:mb-2">Booking</h2>
                <p className="text-gray-500 text-sm md:text-base">Total Booking: 0</p>
                <a href="#" className="text-green-500 hover:underline text-sm md:text-base">
                  View More →
                </a>
              </div>
              <div className="p-4 bg-white shadow-md rounded-lg border-l-4 border-blue-500">
                <h2 className="font-semibold text-gray-700 mb-1 md:mb-2">Buses</h2>
                <p className="text-gray-500 text-sm md:text-base">Total Buses: 0</p>
                <a href="#" className="text-blue-500 hover:underline text-sm md:text-base">
                  View More →
                </a>
              </div>
              <div className="p-4 bg-white shadow-md rounded-lg border-l-4 border-purple-500">
                <h2 className="font-semibold text-gray-700 mb-1 md:mb-2">Routes</h2>
                <p className="text-gray-500 text-sm md:text-base">Total Routes: 0</p>
                <a href="#" className="text-purple-500 hover:underline text-sm md:text-base">
                  View More →
                </a>
              </div>
              <div className="p-4 bg-white shadow-md rounded-lg border-l-4 border-purple-500">
                <h2 className="font-semibold text-gray-700 mb-1 md:mb-2">Passengers</h2>
                <p className="text-gray-500 text-sm md:text-base">Total Passengers: 0</p>
                <a href="#" className="text-purple-500 hover:underline text-sm md:text-base">
                  View More →
                </a>
              </div>
              <div className="p-4 bg-white shadow-md rounded-lg border-l-4 border-green-500">
                <h2 className="font-semibold text-gray-700 mb-1 md:mb-2">Contact Information</h2>
                <p className="text-gray-500 text-sm md:text-base">Total contact: 0</p>
                <a href="#" className="text-blue-500 hover:underline text-sm md:text-base">
                  View More →
                </a>
              </div>
              <div className="p-4 bg-white shadow-md rounded-lg border-l-4 border-blue-500">
                <h2 className="font-semibold text-gray-700 mb-1 md:mb-2">User Information</h2>
                <p className="text-gray-500 text-sm md:text-base">Total User: 0</p>
                <a href="#" className="text-blue-500 hover:underline text-sm md:text-base">
                  View More →
                </a>
              </div>
            </div>
          )}

          {activeTab === 'passengers' && <PassengerTable />}
          {activeTab === 'booking' && <BookingTable />}
          {activeTab === 'addbuses' && <BusCard />}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

