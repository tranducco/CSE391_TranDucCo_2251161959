# 📋 PHIẾU BÀI TẬP 05: CSS RESPONSIVE & SCSS — Responsive Design, Media Queries, Sass

**Trường Đại học Thủy Lợi (TLU) - Khoa Hệ thống Thông tin**

## 👤 Thông tin sinh viên
- **Họ và tên:** Trần Đức Cơ
- **Mã sinh viên:** [2251161959]
- **Lớp:** [64HTTT2]

---

## 📝 Tổng quan dự án
Repository này chứa bài làm cho Phiếu bài tập 05. Mục tiêu chính của dự án là áp dụng tư duy thiết kế **Mobile-First**, sử dụng **Media Queries** để xây dựng trang web tương thích với nhiều kích thước màn hình (Desktop, Tablet, Mobile). Đồng thời, dự án cũng áp dụng **SCSS (Sass)** để tối ưu hóa và quản lý mã CSS thông qua Variables, Nesting, Mixins và Partials, cùng với việc thực hành các hiệu ứng **CSS Transitions & Animations**.

### 📁 Cấu trúc thư mục (Folder Structure)

```text
PBT_05_CSS_Responsive/
├── screenshots/                # Chứa ảnh chụp màn hình minh chứng bài tập
│   ├── media_queries_C1.png
│   ├── Responsive_Desktop_B1.png
│   ├── Responsive_Mobile_B1.png
│   ├── Responsive_Tablet_B1.png
│   ├── Youtube_Desktop_C1.png
│   ├── Youtube_Mobile_C1.png
│   └── Youtube_Tablet_C1.png
├── scss/                       # Chứa mã nguồn SCSS và file CSS đã được biên dịch
│   ├── _components.scss        # SCSS Partial: style cho các thành phần (cards, buttons...)
│   ├── _mixins.scss            # SCSS Partial: chứa các mixins dùng chung
│   ├── _variables.scss         # SCSS Partial: chứa biến màu sắc, font, breakpoints
│   ├── style.css               # File CSS được biên dịch từ style.scss
│   ├── style.css.map           # File map hỗ trợ debug SCSS trên trình duyệt
│   └── style.scss              # File SCSS chính import các partials (Bài B3)
├── animations.css              # Style chứa các hiệu ứng Transitions & Keyframes
├── animations.html             # Bài B2: Trang thực hành hiệu ứng Animations
├── answers.md                  # File trả lời lý thuyết & phân tích (Phần A, C)
├── README.md                   # Tài liệu đọc hướng dẫn dự án (File này)
├── responsive.css              # Style cho trang sản phẩm Responsive
└── responsive.html             # Bài B1: Trang sản phẩm Responsive hoàn chỉnh
```
### 🛠️ Hướng dẫn Setup & Chạy dự án
1. Clone repository về máy local:
    git clone [Điền link git repository ]
    
2. Mở thư mục dự án:
    cd [Tên thư mục dự án]

3. Chạy dự án:
- Xem trang web:
    + Sử dụng Visual Studio Code, cài đặt extension Live Server.
    + Click chuột phải vào file responsive.html hoặc animations.html và chọn Open with Live Server.
    + Mở DevTools (F12) -> Bật Device Toolbar để kiểm tra giao diện trên các thiết bị Mobile, Tablet, và Desktop.
4. Biên dịch SCSS (dành cho Bài B3):
- Nếu bạn muốn chỉnh sửa code SCSS trong thư mục /scss, bạn cần sử dụng extension Live Sass Compiler trên VS Code.
- Nhấn nút Watch Sass ở thanh trạng thái bên dưới để tự động biên dịch style.scss sang style.css mỗi khi lưu file.
4. Screenshots (Kết quả thực hành):PBT_05_CSS_Responsive\screenshots
