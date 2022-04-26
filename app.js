require("express-async-errors");
const express = require("express");
//import express from "express";

require("dotenv").config();
require("./db");

const app = express();

const morgan = require("morgan");
const cors = require("cors")// ye dekh........

app.use(morgan("dev"));

app.use(cors());// ye dekh......

app.use(express.json());

const opportunityrouter = require("./routers/opportunityPost");
app.use("/api/opportunityPost",opportunityrouter);

const newsrouter = require("./routers/newsPost");
app.use("/api/newsPost",newsrouter);

const postRouter = require("./routers/blogPost");
app.use("/api/blogPost", postRouter);

//To handle error
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("port is listening on " + PORT);
});
//source bc.... baat nhai kar rhi