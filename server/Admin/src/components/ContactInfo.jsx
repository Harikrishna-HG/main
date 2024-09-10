import React, { useEffect, useState } from 'react';

const AdminPanel = () => {
  const [bus, setbus] = useState([]);
  const [contactData, setContactData] = useState([]); // State to hold contact data
  const [loading, setLoading] = useState(true); 
  const [busData, setBusData] = useState({ busnumber: '', bustype: '', category: '', price: '', contact: '', seats: '' });

  useEffect(() => {
    fetchbus();
    fetchContactData(); // Fetch contact data on component mount
  }, []);

  // Fetch bus data function
  const fetchbus = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/bus');
      if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`);

      const data = await response.json();
      setbus(data);
    } catch (error) {
      console.error('Error fetching bus:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch contact data function
  const fetchContactData = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/form/contact');
      if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`);

      const data = await response.json();
      setContactData(data);
    } catch (error) {
      console.error('Error fetching contact data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setBusData({ ...busData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const options = {
        method: busData._id ? 'GET' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(busData),
      };
      const url = busData._id
        ? `http://localhost:5000/api/bus/${busData._id}`
        : 'http://localhost:5000/api/bus';

      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`);

      fetchbus();
      setBusData({ busnumber: '', bustype: '', category: '', price: '', contact: '', seats: '' });
    } catch (error) {
      console.error('Error submitting bus data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/bus/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`);

      fetchbus();
    } catch (error) {
      console.error('Error deleting bus:', error);
    }
  };

  const handleEdit = (id) => {
    const busToEdit = bus.find((bus) => bus._id === id);
    setBusData(busToEdit);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-6 text-center text-purple-700">Admin Panel</h1>

      {loading ? (
        <p>Loading data...</p>
      ) : (
        <>
          {/* Form and Bus Data Table */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow-md">
            {/* Form fields for Bus Data */}
          </form>

          <div className="mt-8">
            <h2 className="text-xl mb-4 text-purple-700">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactData.map((contact) => (
                <div key={contact._id} className="bg-white p-4 rounded shadow-md">
                  <h3 className="text-lg font-semibold text-purple-700">{contact.username}</h3>
                  <p>Email: {contact.email}</p>
                  <p>Message: {contact.message}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminPanel;
