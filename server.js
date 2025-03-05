// bxpaY8fhHm2fPSFJ

// mongodb+srv://chinasaacha05:bxpaY8fhHm2fPSFJ@ecommerce-app.0ydfp.mongodb.net/



require("dotenv").config();
const express = require("express");
require("./config/database")



const PORT = process.env.PORT

const app = express();

app.use(express.json())


app.listen(PORT, () => {
    console.log(`server is listening to port: ${PORT}`);
    
})