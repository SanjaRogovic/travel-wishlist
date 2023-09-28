const express = require('express')
const app = express()

app.use(express.json());  // This middleware parses incoming requests with JSON payloads and makes the parsed data available on the req.body object.

const port = 8080 || process.env.PORT;
const travel = require("./travel-list.js")


// 1. GET / api/countries
// This should respond with a list of countries in your list. You should start off with 5 countries.

app.get("/", (req, res) => {
    res.send("Travel Wishlist")
})

app.get("/countries", ((req, res) => {
//    console.log(req.params)
    res.json(travel)
}))


// 2. POST /api/countries
// This route should accept JSON data and add the new country received to the list of countries (eg: add an object inside the countries array).

app.post("/countries", (req,res) => {
    const country = req.body  // POSTMAN
    console.log(country)

    travel.push(country)
    
    res.json(country)
})


// 3. GET /api/countries/:code
// This route should return a single country, based on the code provided. You should accept both an alpha 2 or an alpha 3 code. 

app.get("/countries/:code", (req, res) => {
const singleCountry = req.params.code

const countryCode = travel.find(country => country.alpha2Code === singleCountry || country.alpha3Code === singleCountry)
console.log(singleCountry)

if(!countryCode){
    return res.status(404).send("Country not found")
}
  res.json(countryCode);
});


// 4. PUT /api/countries/:code
// This route should accept edits to an existing country in the list (eg: edit an object inside the countries array).

app.put("/countries/:code", (req, res) => {
    const country = req.body
    console.log(country)
    res.json(country, `PUT request`)
})



// 5. DELETE /api/countries/:code
// This route should allow you to delete a specific country from the list (eg: remove an object from the array)

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
