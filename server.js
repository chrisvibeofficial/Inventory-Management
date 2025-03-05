require("dotenv").config();
const express = require("express");
require("./config/database")

const PORT = process.env.PORT

const app = express();

app.use(express.json())


app.listen(PORT, () => {
    console.log(`server is listening to port: ${PORT}`);
    
})