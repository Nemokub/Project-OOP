export class Payment {
    constructor(paymentId, amount, method) {
        this.paymentId = paymentId;
        this.amount = amount;
        this.method = method;
        this.status = "ยังไม่ชำระ";
    }
    pay() {
        this.status = "ชำระเงินแล้ว";
    }
    getStatus() {
        return this.status;
    }
    getAmount() {
        return this.amount;
    }
    getMethod() {
        return this.method;
    }
}
