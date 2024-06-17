const router = require("express").Router();
const {checkAuth} = require("../middlewares/middlewares");

const {
  getAllContactInfo,
  createContactInfo
} = require("../controllers/contact.controller");

router.get("/",
  checkAuth,
  getAllContactInfo);
// router.get("/:id", getOneUser);
router.post("/", 
  checkAuth,
  createContactInfo);
// router.put("/:id", updateOneUser);
// router.delete("/:id", deleteOneUser);

module.exports = router;
