const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res) {
  const view = 'index'

  const data = {
    title: 'Pacman',
    description: 'Hello World'
  }

  res.render(view, data)
})

module.exports = router
