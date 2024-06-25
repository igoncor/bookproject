const router = require("express").Router();
const {
  signup,
  login
} = require("../controllers/auth.controller")
router.post('/sign-up', signup)
router.post('/sign-in', login)


module.exports = router;
