export class Order {
    constructor(orderId, customer) {
        this.orderId = orderId;
        this.customer = customer;
        this.items = [];
        this.status = "รับออเดอร์";
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(index) {
        this.items.splice(index, 1);
    }
    getItems() {
        return this.items;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    getOrderId() {
        return this.orderId;
    }
    getCustomer() {
        return this.customer;
    }
    calculateTotal() {
        let total = 0;
        for (let item of this.items) {
            total = total + item.calculateSubtotal();
        }
        return total;
    }
}
