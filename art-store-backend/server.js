const express = require('express')
const  mongoose = require('mongoose')

const app = express()
mongoose.connect("mongodb://localhost:27017/Cathart")
 
const ArtworkSchema = new mongoose.Schema({
  
Artwork_Name: String,
Category: String,
likes: Number,
sold: Number,
Bestsellers: Number,
Trending: Number,
Recents: Number

})

const ArtworkModel = mongoose.model("Art_Categories",ArtworkSchema)

app.get("/getArt_Categories",(req, res) =>
  ArtworkModel.find({}).then(function(Art_Categories){
    res.json(Art_Categories)
  }).catch(function(err){
    console.log(err)
  })
)

app.listen(3001,()=> {
  console.log("Server is Running")
})