const express = require('express');
const {
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
} = require('../controllers/userController');

const router = express.Router();

// Routes for /api/users
router.route('/').get(getAllUsers).post(createUser);

// Routes for /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById);

module.exports = router;
