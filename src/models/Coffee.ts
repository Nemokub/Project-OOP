import { Product } from "./Product.js";

export class Coffee extends Product {
    constructor(id: number, name: string, price: number) {
        super(id, name, price);
    }

    getDetail(): string {
        return "☕ " + this.getName() + " - " + this.getPrice() + " บาท";
    }
}
