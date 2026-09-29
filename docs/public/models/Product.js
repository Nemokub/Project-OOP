export class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.status = "พร้อมขาย";
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    getStatus() {
        return this.status;
    }
    setName(name) {
        this.name = name;
    }
    setPrice(price) {
        this.price = price;
    }
    setStatus(status) {
        this.status = status;
    }
    getDetail() {
        return this.name + " - " + this.price + " บาท";
    }
}
