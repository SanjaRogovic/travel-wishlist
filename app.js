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
    res.json(travel)
}))

app.post("/countries", (req,res) => {
    const country = req.body
    console.log(country)

    travel.push(country)
    
    res.json(country)
})


app.get("/countries/:code", (req, res) => {
const singleCountry = req.params.code

const countryCode = travel.find(country => country.alpha2Code === singleCountry || country.alpha3Code === singleCountry)
console.log(singleCountry)

if(!countryCode){
    return res.status(404).send("Country not found")
}
  res.json(countryCode);
});

app.put("/countries/:code", (req, res) => {
    const country = req.body
    console.log(country)
    res.json(country)
})


app.delete("/countries/:code", (req, res) => {
    const singleCountry = req.params.code

    const countryCode = travel.find(country => country.alpha2Code === singleCountry || country.alpha3Code === singleCountry)
    // console.log(singleCountry)

    res.json(countryCode);
    
    if(!countryCode){
        return res.status(404).send("Country not found")
    }   
})


app.listen(port, () => {
    console.log(`Travel Wishlist app listening on port ${port}`)
  })
