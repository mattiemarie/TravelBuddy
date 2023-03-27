const express = require('express');
const {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
} = require('../../controllers/userController');

const router = express.Router();

// Routes for /api/users
router.route('/').get(getAllUsers)

// Route to create new users
router.route('/new').post(createUser);

// Routes for /api/user/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;