const express = require('express');
const {
    createTrip,
    getAllTrips,
    getTripById,
    updateTripById,
    deleteTripById,
} = require('../../controllers/tripController');

const router = express.Router();

// Routes for /api/trips
router.route('/').get(getAllTrips).post(createTrip);

// Routes for /api/trips/:id
router
    .route('/:id')
    .get(getTripById)
    .put(updateTripById)
    .delete(deleteTripById);

module.exports = router;