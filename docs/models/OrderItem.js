export class OrderItem {
    constructor(product, quantity, size, sweetness = "ปรกติ") {
        this.product = product;
        this.quantity = quantity;
        this.size = size;
        this.sweetness = sweetness;
    }
    getProduct() {
        return this.product;
    }
    getQuantity() {
        return this.quantity;
    }
    getSize() {
        return this.size;
    }
    getSweetness() {
        return this.sweetness;
    }
    setQuantity(quantity) {
        this.quantity = quantity;
    }
    calculateSubtotal() {
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
