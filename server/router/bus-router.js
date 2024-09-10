const express = require('express');
const router = express.Router();
const busController = require('../controller/bus-controller');

// Handle GET requests to fetch all buses
router.get('/', busController.getAllBuses);

// Handle POST requests to add a new bus
router.post('/', busController.addBus);

module.exports = router;
