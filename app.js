const express = require('express')
const app = express()
app.use(express.json());
const port = 8080 || process.env.PORT;
const travel = require("./travel-list.js")


app.get("/", (req, res) => {
    res.send("Travel Wishlist")
})

app.get("/countries", ((req, res) => {
//    console.log(req.params)
    res.send (
        `<h2>My travel wishlist</h2>
        <h3> ${req.params.countries}</h3>
         ${travel.map((index) => `<p>${index.name}</p>`)}`
    )
}))

app.post("/countries", (req,res) => {
    const country = req.body
    console.log(country)
    res.send(
       `name: ${country.name}`
    )
})

// app.get("/code", (req,res) => {
//     const code = (req.params.countries.alpha2Code, req.params.countries.alpha3Code)
//     res.send(
//         `<h2>Country ${code}</h2>
//         ${travel.map((index) => `<p>${index.name}</p>`)}`
//     )
// })


app.listen(port, () => {
    console.log(`Travel Wishlist app listening on port ${port}`)
  })