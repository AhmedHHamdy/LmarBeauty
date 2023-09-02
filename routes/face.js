const express = require("express")
const router = express.Router()
const facialPagesController = require("../controllers/facial")

router.get("/carbon-facials", facialPagesController.carbonFacialsPage);
router.get("/plasma-skin-rejuvention", facialPagesController.plasmaSkinRejuventionPage)
router.get("/skin-rejuvention", facialPagesController.skinRejuventionPage)
router.get("/medical-grade-light-Therapy", facialPagesController.medicalGradeLightTherapyPage)
router.get("/collagen-induction-therapy", facialPagesController.collagenInductionTherapyPage)
router.get("/lumixa", facialPagesController.lumixaPage)
router.get("/hydrafacial", facialPagesController.hydraFacialPage)
router.get("/platelet-rich-plasma", facialPagesController.plateletRichPlasmaPage)
router.get("/dermal-facial-fillers", facialPagesController.dermalFacialFillersPage)

module.exports = router
