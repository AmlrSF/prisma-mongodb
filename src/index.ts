import express from "express";
import { expressApp } from "./expressApp.js";

const startServer = async () => {


    const app = express();

    await expressApp(app);

    const PORT = 3000;

  

    app.listen(
        PORT,
        () => {
            console.log(`the server is running on port ${PORT}.../`)
        }
    )

}


startServer();