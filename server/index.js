import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import posts from "./routers/posts.js";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const URI = process.env.DATABASE_URL;

const app = express();
// const PORT = process.env.PORT || 5000;
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

app.use("/posts", posts);
var server_port = process.env.PORT;
var server_host = '0.0.0.0';
mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to DB");
        app.listen(server_port, server_host, function() {
            console.log('Listening on port %d', server_port);
        });
    })
    .catch((err) => {
        console.log(err);
    });