import { promises } from "dns";
import { Product } from "../../types/index.js";
import { db } from "../../utils/db.server.js";


class ProductRepo {

    createProduct = async (product: Omit<Product, 'id'|'createdAt'>): Promise<Product | null> => {
        const { title, description, category, price } = product;

        try {
            const createdProduct = await db.product.create({
                data: {
                    title,
                    description,
                    category,
                    price,
                },
                select: {
                    id: true,
                    title: true,
                    description: true,
                    createdAt: true,
                    category: true,
                    price: true,
                },
            });

            return createdProduct;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };


    getAllProducts = async() : Promise<Product[]> =>{
        try {
            return db.product.findMany();
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


}

export default ProductRepo;
