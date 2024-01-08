var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { db } from "../../utils/db.server.js";
class CustomerRepo {
    constructor() {
        this.createCustomer = (product) => __awaiter(this, void 0, void 0, function* () {
            const { title, description, createdAt, category, price } = product;
            try {
                const createdProduct = yield db.product.create({
                    data: {
                        title,
                        description,
                        createdAt,
                        category,
                        price,
                    },
                    select: {
                        _id: true,
                        title: true,
                        description: true,
                        createdAt: true,
                        category: true,
                        price: true,
                    },
                });
                return createdProduct;
            }
            catch (error) {
                console.error(error);
                throw error;
            }
        });
    }
}
module.exports = CustomerRepo;
