const express = require('express')
const app = express()

app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('Hello World')
  }, 300)
})

app.listen(3000)
