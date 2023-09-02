const express = require("express")
const router = express.Router()
const mainController = require("../controllers/main")

router.get("/", mainController.getIndex)
router.get("/about", mainController.getAboutPage)
router.get("/booking", mainController.getBookingPage)
router.get("/shop", mainController.getShopPage)

module.exports = router
