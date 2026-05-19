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

## Câu B3: 
Lệnh Compile SCSS:
1. Sử dụng Extension trong VS Code
2. Cài đặt extension Live Sass Compiler.
3. Mở file style.scss.
4. Bấm nút "Watch Sass" ở thanh trạng thái (status bar) dưới cùng của VS Code. File style.css sẽ tự động được tạo và liên tục cập nhật.

## Câu C1:
1. Trang web youtube khi mở 3 dạng: Mobile, Tablet, Desktop ( ảnh trong folder screenshots)
2. Phân tích Layout
- Navigation (Thanh điều hướng):
    + Desktop & Tablet: Có nút Hamburger (☰) góc trái để mở/đóng Sidebar. Thanh tìm kiếm dài nằm ở giữa
    + Mobile: Thanh tìm kiếm dài biến mất (chỉ còn lại icon kính lúp). Xuất hiện thanh điều hướng dưới đáy màn hình (Bottom Navigation: Trang chủ, Shorts, Kênh đăng ký...)
- Lưới content (Video Grid) thay đổi mấy cột?
    + Desktop: 4 đến 5 cột video trên một hàng (tùy việc Sidebar đang mở hay đóng)
    + Tablet: 2 đến 3 cột
    + Mobile: 1 cột duy nhất (ảnh thumbnail của video phóng to tràn viền)
- Elements bị ẩn (Mobile):
    + Toàn bộ menu Sidebar bên trái
    + Thanh tìm kiếm mở rộng (text input)
- Font size:
    + Có thay đổi nhẹ. Tiêu đề video và tên kênh trên Mobile được thu nhỏ lại (khoảng 12px-14px) để tránh việc chữ bị rớt thành quá nhiều dòng, giúp tiết kiệm diện tích.
3. @media mà trang dùng : ảnh media_queries_C1.png

## Câu C2:

1. Phân tích Chiến lược Layout & Wireframe
    - Màn hình Mobile (< 768px) Bị ẩn: Không ẩn thành phần nội dung nào để đảm bảo trải nghiệm đầy đủ, chỉ ẩn số điện thoại ở Header nếu màn hình quá nhỏ (chuyển thành icon gọi) hoặc giữ nguyên dạng text nhỏ.Vị trí Form đặt bàn: Nằm ở phía dưới Grid ảnh món ăn và trên Bản đồ Google Maps. Sắp xếp (Dọc 1 cột): Header (Logo + Phone) -> Hero Image -> Grid ảnh món ăn (1 cột) ->  Form đặt bàn -> Bản đồ Maps -> Footer
    - Màn hình Tablet (768px - 1023px): Grid ảnh món ăn: Hiển thị 2 cột x 3 hàng hoặc 3 cột x 2 hàng (tối ưu nhất là 2 cột để ảnh đủ lớn). Vị trí Bản đồ: Nằm song song (chia đôi layout) với Form đặt bàn hoặc nằm toàn chiều ngang ngay phía dưới Form. Ở đây chọn phương án tối ưu: Form và Bản đồ chia đôi thành 2 cột cạnh nhau để tiết kiệm không gian chiều dọc
    - Màn hình Desktop (≥ 1024px) Số lượng cột: Layout tổng thể sử dụng 12 cột hệ thống hoặc chia vùng rõ rệt. Sidebar: Không cần thiết phải có Sidebar tách biệt truyền thống. Thay vào đó, phần Form đặt bàn đóng vai trò như một "Sidebar cố định" nằm bên cạnh cụm (Hero + Grid ảnh) hoặc đi kèm với Bản đồ ở hàng dưới. Bố cục tối ưu: Grid ảnh món ăn chuyển thành 3 cột x 2 hàng. Phần dưới chia thành 2 cột lớn: Bên trái là Form đặt bàn (chiếm 50-60%), bên phải là Bản đồ Google Maps (chiếm 40-50%).

2. CSS Skeleton (Mobile-First Grid Layout):
```html
<div class="wrapper">
  <header class="header">Header (Logo + Phone)</header>
  <section class="hero">Hero Image</section>
  <section class="menu-grid">
    <div class="dish">1</div><div class="dish">2</div><div class="dish">3</div>
    <div class="dish">4</div><div class="dish">5</div><div class="dish">6</div>
  </section>
  <section class="booking-form">Form đặt bàn</section>
  <section class="map">Google Maps</section>
  <footer class="footer">Footer</footer>
</div>
```
```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.header, .hero, .menu-grid, .booking-form, .map, .footer {
  width: 100%;
}
.menu-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}

/* 2. TABLET BREAKPOINT (≥ 768px) */
@media (min-width: 768px) {
  .menu-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
  .header, .hero, .menu-grid, .footer {
    grid-column: span 2;
  }
}

/*3. DESKTOP BREAKPOINT (≥ 1024px)*/
@media (min-width: 1024px) {
  .wrapper {
    grid-template-columns: 3fr 2fr; 
  }

  .header, .hero, .menu-grid, .footer {
    grid-column: span 2;
  }
  .menu-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}







