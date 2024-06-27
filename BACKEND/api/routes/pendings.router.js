const router = require("express").Router();
const {checkAuth} = require("../middlewares/middlewares");

const {
   getMyPendings,
   deletePending,
   createPending,
   updatePending
} = require('../controllers/pending.controller')

router.get('/me',
  checkAuth,
  getMyPendings)  

  router.delete('/:id',
    checkAuth,
    deletePending)

router.post('/',
  checkAuth, 
  createPending),
  
  router.put('/:id',
  checkAuth,
  updatePending)


module.exports = router