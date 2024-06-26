const router = require("express").Router();
const {checkAuth} = require("../middlewares/middlewares");

const {
   getMyPendings,
   deletePending
} = require('../controllers/pending.controller')

router.get('/me',
  checkAuth,
  getMyPendings)  

  router.delete('/:id',
    checkAuth,
    deletePending)

module.exports = router