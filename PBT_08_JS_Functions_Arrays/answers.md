## Câu A1 (5đ) — Function Declaration vs Expression vs Arrow
1. Viết hàm tinhThueBaoHiem(luong) theo 3 cách:
Cách 1: Function Declaration
```javascript
function tinhThueBaoHiemDeclaration(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return {
        thuong: thue,
        thuc_nhan: luong - thue
    };
}
```
Cách 2: Function Expression
```javascript
const tinhThueBaoHiemExpression = function(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return {
        thuong: thue,
        thuc_nhan: luong - thue
    };
};
```
Cách 3: Arrow Function
```javascript
const tinhThueBaoHiemArrow = (luong) => {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return {
        thuong: thue,
        thuc_nhan: luong - thue
    };
};
```

2. 3 cách này có khác nhau về Hoisting không?
- Có khác nhau, Function Declaration có cơ chế Hoisting hoàn toàn (hàm được đưa lên đầu scope khi biên dịch), cho phép gọi hàm trước khi khai báo. Function Expression và Arrow Function (khi gán vào biến const hoặc let) không được hoisting theo cách đó. Bạn bắt buộc phải khai báo hàm trước rồi mới được phép gọi sử dụng, nếu không sẽ gặp lỗi

Ví dụ minh họa bằng code cụ thể:
```javascript
// 1. Kiểm tra với FUNCTION DECLARATION
console.log(tinhThueBaoHiemDeclaration(15000000)); 
// CHẠY ĐƯỢC! Kết quả: { thuong: 1500000, thuc_nhan: 13500000 }
// Giải thích: Nhờ Hoisting, JS tự động hiểu hàm này đã tồn tại từ đầu scope.
function tinhThueBaoHiemDeclaration(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return { thuong: thue, thuc_nhan: luong - thue };
}
// 2. Kiểm tra với FUNCTION EXPRESSION
console.log(tinhThueBaoHiemExpression(15000000)); 
// LỖI NGAY: ReferenceError: Cannot access 'tinhThueBaoHiemExpression' before initialization
// Giải thích: Biến const không cho phép truy cập trước khi dòng khai báo được chạy.
const tinhThueBaoHiemExpression = function(luong) {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return { thuong: thue, thuc_nhan: luong - thue };
};
// 3. Kiểm tra với ARROW FUNCTION
console.log(tinhThueBaoHiemArrow(15000000)); 
// LỖI NGAY: ReferenceError: Cannot access 'tinhThueBaoHiemArrow' before initialization
// Giải thích: Tương tự như Expression, Arrow function gán vào const nên không thể gọi trước khi định nghĩa.
const tinhThueBaoHiemArrow = (luong) => {
    const thue = luong > 11000000 ? luong * 0.1 : 0;
    return { thuong: thue, thuc_nhan: luong - thue };
};
```
## Câu A2: Scope & Closure
- Đoạn 1 output: 1, 2, 3, 2, 2
- Đoạn 2 output:
    + var: 3, 3, 3 (in ra ba số 3)
    + let: 0, 1, 2
Giải thích: Biến var có function scope, vòng lặp for chạy xong cực nhanh biến i tăng lên 3 rồi, sau đó 100ms setTimeout mới chạy nên in ra 3 luôn. Còn let có block scope, mỗi vòng lặp nó tạo một biến j mới lưu đúng giá trị tại thời điểm đó nên in ra đúng 0 1 2.

## Câu A3 — Array Methods
```javascript
// 1
nums.filter(x => x % 2 === 0);
// 2
nums.map(x => x * 3);
// 3
nums.reduce((sum, x) => sum + x, 0);
// 4
nums.find(x => x > 7);
// 5
nums.some(x => x > 10);
// 6
nums.every(x => x > 0);
// 7
nums.map(x => `Số ${x} là ${x % 2 === 0 ? 'chẵn' : 'lẻ'}`);
// 8
[...nums].reverse(); // dùng spread để clone mảng, reverse ko làm đổi mảng gốc
```
## Câu A4 — Object Destructuring & Spread
-  Dòng 1: iPhone 16 25990000 8 Titan
- Dòng 2: { ram: 8, storage: 256, color: 'Titan' }
- Dòng 3: 23990000
- Dòng 4: true
- Dòng 5: 25990000 (Object gốc ko bị đổi giá vì mình vừa tạo object mới)
- Dòng 6: 16. Giải thích: Phép spread ... chỉ copy nông (shallow copy) các thuộc tính lớp ngoài cùng. Object specs ở trong vẫn trỏ chung một địa chỉ bộ nhớ với gốc, nên sửa RAM trong copy thì gốc cũng bị đổi theo.


## Câu C1:
Refactor lại đoạn code ugly, dùng destructuring lấy luôn thuộc tính cho gọn:
```javascript
const processOrders = (orders) => 
    orders
        .filter(o => o.status === "completed" && o.total > 100000)
        .map(({ id, customer, total }) => ({
            id, customer, total,
            discount: total * 0.1,
            finalTotal: total * 0.9
        }))
        .sort((a, b) => b.finalTotal - a.finalTotal);
```
## Câu C2: miniArray API
Viết lại bằng for loop thuần tuý:
```javascript
const miniArray = {
    map(arr, fn) {
        let res = [];
        for (let i = 0; i < arr.length; i++) {
            res.push(fn(arr[i], i, arr));
        }
        return res;
    },
    filter(arr, fn) {
        let res = [];
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i, arr)) res.push(arr[i]);
        }
        return res;
    },
    reduce(arr, fn, initialValue) {
        let acc = initialValue !== undefined ? initialValue : arr[0];
        let startIndex = initialValue !== undefined ? 0 : 1;
        for (let i = startIndex; i < arr.length; i++) {
            acc = fn(acc, arr[i], i, arr);
        }
        return acc;
    }
};
//test:
// Test phải pass:
console.log(miniArray.map([1,2,3], x => x * 2));        // → [2,4,6]
console.log(miniArray.filter([1,2,3,4], x => x > 2));    // → [3,4]
console.log(miniArray.reduce([1,2,3,4], (a,b) => a+b, 0)); // → 10
```


