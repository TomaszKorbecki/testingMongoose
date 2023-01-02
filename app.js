const express = require('express');
const mongoose = require('mongoose');

const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user')
const app = express();

mongoose.connect('mongodb+srv://korba:korba1965@cluster0.wyvbyh3.mongodb.net/?retryWrites=true&w=majority')
.then(() =>{
    console.log('Successfully connected to MongoDB Atlass!');
})
.catch((error) =>{
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
});
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use('/api/stuff', stuffRoutes);
app.user('/api/auth',userRoutes);


module.exports = app;