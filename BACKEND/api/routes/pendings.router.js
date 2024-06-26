const router = require("express").Router();
const {checkAuth} = require("../middlewares/middlewares");

const {
   getMyPendings
} = require('../controllers/pending.controller')

router.get('/me',
  checkAuth,
  getMyPendings)  

module.exports = router