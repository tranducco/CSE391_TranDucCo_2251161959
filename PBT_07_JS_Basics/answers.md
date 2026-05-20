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




