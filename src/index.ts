import express from "express";
import { db } from "./utils/db.server.js";

const startServer = async () => {


    const app = express();




    const PORT = 3000;

    app.listen(
        PORT,
        () => {
            console.log(`the server is running on port ${PORT}.../`)
        }
    )
}


startServer();