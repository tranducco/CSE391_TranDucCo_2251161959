Câu A1: 
---
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

Câu B2:
#### Phần 1 — Chứng minh content-box vs border-box:
* **Hộp 1 (content-box):** chiều rộng thực tế = **350px** (đo từ DevTools)
* **Hộp 2 (border-box):** chiều rộng thực tế = **300px** (đo từ DevTools)

**Giải thích sự khác biệt:**
- **Hộp 1 (content-box):** Thuộc tính `width: 300px` chỉ áp dụng cho phần nội dung (content). Do đó, khi render thực tế, trình duyệt sẽ cộng thêm padding (20px trái + 20px phải) và border (5px trái + 5px phải). Tổng kích thước thực tế = 300 + 40 + 10 = **350px**.
- **Hộp 2 (border-box):** Thuộc tính `width: 300px` bao gồm cả nội dung, padding và border. Trình duyệt tự động ép (shrink) không gian của phần nội dung bên trong lại (còn 250px) để đảm bảo tổng kích thước của toàn bộ hộp hiển thị ra ngoài đúng bằng **300px** như đã khai báo.

#### Phần 2 — Layout 3 cột:
**Tính toán cho trường hợp KHÔNG dùng `border-box` (chế độ `content-box` mặc định):**
Ở chế độ này, padding sẽ cộng dồn ra ngoài width. Ta có chiều rộng thực tế của từng cột là:
* **Cột trái:** 250px (width) + 15px (padding-left) + 15px (padding-right) = **280px**
* **Cột giữa:** 500px (width) + 20px (padding-left) + 20px (padding-right) = **540px**
* **Cột phải:** 250px (width) + 15px (padding-left) + 15px (padding-right) = **280px**

**=> Tổng kích thước 3 cột trên giao diện:** 280px + 540px + 280px = **1100px**.
Vì tổng 3 cột (1100px) lớn hơn kích thước của container (1000px), layout sẽ bị vỡ (tràn ra ngoài nếu dùng flexbox, hoặc bị rớt xuống dòng nếu dùng float). Bắt buộc phải thêm `box-sizing: border-box` để layout vừa vặn chính xác 1000px. 

### Bài B3 — Specificity Battle

#### 1. Liệt kê 10 rules + specificity score (Từ thấp đến cao)
| STT | CSS Selector | Specificity Score (ID, Class, Element) |
| :--- | :--- | :--- |
| 1 | `*` | 0,0,0 |
| 2 | `p` | 0,0,1 |
| 3 | `.text` | 0,1,0 |
| 4 | `.text.highlight` | 0,2,0 |
| 5 | `p.text.highlight` | 0,2,1 |
| 6 | `#demo` | 1,0,0 |
| 7 | `p#demo` | 1,0,1 |
| 8 | `#demo.text` | 1,1,0 |
| 9 | `#demo.text.highlight` | 1,2,0 |
| 10 | `p#demo.text.highlight` | 1,2,1 |

#### 2. Element cuối cùng hiển thị màu gì? Tại sao?
- **Màu hiển thị:** **Màu đỏ (red)**.
- **Tại sao:** Trình duyệt áp dụng quy tắc CSS dựa trên độ ưu tiên (Specificity). Trong 10 quy tắc trên, bộ chọn `p#demo.text.highlight` có điểm specificity cao nhất là **1,2,1** (bao gồm 1 ID, 2 Classes và 1 Element). Do đó, màu của nó sẽ "chiến thắng" và ghi đè tất cả các quy tắc còn lại.

#### 3. Chụp screenshot kết quả
ảnh specificity.png

#### 4. Thay đổi thứ tự rules trong CSS file. Kết quả có đổi không? Giải thích.
- **Kết quả:** **KHÔNG ĐỔI**.
- **Giải thích:** Thứ tự xuất hiện (Cascade/Source order) trong file CSS **chỉ có ý nghĩa khi các rule có cùng mức điểm Specificity**. Trong bài tập này, cả 10 rule đều có điểm số Specificity hoàn toàn khác biệt nhau. Vì vậy, trình duyệt luôn luôn chọn rule có điểm cao nhất (1,2,1 - màu đỏ) để áp dụng, bất kể bạn đặt nó ở dòng đầu tiên hay dòng cuối cùng trong file `specificity.css`.
