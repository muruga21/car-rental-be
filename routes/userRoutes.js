const express = require("express");
const { login, signup,displayCars,filterCars} = require("../controllers/userController");
const router = express.Router();

router.route('/login').get(login)
router.route('/signup').post(signup)
router.route('/display').get(displayCars)
router.route('/filter').get(filterCars)

module.exports = router;