const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

// 1. Get all users
router.get('/users', userController.getAllUsers);

// 2. GET USER BY ID (ADD THIS LINE - This fixes the 404 error!)
router.get('/users/:id', userController.getUserById); 

// 3. Get user by course
router.get('/users/course/:course', userController.getUserByCourse);

// 4. Create new user
router.post('/users', userController.createUser);

// 5. Update user
router.put('/users', userController.updateUser);

// 6. Delete user
router.delete('/users', userController.deleteUser);

module.exports = router;