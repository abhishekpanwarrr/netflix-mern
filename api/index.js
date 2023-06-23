const express = require('express');
const mongoose = require('mongoose');
 
const app = express();
const PORT = process.env.PORT || 8000
app.listen(PORT,()=> console.log(`Server up and running on ${PORT}`))