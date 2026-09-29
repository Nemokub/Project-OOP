export class Payment {
    private paymentId: number;
    private amount: number;
    private method: string;
    private status: string;

    constructor(paymentId: number, amount: number, method: string) {
        this.paymentId = paymentId;
        this.amount = amount;
        this.method = method;
        this.status = "ยังไม่ชำระ";
    }

    pay(): void {
        this.status = "ชำระเงินแล้ว";
    }

    getStatus(): string {
        return this.status;
    }

    getAmount(): number {
        return this.amount;
    }

    getMethod(): string {
        return this.method;
    }
}