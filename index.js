const express = require('express')
const app = express()

function doSomething() {
  Array.from({ length: 100000 }).forEach(value => {
    return value * value * value
  })
}

app.get('/', (req, res) => {
  setTimeout(() => {
    doSomething()
    res.send('Hello World')
  }, 300)
})

app.listen(3000)
