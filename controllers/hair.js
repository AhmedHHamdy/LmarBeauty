const path = require("path")

module.exports = {
  permanentHairRemovalPage: (req, res) => {
    const filePath = path.join(__dirname, "../public/hair/permanent-hair-removal.html")
    res.sendFile(filePath, (err) => {
      if (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
      }
    })
  },
  plateletRichPlasmaHairLossPage: (req, res) => {
    const filePath = path.join(__dirname, "../public/hair/platelet-rich-plasma-hair-loss.html")
    res.sendFile(filePath, (err) => {
      if (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
      }
    })
  },
  superHairReductionPage: (req, res) => {
    const filePath = path.join(__dirname, "../public/hair/super-hair-reduction.html")
    res.sendFile(filePath, (err) => {
      if (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
      }
    })
  }
}
