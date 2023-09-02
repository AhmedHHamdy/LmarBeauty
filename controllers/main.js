const path = require('path')

module.exports = {
  getIndex: (req, res) => {
    const filePath = path.join(__dirname, '../public/index.html')
    res.sendFile(filePath, (err) => {
      if (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
      }
    })
  },
  getAboutPage: (req, res) => {
    const filePath = path.join(__dirname, '../public/about.html')
    res.sendFile(filePath, (err) => {
      if (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
      }
    })
  },
  getBookingPage: (req, res) => {
    const filePath = path.join(__dirname, '../public/booking.html')
    res.sendFile(filePath, (err) => {
      if (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
      }
    })
  },
  getShopPage: (req, res) => {
    const filePath = path.join(__dirname, '../public/shop.html')
    res.sendFile(filePath, (err) => {
      if (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
      }
    })
  }
}
