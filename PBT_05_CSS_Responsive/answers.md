# 📋 PHIẾU BÀI TẬP 05
# **CSS RESPONSIVE & SCSS — Responsive Design, Media Queries, Sass**

## PHẦN A — KIỂM TRA ĐỌC HIỂU (20 điểm)

### Câu A1 (5đ) — Viewport & Mobile-First
1. Viết chính xác thẻ `<meta viewport>` chuẩn. Giải thích từng thuộc tính.
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- width=device-width: Thiết lập chiều rộng của trang web khớp với chiều rộng màn hình của thiết bị.
- initial-scale=1.0: Thiết lập mức độ phóng đại ban đầu khi trang vừa được tải lần đầu tiên.

2. Nếu THIẾU thẻ này, iPhone sẽ hiển thị trang web như thế nào? (Đọc chương 13)
- iPhone sẽ giả định trang web có chiều rộng 980px (như desktop) và tự động thu nhỏ lại để vừa màn hình. Kết quả là chữ sẽ trở nên bé xíu, nút bấm chồng chéo và người dùng phải zoom in liên tục để đọc.

3. Mobile-First và Desktop-First khác nhau thế nào? Viết ví dụ CSS cho mỗi cách với breakpoint 768px. Tại sao Mobile-First được khuyên dùng?
- Mobile-First: viết CSS cho mobile trước, dùng @media (min-width) cho màn hình lớn , viết CSS cho mobile trước, dùng @media (min-width) cho màn hình lớn
- Desktop-First: viết CSS cho desktop trước, dùng @media (max-width) cho màn hình nhỏ, Cố gắng thu nhỏ/ẩn bớt các thành phần desktop
- Ví dụ:
- Mobile-First:
```css 
/* Mặc định cho Mobile */
.container { width: 100%; }

@media (min-width: 768px) {
    /* Cho Tablet/Desktop */
    .container { width: 750px; }
}
```
- Deskttop-First:
```css
/* Mặc định cho Desktop */
.container { width: 750px; }

@media (max-width: 768px) {
    /* Cho Mobile */
    .container { width: 100%; }
}
```
- Mobile_first được khuyên dùng vì: mobile tải ít CSS hơn, không phải xử lý các style phức tạp của desktop, buộc lập trình viên ưu tiên những gì quan trọng nhất cho không gian hẹp, SEO 

### Câu A2: 
### Breakpoints chuẩn

| Tên | Min-width | Thiết bị điển hình | Số cột sản phẩm (Ví dụ)|
|---|---|---|---|
| **Mobile** | < 576px | iPhone SE, các điện thoại nhỏ |1|
| **Mobile L** | ≥ 576px | iPhone Plus, điện thoại ngang |2|
| **Tablet** | ≥ 768px | iPad dọc, tablet |2|
| **Desktop** | ≥ 992px | Laptop nhỏ |3|
| **Desktop L** | ≥ 1200px | Desktop, laptop lớn |4|
| **Desktop XL** | ≥ 1400px | Màn hình 4K, ultrawide |5/6|

---

### Câu A3: 

| Chiều rộng màn hình | `.container` width |
|---------------------|--------------------|
| 375px (iPhone SE) | 100% |
| 600px | 540px |
| 800px | 720px |
| 1000px | 960px |
| 1400px | 1140px |

### Câu A4: 
Đọc chương 16. Giải thích 4 tính năng chính của SCSS và cho ví dụ:
1. Variables (`$primary-color`)
- Giúp lưu trữ các giá trị (màu sắc, font chữ, khoảng cách) vào một cái tên gợi nhớ để tái sử dụng. Khi cần thay đổi, bạn chỉ cần sửa một nơi duy nhất. Ví dụ:
```
$primary-color: #7c3aed;
$spacing-lg: 24px;

.button {
    background-color: $primary-color;
    padding: $spacing-lg;
}
```
2. Nesting (viết CSS lồng nhau)
- Cho phép viết các selector con bên trong selector cha, giúp cấu trúc file CSS trông giống với cấu trúc phân cấp của HTML, dễ đọc và quản lý hơn. Ví dụ:
```
.navbar {
    background: black;
    .nav-item {
        display: inline-block;
        &:hover { color: $primary-color; } // & đại diện cho .nav-item
    }
}
```
3. Mixins (`@mixin`, `@include`)
- Đóng vai trò như một "hàm" trong CSS. Bạn định nghĩa một nhóm các thuộc tính bằng @mixin và gọi lại chúng bằng @include. Mixin cực kỳ hữu ích cho các đoạn code lặp lại nhiều lần hoặc xử lý responsive. Ví dụ:
```
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    @include flex-center;
}
```
4. `@extend` / Inheritance
- Cho phép một selector chia sẻ (kế thừa) lại toàn bộ các thuộc tính của một selector khác. Điều này giúp giảm thiểu việc lặp lại code và giữ cho CSS gọn gàng. Ví dụ: 
```
.message-shared { border: 1px solid #ccc; padding: 10px; }

.success {
    @extend .message-shared;
    border-color: green;
}
```
Tại sao trình duyệt KHÔNG đọc được file `.scss`?
- Vì trình duyệt được thiết kế để hiểu cấu trúc css chuẩn , scss chứa các kí tự và cấu trúc đặc biệt (@,$, lồng nhau) nên trình duyệt không thể đọc được file scss

Cần bước gì để chuyển SCSS → CSS?
- Compilation (Biên dịch) cần sử dụng một công cụ (Compiler) để quét file SCSS và "dịch" nó sang file CSS thuần. 






