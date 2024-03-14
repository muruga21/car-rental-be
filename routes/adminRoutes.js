const express = require("express");
const {signup, uploadCars} = require('../controllers/AdminController');
const router = express.Router();

router.route('/signup').post(signup)
router.route('/upload').post(uploadCars)

module.exports = router