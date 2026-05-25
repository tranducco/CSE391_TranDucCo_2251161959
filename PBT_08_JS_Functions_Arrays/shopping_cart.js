function createCart() {
    let items = [];
    let currentDiscount = 0; 

    return {
        addItem(product, quantity = 1) {
            let found = items.find(i => i.id === product.id);
            if (found) found.quantity += quantity;
            else items.push({ ...product, quantity });
        },
        removeItem(productId) {
            items = items.filter(i => i.id !== productId);
        },
        updateQuantity(productId, newQuantity) {
            let found = items.find(i => i.id === productId);
            if (found) found.quantity = newQuantity;
        },
        getTotal() {
            let total = items.reduce((sum, i) => sum + (i.price * i.quantity), 0);
            if (currentDiscount === 'SALE10') total *= 0.9;
            else if (currentDiscount === 'SALE20') total *= 0.8;
            else if (currentDiscount === 'FREESHIP') total -= 30000;
            return total;
        },
        applyDiscount(code) {
            currentDiscount = code;
        },
        printCart() {
            console.table(items.map(i => ({
                "Sản phẩm": i.name,
                "SL": i.quantity,
                "Đơn giá": i.price,
                "Tổng": i.price * i.quantity
            })));
            console.log(`Tổng cộng: ${this.getTotal().toLocaleString('vi-VN')}đ`);
        },
        getItemCount() {
            return items.reduce((sum, i) => sum + i.quantity, 0);
        },
        clearCart() {
            items = [];
            currentDiscount = 0;
        }
    };
}
//test:
const cart = createCart();

cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);
cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1); // Tăng lên 2

cart.printCart();
// Kỳ vọng:
// ┌──────────────────────────────────────────────┐
// │ # │ Sản phẩm      │ SL │ Đơn giá     │ Tổng        │
// │ 1 │ iPhone 16      │  2 │ 25.990.000  │ 51.980.000  │
// │ 2 │ AirPods Pro    │  2 │  6.990.000  │ 13.980.000  │
// ├──────────────────────────────────────────────┤
// │ Tổng cộng:                       65.960.000đ │
// └──────────────────────────────────────────────┘

cart.applyDiscount("SALE10");
cart.printCart();
// → Tổng: 59.364.000đ (giảm 10%)

console.log("Số SP:", cart.getItemCount()); // → 4
cart.removeItem(3);
console.log("Sau xóa:", cart.getItemCount()); // → 2