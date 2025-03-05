require("dotenv").config();
require("./config/database")
const express = require("express");

const PORT = process.env.PORT

const app = express();

const userRouter = require('./routes/userRouter');

app.use(express.json());
app.use('/api/v1', userRouter)


app.listen(PORT, () => {
  console.log(`server is listening to port: ${PORT}`);

})