const express = require('express')

const {registerView, 
    loginView, 
    registerUser, 
    loginUser,
    homeView
} = require('../controllers/loginController')

const { protectRoute } = require("../auth/protect");
const { dashboardView } = require("../controllers/dashboardController");
const router = express.Router()

router.get('/', homeView)
router.get('/logout', loginView)
router.get('/register', registerView)
router.get('/login', loginView)

//dashboard
router.get("/dashboard", protectRoute, dashboardView);

router.post('/register', registerUser)
router.post('/login', loginUser)

module.exports = router;