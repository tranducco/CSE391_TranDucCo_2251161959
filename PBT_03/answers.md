Câu A1: 
1. Inline CSS (Nhúng trực tiếp)
- Ví dụ: <h1 style="color: blue;">Hello</h1>
- Ưu điểm: Nhanh, độ ưu tiên cao nhất để ghi đè (override).
- Nhược điểm: Khó quản lý, không tái sử dụng được code, làm rối file HTML.
- Khi nào dùng: Khi cần fix nhanh hoặc style động bằng JavaScript.

2. Internal CSS (Dùng thẻ <style>)
- Ví dụ: <style> h1 { color: blue; } </style>
- Ưu điểm: Quản lý tập trung style của một trang duy nhất.
- Nhược điểm: Chỉ có tác dụng trên 1 file HTML, làm file HTML nặng hơn.
- Khi nào dùng: Trang đơn (Landing Page) hoặc khi chỉ cần style riêng cho 1 trang.

3. External CSS (Dùng file .css riêng)
- Ví dụ: <link rel="stylesheet" href="style.css">
- Ưu điểm: Tái sử dụng cho toàn website, dễ bảo trì, trình duyệt có thể cache giúp tải nhanh hơn.
- Nhược điểm: Tốn thêm 1 request HTTP để tải file.
- Khi nào dùng: Cách chuẩn mực cho mọi dự án thực tế.

* Trả lời câu hỏi thêm: "Inline CSS" thắng vì nó có độ ưu tiên (specificity) cao nhất trong 3 cách.

Câu A2: 
### Câu A2: CSS Selectors - Dự đoán kết quả
---
1. h1                   → Chọn: "ShopTLU"
2. .price               → Chọn: "25.990.000đ" và "45.990.000đ"
3. #app header          → Chọn: Cụm Header chứa "ShopTLU" và các thẻ "nav"
4. nav a:first-child    → Chọn: "Home"
5. .product.featured h2 → Chọn: "MacBook Pro"
6. article > p          → Chọn: "25.990.000đ", "Mô tả sản phẩm..." (của cả 2 máy)
7. a[href="/"]          → Chọn: "Home"
8. .top-bar.dark h1     → Chọn: "ShopTLU"

Câu A3: 
### Câu A3: Box Model - Tính toán kích thước
---
Trường hợp 1: content-box
- Chiều rộng hiển thị = 400 (width) + 40 (padding) + 10 (border) = 450px
- Không gian chiếm trên trang = 450 (hiển thị) + 20 (margin) = 470px

Trường hợp 2: border-box
- Chiều rộng hiển thị = 400px (Bằng đúng width khai báo)
- Kích thước content thực tế = 400 - 40 (padding) - 10 (border) = 350px
- Không gian chiếm trên trang = 400 (hiển thị) + 20 (margin) = 420px

Trường hợp 3: Margin collapse
- Khoảng cách giữa box-a và box-b = 40px
- Giải thích: Vì đây là hiện tượng gộp lề dọc (Margin Collapse), trình duyệt sẽ chọn giá trị LỚN NHẤT giữa hai margin cạnh nhau (40px > 25px) chứ không cộng dồn chúng lại.