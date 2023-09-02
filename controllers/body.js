const path = require('path')

module.exports = {
  intimateRejuvenationPage: (req, res) => {
    const filePath = path.join(__dirname, '../public/body/intimate-rejuvenation.html')
    res.sendFile(filePath, (err) => {
      if (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
      }
    });
  },
  luxSeriesTattooRemovalPage: (req, res) => {
    const filePath = path.join(__dirname, '../public/body/lux-series-tattoo-removal.html')
    res.sendFile(filePath, (err) => {
      if (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
      }
    })
  },
  skinRejuventionPage: (req, res) => {
    const filePath = path.join(__dirname, '../public/body/skin-rejuvention.html')
    res.sendFile(filePath, (err) => {
      if (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
      }
    })
  },
  skinTighteningyPage: (req, res) => {
    const filePath = path.join(__dirname, '../public/body/skin-tightening.html')
    res.sendFile(filePath, (err) => {
      if (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
      }
    })
  },
  ultrasoundCavitationPage: (req, res) => {
    const filePath = path.join(__dirname, '../public/body/ultrasound-cavitation.html')
    res.sendFile(filePath, (err) => {
      if (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
      }
    })
  },
}