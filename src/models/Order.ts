import { Customer } from "./Customer.js";
import { OrderItem } from "./OrderItem.js";

export class Order {
    private orderId: number;
    private customer: Customer;
    private items: OrderItem[];
    private status: string;

    constructor(orderId: number, customer: Customer) {
        this.orderId = orderId;
        this.customer = customer;
        this.items = [];
        this.status = "รับออเดอร์";
    }

    addItem(item: OrderItem): void {
        this.items.push(item);
    }

    removeItem(index: number): void {
        this.items.splice(index, 1);
    }

    getItems(): OrderItem[] {
        return this.items;
    }

    getStatus(): string {
        return this.status;
    }

    setStatus(status: string): void {
        this.status = status;
    }

    getOrderId(): number {
        return this.orderId;
    }

    getCustomer(): Customer {
        return this.customer;
    }

    calculateTotal(): number {
        let total = 0;

        for (let item of this.items) {
            total = total + item.calculateSubtotal();
        }

        return total;
    }
}