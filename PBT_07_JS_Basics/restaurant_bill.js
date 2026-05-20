const items = [
    { name: "Phở bò", qty: 2, price: 65000 },
    { name: "Trà đá", qty: 3, price: 5000 },
    { name: "Bún chả", qty: 1, price: 55000 },
    { name: "Nước cam", qty: 2, price: 30000 },
];

const today = new Date().getDay(); // 0 là Chủ nhật, 1 là thứ 2, 2 là thứ 3 (Tuesday), 3 là thứ 4 (Wednesday) theo đề bài (Đề ghi "Ngày thứ 3 (Wednesday)", thực tế Wednesday là thứ 4 ở VN, nên giả lập điều kiện thứ 4).
const isWednesday = true; // Hardcode để giả lập trường hợp có giảm giá ngày thứ 3 (Wednesday) như đề.

// Tính tổng gốc
let subTotal = 0;
for (let i = 0; i < items.length; i++) {
    subTotal += items[i].qty * items[i].price;
}

// Tính phần trăm giảm giá
let discountPercent = 0;
if (subTotal > 1000000) {
    discountPercent = 15;
} else if (subTotal > 500000) {
    discountPercent = 10;
}

if (isWednesday) {
    discountPercent += 5;
}

// Tính tiền
let discountAmount = subTotal * (discountPercent / 100);
let totalAfterDiscount = subTotal - discountAmount;

let vatAmount = totalAfterDiscount * 0.08;
let tipAmount = totalAfterDiscount * 0.05;

let finalTotal = totalAfterDiscount + vatAmount + tipAmount;

// Hàm hỗ trợ format tiền tệ
function formatMoney(amount) {
    return amount.toLocaleString('vi-VN') + "đ";
}

// In hóa đơn
console.log("╔══════════════════════════════════════╗");
console.log("║           HÓA ĐƠN NHÀ HÀNG           ║");
console.log("╠══════════════════════════════════════╣");

for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let rowTotal = item.qty * item.price;
    // Format hiển thị cho đẹp
    let line = `║ ${String(i+1) + ". " + item.name.padEnd(10)} x${item.qty}    @${item.price/1000}k  = ${rowTotal/1000}k`;
    console.log(line.padEnd(39) + "║");
}

console.log("╠══════════════════════════════════════╣");
console.log(`║ Tổng cộng:              ${formatMoney(subTotal).padStart(12)} ║`);
console.log(`║ Giảm giá (${discountPercent}%):          ${formatMoney(discountAmount).padStart(12)} ║`);
console.log(`║ VAT (8%):               ${formatMoney(vatAmount).padStart(12)} ║`);
console.log(`║ Tip (5%):               ${formatMoney(tipAmount).padStart(12)} ║`);
console.log("╠══════════════════════════════════════╣");
console.log(`║ THANH TOÁN:             ${formatMoney(finalTotal).padStart(12)} ║`);
console.log("╚══════════════════════════════════════╝");