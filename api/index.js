const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require("./routes/auth")
const usersRoutes = require("./routes/users")

// configuration
const app = express();
const PORT = process.env.PORT || 8000
dotenv.config()

app.use(express.json())


// auth routes
app.use("/api/auth",authRoutes)
app.use("/api/users",usersRoutes)

app.listen(PORT,()=> console.log(`Server up and running on ${PORT}`))
main()

async function main() {
    try {
        const response = await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MONGO RUNNING ON ${response.connection.host}`);
    } catch (error) {
        console.log(error.message);
    }
}