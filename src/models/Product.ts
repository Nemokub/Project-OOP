export class Product {
    private id: number;
    private name: string;
    private price: number;
    private status: string;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.status = "พร้อมขาย";
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }

    getStatus(): string {
        return this.status;
    }

    setName(name: string): void {
        this.name = name;
    }

    setPrice(price: number): void {
        this.price = price;
    }

    setStatus(status: string): void {
        this.status = status;
    }

    getDetail(): string {
        return this.name + " - " + this.price + " บาท";
    }
}