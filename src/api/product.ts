import { Express, Request, Response } from "express";
import ProductService from "../services/product-service.js";

export const Products = (app: Express) => {
    const productService = new ProductService();

    
    app.get("/products", async (req: Request, res: Response) => {
        try {
            const products = await productService.getAllProducts();
            res.json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    });

    
    app.post("/products", async (req: Request, res: Response) => {
        const productInput = req.body; 
        try {
            const createdProduct = await productService.CreateProduct(productInput)
            res.json(createdProduct);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    });

    
    
};
