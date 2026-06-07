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


## PHẦN C — PHÂN TÍCH 

### Câu C1  — Error Handling Strategy

Bạn xây dựng app E-Commerce gọi nhiều APIs. Thiết kế **chiến lược xử lý lỗi**:

1. **Network errors** (mất mạng giữa chừng) → Xử lý thế nào?
- Chiến lược: fetch sẽ ném ra TypeError. Xử lý bằng cách đưa vào khối catch, đồng thời kết hợp navigator.onLine để lắng nghe sự kiện offline/online của window, từ đó hiện một Banner/Toast đỏ: "Bạn đang ngoại tuyến. Vui lòng kiểm tra lại kết nối mạng"
2. **API errors** (server trả 500, 404, 429 Too Many Requests) → Xử lý từng loại
- 404 (Not Found): Điều hướng người dùng sang trang 404 Không tìm thấy hoặc hiện thông báo "Sản phẩm không tồn tại"
- 500 (Internal Server Error): Lỗi từ phía máy chủ. Thông báo cho user: "Hệ thống đang bảo trì hoặc gặp sự cố, vui lòng thử lại sau". Tuyệt đối không hiện log kỹ thuật cho user
- 429 (Too Many Requests): Server chặn vì spam request. Xử lý bằng cách hiện thông báo "Bạn thao tác quá nhanh, vui lòng đợi [X] giây" và disable nút bấm (thường kết hợp cơ chế Exponential Backoff để thử lại)
3. **Timeout** (API chậm > 10 giây) → Viết code `fetchWithTimeout(url, ms)`
Sử dụng AbortController để ngắt kết nối chủ động:
```javascript
async function fetchWithTimeout(url, ms = 10000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), ms);

    try {
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId); // Xóa timer nếu thành công sớm
        return response;
    } catch (error) {
        if (error.name === 'AbortError') {
            throw new Error(`Request quá hạn ${ms}ms`);
        }
        throw error; // Các lỗi network khác
    }
}
```
4. **Retry logic** (thử lại 3 lần nếu lỗi network) → Viết code `fetchWithRetry(url, maxRetries)`
- Dùng vòng lặp for để thực hiện lại request, trả về ngay nếu thành công:
```javascript
    async function fetchWithRetry(url, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP Lỗi ${response.status}`);
            return await response.json(); // Thành công thì thoát hàm
        } catch (error) {
            console.warn(`Lần thử ${i + 1} thất bại...`);
            if (i === maxRetries - 1) throw new Error("Đã thử tối đa số lần nhưng vẫn lỗi.");
            // Có thể thêm setTimeout ở đây để delay trước khi thử lại (Backoff)
        }
    }
}
```
### Câu C2 — Promise.all vs Promise.allSettled vs Promise.race
| Method | Khi nào resolve? | Khi nào reject? | Use case |
|--------|------------------|-----------------|----------|
| `.all()` | Khi tất cả các Promise đều resolve | Khi có bất kì 1 Promise nào reject (lỗi). | Tải trang thanh toán (cần có đồng thời thông tin user, giỏ hàng, phí ship) |
| `.allSettled()` | Khi tất cả các Promise đã hoàn tất (dù resolve hay reject) | Không bao giờ reject tổng thể (luôn trả về mảng kết quả) | Load Dashboard có nhiều widget độc lập (1 widget lỗi, cái khác vẫn hiện) |
| `.race()` | Ngay khi Promise đầu tiên resolve hoặc reject | Phụ thuộc vào Promise chạy xong đầu tiên | Ép timeout cho 1 API (Đua giữa fetch và một cái timer 5s) |
| `.any()` | Ngay khi Promise đầu tiên resolve thành công. | Chỉ khi tất cả các Promise đều bị reject. | Gọi ảnh/tài nguyên từ nhiều Server/CDN, cái nào tải xong trước thì lấy |

- Ví dụ Code thực tế:
+ Promise.all() - Scenario: Màn hình Checkout:
```javascript
    // Nếu 1 trong 3 API này lỗi, cả quá trình bị hủy để tránh user đặt hàng sai.
try {
    const [user, cart, shippingFees] = await Promise.all([
        fetch('/api/user/profile').then(r => r.json()),
        fetch('/api/cart/items').then(r => r.json()),
        fetch('/api/shipping/calculate').then(r => r.json())
    ]);
    renderCheckoutPage(user, cart, shippingFees);
} catch (error) {
    showError("Không thể tải thông tin thanh toán, vui lòng tải lại trang.");
}
```
+ Promise.allSettled() - Scenario: Load Widget Dashboard:
```javascript
const results = await Promise.allSettled([
    fetch('/api/weather'),
    fetch('/api/news'),
    fetch('/api/ads')
]);

results.forEach((result, index) => {
    if (result.status === 'fulfilled') renderWidget(index, result.value);
    else renderWidgetError(index, "Lỗi tải dữ liệu");
});
```
+ Promise.race() - Scenario: Request Timeout Override:
```javascript
// Ép API phải trả lời trong 3 giây, nếu không sẽ bị từ chối.
const fetchData = fetch('/api/heavy-data').then(r => r.json());
const timeout = new Promise((_, reject) => 
    setTimeout(() => reject(new Error("Timeout quá 3 giây")), 3000)
);

try {
    const result = await Promise.race([fetchData, timeout]);
    console.log("Dữ liệu lấy kịp thời gian:", result);
} catch (error) {
    console.error("Xử lý lỗi:", error.message);
}
```
+ Promise.any() - Scenario: Tải Video/Ảnh từ nhiều CDN:
```javascript
// Gửi request xin ảnh từ 3 máy chủ khác nhau, server nào phản hồi nhanh nhất và thành công thì lấy, bỏ qua server bị sập.
try {
    const fastImage = await Promise.any([
        fetch('https://cdn1.example.com/image.jpg').then(r => r.blob()),
        fetch('https://cdn2.example.com/image.jpg').then(r => r.blob()),
        fetch('https://cdn3.example.com/image.jpg').then(r => r.blob())
    ]);
    displayImage(fastImage);
} catch (error) {
    console.error("Cả 3 máy chủ CDN đều sập (AggregateError)");
}
```
