const express = require("express")
const router = express.Router()
const bodyPagesController = require("../controllers/body")

router.get("/intimate-rejuvenation", bodyPagesController.intimateRejuvenationPage);
router.get("/lux-series-tattoo-removal", bodyPagesController.luxSeriesTattooRemovalPage)
router.get("/skin-rejuvention", bodyPagesController.skinRejuventionPage)
router.get("/skin-tightening", bodyPagesController.skinTighteningyPage)
router.get("/ultrasound-cavitation", bodyPagesController.ultrasoundCavitationPage)

module.exports = router
