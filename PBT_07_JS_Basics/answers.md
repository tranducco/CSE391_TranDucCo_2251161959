## Câu A1 - var / let / const
Dự đoán: 
- Đoạn 1: in ra undefined
- Đoạn 2: in ra 10
- Đoạn 3: báo lỗi 
- Đoạn 4: in ra mảng [1,2,3,4]
- Đoạn 5: in ra: "Trong block: 2" sau đó là "Ngoài block: 1"
so sánh: code chạy khác so với dự đoán ở đoạn 2: máy báo lỗi :var_let_const.js:6 Uncaught ReferenceError: Cannot access 'y' before initialization ,Giải thích: Biến khai báo bằng let cũng được hoist nhưng nằm trong vùng an toàn gọi là Temporal Dead Zone (TDZ) cho đến khi được gán giá trị, còn lại dự đoán khá chính xác


## Câu A2 - Data Types & Coercion
1. console.log(typeof null);  
- in ra object 
2. console.log(typeof undefined);      
- in ra undefined
3. console.log(typeof NaN);      
- in ra number
4. console.log("5" + 3);                
- in ra 53
5. console.log("5" - 3);                
- in ra 2
6. console.log("5" * "3");           
- in ra NaN
7. console.log(true + true);      
- in ra 2
8. console.log([] + []);               
- in ra ""
9. console.log([] + {});                
- in ra {}
10. console.log({} + []);               
- in ra []

console.log("5" + 3) và console.log("5" - 3) cho ra kết quả khác nhau vì với "5"+ 3 thì 3 bị ép kiểu thành chuỗi để nối với "5" thành 53 , còn với "5" - 3 thì "5" bị ép kiểu thành số để thực hiện phép trừ 

## Câu A3 - So sánh == vs ===
- console.log(5 == "5"); : trả về true
- console.log(5 === "5"); : trả về false   
- console.log(null == undefined); : trả về true
- console.log(null === undefined); : trả về false 
- console.log(NaN == NaN); : trả về false 
- console.log(0 == false); : trả về true 
- console.log(0 === false); : trả về false 
- console.log("" == false); : trả về true      

Từ giờ trở đi nên dùng === để tránh các lỗi logic không mong muốn do cơ chế tự động ép kiểu ngầm (Type Coercion) của JavaScript

## Câu A4 - Truthy & Falsy
- Danh sách giá trị Falsy trong JS (có 8 cái chính): false, 0, -0, 0n (BigInt), "" (chuỗi rỗng), null, undefined, NaN.
- if ("0") console.log("A"); : có in 
- if ("") console.log("B");  : không in
- if ([]) console.log("C");   : có in
- if ({}) console.log("D");    : có in
- if (null) console.log("E");   : không in
- if (0) console.log("F");     : không in
- if (-1) console.log("G");     : có in
- if (" ") console.log("H");     : có in

## Câu A5 - Template Literals
```javascript
// Cách 1:
const greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;

// Cách 2:
const url = `https://api.example.com/users/${userId}/orders?page=${page}`;

// Cách 3:
const html = `
<div class="card">
  <h2>${title}</h2>
  <p>${description}</p>
  <span>Giá: ${price}đ</span>
</div>
`;
```
## Câu B1: Máy tính đơn giản
Tạo file calculator.js

## Câu C1 (10đ) — Debug JavaScript
Các lỗi có trong đoạn code và cách sửa:

- Lỗi Logic: if (giaSauGiam = 0)
    + Giải thích: Đây là phép gán (=) chứ không phải toán tử so sánh (===). Do đó giá trị luôn bị gán bằng 0 (falsy) và block if không bao giờ chạy
    + Sửa: Đổi thành if (giaSauGiam === 0)
- Lỗi truyền sai kiểu dữ liệu đầu vào (Type Coercion Risk)
    + Giải thích: Giá bán đang được truyền vào dưới dạng chuỗi (String). Mặc dù JavaScript có cơ chế tự ép kiểu (implicit coercion) cho phép nhân và trừ, việc tính toán toán học trên chuỗi là cực kỳ rủi ro và có thể gây lỗi NaN nếu chuỗi chứa ký tự không phải số
    + Sửa: Chuyển chuỗi thành số (ép kiểu) bằng Number(), hoặc truyền thẳng số 100000 vào hàm
- Thiếu kiểm tra (Validate) đầu vào của giaBan
    + Giải thích: Hàm chỉ kiểm tra phanTramGiam mà bỏ quên giaBan. Nếu người dùng vô tình truyền vào số âm hoặc một chuỗi chữ ("abc"), hệ thống sẽ trả về giá trị âm hoặc NaN
    + Sửa: Bổ sung điều kiện kiểm tra giaBan có phải là một số hợp lệ và lớn hơn hoặc bằng 0 hay không
- Kiểu dữ liệu trả về không đồng nhất (Inconsistent Return Type)
    + Giải thích: Giải thích: Khi mọi thứ bình thường, hàm trả về một số (Number), nhưng khi có lỗi, hàm lại trả về chuỗi (String). Điều này khiến việc sử dụng biến được gán (như gia2) để tính toán tiếp ở bên ngoài rất dễ gây sập chương trình
    + Sửa: Thay vì return chuỗi, hãy ném ra một ngoại lệ (throw new Error(...)) để dừng luồng thực thi và thông báo lỗi rõ ràng
- Lạm dụng var thay vì const
    + Giải thích: Biến giamGia được tính toán một lần và không bị thay đổi giá trị trong suốt quá trình chạy hàm. Việc dùng var là một thói quen cũ, dễ sinh lỗi rò rỉ biến (hoisting)
    + Sửa: Chuyển thành const giamGia = .... (Tương tự với giaSauGiam, cũng có thể dùng const thay vì let vì nó không bị gán lại)
- Lỗi ẩn: Scope của var trong vòng lặp bất đồng bộ
    + Giải thích: Kết quả của đoạn code trên sẽ in ra dòng chữ "Item 5" lặp lại 5 lần, chứ không phải từ 0 đến 4, Lý do là var có phạm vi theo hàm (function scope). Nó chỉ tạo ra một vùng nhớ duy nhất cho biến i, Vòng lặp for chạy đồng bộ rất nhanh và kết thúc ngay lập tức, lúc này i đã tăng lên 5 , Trong khi đó, hàm setTimeout là bất đồng bộ (chạy sau 1 giây). Khi các hàm callback bên trong setTimeout bắt đầu thực thi, chúng sẽ tìm đến vùng nhớ của i để lấy giá trị. Lúc này i đã là 5, nên tất cả đều in ra 5
    + sửa :Thay var i = 0 thành let i = 0. let có phạm vi theo khối (block scope). Mỗi vòng lặp sẽ tạo ra một "bản sao" mới của biến i và khóa chặt nó lại cho riêng vòng lặp đó (closure), đảm bảo khi setTimeout chạy, nó sẽ lấy đúng giá trị i của từng bước 
```javascript
function tinhGiaGiamGia(giaBan, phanTramGiam) {
    // 1. Ép kiểu và Validate giá bán
    const giaTriBan = Number(giaBan);
    if (isNaN(giaTriBan) || giaTriBan < 0) {
        throw new Error("Giá bán không hợp lệ!");
    }

    // 2. Ném lỗi thay vì return chuỗi
    if (phanTramGiam < 0 || phanTramGiam > 100) {
        throw new Error("Phần trăm giảm không hợp lệ!");
    }
    
    // 3. Dùng const thay vì var/let do không gán lại
    const giamGia = giaTriBan * (phanTramGiam / 100);
    const giaSauGiam = giaTriBan - giamGia;
    
    // 4. Sửa lỗi toán tử gán thành so sánh tuyệt đối (===)
    if (giaSauGiam === 0) {
        console.log("Sản phẩm miễn phí!");
    }
    
    return giaSauGiam;
}

// Test case 1: Truyền chuỗi vẫn an toàn do đã có Number()
try {
    const gia = tinhGiaGiamGia("100000", 20);
    console.log("Giá sau giảm: " + gia + "đ");
} catch (error) {
    console.error(error.message);
}

// Test case 2: Bắt lỗi khi nhập sai phần trăm
try {
    const gia2 = tinhGiaGiamGia(50000, 110);
    console.log("Giá: " + gia2);
} catch (error) {
    console.error(error.message); // Sẽ in ra lỗi phần trăm không hợp lệ
}

// 5. Sửa lỗi ẩn: Dùng 'let' để tạo block scope
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i);
    }, 1000);
}
```







