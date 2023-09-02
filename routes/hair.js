const express = require("express")
const router = express.Router()
const hairController = require("../controllers/hair")

router.get("/permanent-hair-removal", hairController.permanentHairRemovalPage)
router.get("/platelet-rich-plasma-hair-loss", hairController.plateletRichPlasmaHairLossPage)
router.get("/super-hair-reduction", hairController.superHairReductionPage)

module.exports = router
