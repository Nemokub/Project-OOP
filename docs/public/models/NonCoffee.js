import { Product } from "./Product.js";
export class NonCoffee extends Product {
    constructor(id, name, price) {
        super(id, name, price);
    }
    getDetail() {
        return "🧋 " + this.getName() + " - " + this.getPrice() + " บาท";
    }
}
