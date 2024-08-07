const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/recipe_database');
const db= mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'))
db.once('open',()=>{
    console.log("Connected...")
})


// models
require('./Category');
require('./Recipe')