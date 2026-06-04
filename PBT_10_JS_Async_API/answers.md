## PHẦN A — KIỂM TRA ĐỌC HIỂU (15 điểm)

### Câu A1 (5đ) — Sync vs Async

#### 1. Dự đoán thứ tự output:
1. `1 - Start`
2. `4 - End`
3. `3 - Promise`
4. `6 - Promise 2`
5. `2 - Timeout 0ms`
6. `7 - Nested Timeout`
7. `5 - Timeout 100ms`

#### 2. Giải thích chi tiết cơ chế Event Loop:

Thứ tự thực thi được quyết định bởi 3 thành phần chính: **Call Stack**, **Microtask Queue** (Promise) và **Macrotask Queue** (setTimeout).
- Code đồng bộ (1, 4): Được đẩy vào Call Stack và thực thi ngay lập tức từ trên xuống dưới.
- Microtask Queue (3, 6): Chứa các callback của Promise. Event Loop sẽ ưu tiên chạy toàn bộ hàng đợi Microtask ngay sau khi code đồng bộ kết thúc. Do đó, 3 và 6 chạy ngay sau 1 và 4.
- Macrotask Queue (2, 7, 5): Chứa các callback của setTimeout. Chạy sau khi Microtask Queue đã rỗng hoàn toàn.

### Câu A2 (5đ) — Fetch API
Giải thích từng dòng code:
- async function getData() {: Khai báo một hàm bất đồng bộ (async), cho phép sử dụng từ khóa await bên trong.
- try {: Bắt đầu khối lệnh chứa code có thể phát sinh lỗi.
- const response = await fetch("https://api.example.com/data");: Gửi một yêu cầu (request) mạng đến URL được chỉ định và chờ (await) cho đến khi nhận được phản hồi (response).
- if (!response.ok) {: Kiểm tra xem phản hồi có thành công (mã trạng thái HTTP từ 200-299) hay không.
- throw new Error(HTTP ${response.status});: Nếu phản hồi không thành công, tự tạo ra một lỗi mới với thông báo chứa mã trạng thái lỗi (ví dụ: HTTP 404). Lệnh throw này sẽ lập tức đẩy luồng code xuống khối catch.
- const data = await response.json();: Đọc nội dung phản hồi (body) và chờ (await) quá trình giải mã luồng dữ liệu (stream) đó thành một object JavaScript.
- return data;: Trả về dữ liệu đã lấy được.
- catch (error) {: Khối này sẽ bắt (hứng) bất kỳ lỗi nào xảy ra trong khối try.
- console.error("Failed:", error.message);: In ra bảng điều khiển (console) thông báo lỗi.
- return null;: Trả về null để báo hiệu rằng việc lấy dữ liệu đã thất bại, giúp code gọi hàm này không bị sập.
#### Trả lời 4 câu hỏi:
1. fetch trả về gì? Tại sao cần await?
- fetch luôn trả về một Promise (lời hứa sẽ trả về một đối tượng Response trong tương lai).
- Cần await để ra lệnh cho JavaScript "tạm dừng" tại dòng code đó, đợi cho đến khi cái Promise kia thực sự hoàn thành (nhận được gói tin Response từ server) rồi mới gán vào biến response.
2. 2. response.ok — Khi nào false? Liệt kê 3 status codes tương ứng.
- response.ok mang giá trị false khi mã trạng thái HTTP (status code) nằm ngoài khoảng 200-299 (tức là yêu cầu bị lỗi).
- 3 ví dụ status codes khi false:
    + 404 (Not Found - Không tìm thấy tài nguyên).
    + 500 (Internal Server Error - Lỗi hệ thống máy chủ).
    + 403 (Forbidden - Không có quyền truy cập).

3. response.json() — Tại sao cần await lần nữa?
- Phương thức .json() không trả về dữ liệu ngay lập tức mà nó phải đọc luồng dữ liệu (data stream) tải về từ mạng và phân tích cú pháp (parse). Quá trình này mất thời gian nên nó cũng trả về một Promise.
- Do đó, cần await lần thứ 2 để đợi quá trình đọc và biên dịch cục dữ liệu đó thành JSON/Object JS hoàn tất.
4. try...catch — Catch những lỗi gì?
- Network error: Lỗi rớt mạng, server sập không thể kết nối, CORS bị chặn (do bản thân fetch thất bại sinh ra lỗi).
- Lỗi 404, 500: Bắt được là nhờ lệnh throw new Error(...) mà ta tự viết ở trên (Lưu ý: Nếu không có khối if (!response.ok) throw... thì fetch sẽ không tự nhảy vào catch đối với các lỗi 400/500).
- JSON parse error: Lỗi khi dữ liệu trả về không phải là chuẩn JSON (ví dụ server trả về HTML, hoặc JSON bị hỏng), hàm .json() sẽ bị lỗi (reject) và nhảy vào catch.

### Câu A3 (5đ) — Promise States

Vẽ sơ đồ 3 trạng thái của Promise (`Pending → Fulfilled`, `Pending → Rejected`).
1. Sơ đồ 3 trạng thái của Promise: 
```plaintext
                    ↗ [Fulfilled] (Thành công) -> dùng .then()
 [Pending] (Đang chờ)
                    ↘ [Rejected]  (Thất bại)   -> dùng .catch()
```

Giải thích: Callback Hell là gì?
- Callback Hell (hay Kim tự tháp diệt vong - Pyramid of Doom) là tình trạng các hàm callback bị lồng vào nhau quá nhiều lớp (nested callbacks) để xử lý các tác vụ bất đồng bộ tuần tự. Việc này khiến code bị phình to theo chiều ngang, cực kỳ khó đọc, khó bảo trì và khó xử lý lỗi.
Viết ví dụ 4 cấp:
```javascript
// Các callback lồng nhau liên tục để chờ kết quả của bước trước
getUser(1, function(user) {
    getOrders(user.id, function(orders) {
        getOrderDetails(orders[0].id, function(details) {
            processPayment(details.amount, function(status) {
                console.log("Trạng thái thanh toán: " + status);
            });
        });
    });
});
``` 
callback hell → Refactor thành async/await: 
```javascript
// Viết code bất đồng bộ trông giống như code đồng bộ (phẳng hơn, dễ đọc hơn)
async function handlePayment(userId) {
    try {
        const user = await getUser(userId);
        const orders = await getOrders(user.id);
        const details = await getOrderDetails(orders[0].id);
        const status = await processPayment(details.amount);
        
        console.log("Trạng thái thanh toán: " + status);
    } catch (error) {
        console.error("Có lỗi xảy ra ở một trong các bước:", error);
    }
}

handlePayment(1);
```


