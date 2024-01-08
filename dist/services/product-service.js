var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ProductRepo } from "../database/index.js";
import { returnData } from "../utils/index.js";
class ProductService {
    constructor() {
        this.CreateProduct = (ProductInput) => __awaiter(this, void 0, void 0, function* () {
            try {
                const productRes = yield this.repo.createProduct(ProductInput);
                return returnData(productRes);
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
        this.getAllProducts = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const prodsResults = yield this.repo.getAllProducts();
                const categories = {};
                prodsResults.forEach((product) => {
                    categories[product.category] = product;
                });
                const uniqueCategories = Object.keys(categories);
                return {
                    prodsResults,
                    categories: uniqueCategories,
                };
            }
            catch (error) {
                console.error(error);
                return null;
            }
        });
        this.repo = new ProductRepo();
    }
}
export default ProductService;
