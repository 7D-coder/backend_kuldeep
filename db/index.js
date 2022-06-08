const mongoose = require("mongoose");

mongoose
    .connect(process.env.Mongo_url)
    .then(()=> console.log("db connected"))
    .catch((err)=> console.log("db connection failed: ",err.message || err));
