import React from 'react';

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, setActiveTab }) => {
  return (
    <div
      className={`flex flex-col h-full p-4 bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-lg transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}
    >
      {/* Close button for mobile */}
      <button
        onClick={() => setIsSidebarOpen(false)}
        className="text-2xl self-end mb-4 md:hidden"
      >
        ✕
      </button>
      <h1 className="text-3xl font-bold mb-4">
        YataYat
      </h1>
      <nav className="flex-grow">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              onClick={() => setActiveTab('dashboard')}
              className="block py-2 px-4 hover:bg-blue-600 rounded"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setActiveTab('passengers')}
              className="block py-2 px-4 hover:bg-blue-600 rounded"
            >
              Passengers
            </a>
          </li>
          <li>
            <a href="#"
              onClick={() => setActiveTab('booking')}
              className="block py-2 px-4 hover:bg-blue-600 rounded">
              Booking
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-blue-600 rounded">
              Routes
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-blue-600 rounded">
              Buses
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-blue-600 rounded">
              Seats
            </a>
          </li>
          <li>
            <a href="#"   onClick={() => setActiveTab('addbuses')} className="block py-2 px-4 hover:bg-blue-600 rounded">
              Add Buses
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

