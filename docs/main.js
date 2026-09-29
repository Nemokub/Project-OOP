import { Coffee } from "./models/Coffee.js";
import { NonCoffee } from "./models/NonCoffee.js";
import { Customer } from "./models/Customer.js";
import { OrderItem } from "./models/OrderItem.js";
import { Order } from "./models/Order.js";
import { Payment } from "./models/Payment.js";
let products = [
    new Coffee(1, "Americano", 50),
    new Coffee(2, "Latte", 55),
    new Coffee(3, "Cappuccino", 60),
    new NonCoffee(4, "Green Tea", 45),
    new NonCoffee(5, "Cocoa", 50)
];
let customer = new Customer(1, "ลูกค้า");
let order = new Order(1, customer);
const productList = document.getElementById("productList");
const orderList = document.getElementById("orderList");
const total = document.getElementById("total");
const confirmButton = document.getElementById("confirmButton");
function showProducts() {
    if (!productList) {
        return;
    }
    productList.innerHTML = "";
    products.forEach((product, index) => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML =
            "<div class=\"product-info\">" +
                "<h3>" + product.getDetail() + "</h3>" +
                "<p>สถานะ: " + product.getStatus() + "</p>" +
                "</div>" +
                "<div class=\"product-controls\">" +
                "<label>ขนาด <select class=\"size-select\">" +
                "<option value=\"S\">S</option>" +
                "<option value=\"M\">M (+5)</option>" +
                "<option value=\"L\">L (+10)</option>" +
                "</select></label>" +
                "<label>ความหวาน <select class=\"sweetness-select\">" +
                "<option value=\"25%\">25%</option>" +
                "<option value=\"50%\">50%</option>" +
                "<option value=\"100%\" selected>100%</option>" +
                "<option value=\"200%\">200%</option>" +
                "</select></label>" +
                "</div>" +
                "<button>เพิ่ม</button>";
        const button = div.querySelector("button");
        if (button) {
            button.addEventListener("click", function () {
                addProduct(index, div);
            });
        }
        productList.appendChild(div);
    });
}
function addProduct(index, card) {
    const product = products[index];
    if (product.getStatus() === "หมด") {
        alert("เมนูนี้หมดแล้ว");
        return;
    }
    const sizeSelect = card.querySelector(".size-select");
    const sweetnessSelect = card.querySelector(".sweetness-select");
    const size = sizeSelect ? sizeSelect.value : "S";
    const sweetness = sweetnessSelect ? sweetnessSelect.value : "ปกติ";
    const item = new OrderItem(product, 1, size, sweetness);
    order.addItem(item);
    showOrder();
    alert("เพิ่ม " + product.getName() + " แล้ว");
}
function showOrder() {
    if (!orderList || !total) {
        return;
    }
    orderList.innerHTML = "";
    const items = order.getItems();
    items.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "order-item";
        div.innerHTML =
            "<span>" +
                item.getProduct().getName() +
                " (" + item.getSize() + ", " + item.getSweetness() + ") x " +
                item.getQuantity() +
                "</span>" +
                "<span>" +
                item.calculateSubtotal() +
                " บาท" +
                "</span>" +
                "<button>ลบ</button>";
        const button = div.querySelector("button");
        if (button) {
            button.addEventListener("click", function () {
                removeProduct(index);
            });
        }
        orderList.appendChild(div);
    });
    total.textContent = order.calculateTotal() + " บาท";
}
function removeProduct(index) {
    order.removeItem(index);
    showOrder();
}
function confirmOrder() {
    if (order.getItems().length === 0) {
        alert("กรุณาเลือกเครื่องดื่มก่อน");
        return;
    }
    const totalPrice = order.calculateTotal();
    const payment = new Payment(1, totalPrice, "เงินสด");
    payment.pay();
    order.setStatus("กำลังเตรียม");
    alert("ยืนยัน Order แล้ว\n" +
        "ยอดทั้งหมด: " + totalPrice + " บาท\n" +
        "สถานะ: " + order.getStatus() + "\n" +
        "การชำระเงิน: " + payment.getStatus());
    // ล้างรายการสั่งซื้อ
    order.getItems().splice(0, order.getItems().length);
    // แสดงตะกร้าใหม่
    showOrder();
}
if (confirmButton) {
    confirmButton.addEventListener("click", confirmOrder);
}
showProducts();
showOrder();
