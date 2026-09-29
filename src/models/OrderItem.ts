import { Product } from "./Product.js";

export class OrderItem {
    private product: Product;
    private quantity: number;
    private size: string;
    private sweetness: string;

    constructor(product: Product, quantity: number, size: string, sweetness: string = "ปรกติ") {
        this.product = product;
        this.quantity = quantity;
        this.size = size;
        this.sweetness = sweetness;
    }

    getProduct(): Product {
        return this.product;
    }

    getQuantity(): number {
        return this.quantity;
    }

    getSize(): string {
        return this.size;
    }

    getSweetness(): string {
        return this.sweetness;
    }

    setQuantity(quantity: number): void {
        this.quantity = quantity;
    }

    calculateSubtotal(): number {
        let price = this.product.getPrice();

        if (this.size === "M") {
            price = price + 5;
        }

        if (this.size === "L") {
            price = price + 10;
        }

        return price * this.quantity;
    }
}