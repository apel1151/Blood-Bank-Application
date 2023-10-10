const mongoose = require('mongoose');

// mongoose.connect(process.env.mongo_url)
const mongoURI = process.env.mongo_url;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

//verify connection
connection.on('connected', ()=>{
    console.log("Mongo DB connection successfull")
})

//verify connection error
connection.on('error', (err)=>{
    console.log("Mongo DB connection error", err)
})