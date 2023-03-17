const Trip = require('../models/Trip');

// Create a new trip
const createTrip = async (req, res) => {
    try {
        const trip = new Trip(req.body);
        await trip.save();
        res.status(201).json(trip);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
    };

    // Get all trips
    const getAllTrips = async (req, res) => {
    try {
        const trips = await Trip.find({});
        res.status(200).json(trips);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    };

    // Get a single trip by ID
    const getTripById = async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.id);
        if (!trip) {
        return res.status(404).json({ error: 'Trip not found' });
        }
        res.status(200).json(trip);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    };

    // Update a trip by ID
    const updateTripById = async (req, res) => {
    try {
        const trip = await Trip.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        });
        if (!trip) {
        return res.status(404).json({ error: 'Trip not found' });
        }
        res.status(200).json(trip);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
    };

    // Delete a trip by ID
    const deleteTripById = async (req, res) => {
    try {
        const trip = await Trip.findByIdAndDelete(req.params.id);
        if (!trip) {
        return res.status(404).json({ error: 'Trip not found' });
        }
        res.status(200).json({ message: 'Trip deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    };

    module.exports = {
    createTrip,
    getAllTrips,
    getTripById,
    updateTripById,
    deleteTripById,
    };