const path = require('path')

module.exports = {
  carbonFacialsPage: (req, res) => {
    const filePath = path.join(__dirname, '../public/facials/carbonFacials.html')
    res.sendFile(filePath, (err) => {
      if (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
      }
    });
  },
  plasmaSkinRejuventionPage: (req, res) => {
    const filePath = path.join(__dirname, '../public/facials/plasma-skin-rejuvention.html')
    res.sendFile(filePath, (err) => {
      if (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
      }
    })
  },
  skinRejuventionPage: (req, res) => {
    const filePath = path.join(__dirname, '../public/facials/skin-rejuvention.html')
    res.sendFile(filePath, (err) => {
      if (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
      }
    })
  },
  medicalGradeLightTherapyPage: (req, res) => {
    const filePath = path.join(__dirname, '../public/facials/medical-grade-light-Therapy.html')
    res.sendFile(filePath, (err) => {
      if (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
      }
    })
  },
  collagenInductionTherapyPage: (req, res) => {
    const filePath = path.join(__dirname, '../public/facials/collagen-induction-therapy.html')
    res.sendFile(filePath, (err) => {
      if (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
      }
    })
  },
  lumixaPage: (req, res) => {
    const filePath = path.join(__dirname, '../public/facials/lumixa.html')
    res.sendFile(filePath, (err) => {
      if (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
      }
    })
  },
  hydraFacialPage: (req, res) => {
    const filePath = path.join(__dirname, '../public/facials/hydrafacial.html')
    res.sendFile(filePath, (err) => {
      if (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
      }
    })
  },
  plateletRichPlasmaPage: (req, res) => {
    const filePath = path.join(__dirname, '../public/facials/platelet-rich-plasma.html')
    res.sendFile(filePath, (err) => {
      if (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
      }
    })
  },
  dermalFacialFillersPage: (req, res) => {
    const filePath = path.join(__dirname, '../public/facials/dermal-facial-fillers.html')
    res.sendFile(filePath, (err) => {
      if (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
      }
    })
  },

}