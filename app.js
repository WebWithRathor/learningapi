require('dotenv').config({path:"./.env"})
const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRouter.js');

require('./models/connect.js').monogoConnection();

app.use(require('morgan')("tiny"));
// route setup
app.use("/api/user",indexRouter);



// server create
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})