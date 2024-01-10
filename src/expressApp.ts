import express from "express";
import cors from "cors";
import { Products } from "./api/product.js";
import { Express } from "express-serve-static-core";

export const  expressApp =  async (app: Express) =>{

    app.use(express.json({ limit: '1mb'}));
    
    app.use(express.urlencoded({ extended: true, limit: '1mb'}));
    
    app.use(cors());


    //api
    Products(app)


}
