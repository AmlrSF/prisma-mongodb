

import { ProductRepo } from "../database/index.js";


class ProductService {

    private repo : ProductRepo;

    constructor(){
        this.repo = new ProductRepo();
    }


    

}