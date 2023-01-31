// steps 1:import the mongoose
const mongoose = require('mongoose');  

 // steps 2: make connection to the db
mongoose.connect('mongodb://localhost/contactlist', { useNewUrlParser: true, useUnifiedTopology: true }); 

 // steps 3: To use the connection store the connection to the db
const db = mongoose.connection;

 // steps 4: if it contain the error then this work
db.on('error', console.error.bind(console, 'Error connecting to DB:'));

 // steps 4: if succesfull then this called
db.once('open', function() {
console.log("Successfully connected to the DB.");
});