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




