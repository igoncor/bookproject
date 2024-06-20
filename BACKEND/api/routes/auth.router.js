const router = require("express").Router();
const {
  signup,
  login,
  verifyToken
} = require("../controllers/auth.controller")
router.post('/signup', signup)
router.post('/login', login)
router.post('/verify-token', verifyToken)

module.exports = router;
