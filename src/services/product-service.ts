

import { ProductRepo } from "../database/index.js";
import { Product } from "../types/index.js";
import { returnData } from "../utils/index.js";


class ProductService {

    private repo : ProductRepo;

    constructor(){
        this.repo = new ProductRepo();
    }


    CreateProduct = async(ProductInput : Omit<Product,"createdAt"|"id">) : Promise<Product | null>  =>{
        try {

            const productRes = await this.repo.createProduct(ProductInput);
            return returnData(productRes);
            
        } catch (error) {
            console.log(error);
            return null;
        }
    }


    getAllProducts = async (): Promise<{ prodsResults: Product[]; categories: string[] } | null> => {
        try {
            const prodsResults = await this.repo.getAllProducts();
    
            const categories: { [key: string]: Product } = {};
    
            prodsResults.forEach((product: Product) => {
                categories[product.category] = product;
            });
    
            const uniqueCategories = Object.keys(categories);
    
            return {
                prodsResults,
                categories: uniqueCategories,
            };
        } catch (error) {
            console.error(error);
            return null;
        }
    };
    

}