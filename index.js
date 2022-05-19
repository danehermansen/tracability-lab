const express = require('express')
const path = require('path')
const app = express()

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '883911e3ea2142f1adfa460bf40dfcfd',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')


app.use(express.static(path.join(__dirname, '../public')))


const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`listening on ${port}`)
})