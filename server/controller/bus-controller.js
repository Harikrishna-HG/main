const Bus = require('../models/bus-model');

// Function to handle GET requests
const getAllBuses = async (req, res) => {
  try {
    const buses = await Bus.find({}); // Fetch all documents from the "bus" collection
    res.json(buses); // Return the data as JSON
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Function to handle POST requests
const addBus = async (req, res) => {
  try {
    const newBus = new Bus(req.body); // Create a new Bus document with request body
    const savedBus = await newBus.save(); // Save the document to the database
    res.status(201).json(savedBus); // Respond with the saved document
  } catch (error) {
    res.status(400).json({ error: 'Bad Request' }); // Handle errors
  }
};

module.exports = {
  getAllBuses,
  addBus
};
