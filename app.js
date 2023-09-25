const express = require('express')
const app = express()
const port = 8080 || process.env.PORT;

app.get("/", ((req, res) => {
    res.send("Travel Wishlist")
}))

app.get("/travel-list.js", ((req, res) => {

}))

app.listen(port, () => {
    console.log(`Travel Wishlist app listening on port ${port}`)
  })