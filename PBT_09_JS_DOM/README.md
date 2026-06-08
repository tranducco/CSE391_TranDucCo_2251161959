# 📋 PHIẾU BÀI TẬP 09: DOM MANIPULATION & EVENTS

**Trường Đại học Thủy Lợi (TLU) - Khoa Hệ thống Thông tin**

## 👤 Thông tin sinh viên
- **Họ và tên:** Trần Đức Cơ
- **Mã sinh viên:** [2251161959]
- **Lớp:** [64HTTT2]

---

## 📝 Tổng quan dự án
Repository này chứa bài làm cho Phiếu bài tập 09. Trọng tâm của bài tập là ứng dụng Vanilla JavaScript để tương tác trực tiếp với giao diện người dùng thông qua **DOM Manipulation** và xử lý sự kiện (**Events**). Dự án bao gồm 4 mini-app hoạt động độc lập trên trình duyệt, áp dụng các kỹ thuật quan trọng như Event Delegation, LocalStorage, Real-time Validation và DOM Keyboard Navigation.

### 📁 Cấu trúc thư mục (Folder Structure)

```text
PBT_09_JS_DOM/
├── form_validator/             # Bài B3: Hệ thống validate form real-time
│   ├── app.js
│   ├── index.html
│   └── style.css
├── keyboard_app/               # Bài B4: Ứng dụng tương tác qua phím tắt (Keyboard Shortcuts)
│   ├── app.js
│   ├── index.html
│   └── style.css
├── product_catalog/            # Bài B2: Danh sách sản phẩm tương tác (DOM render)
│   ├── app.js
│   ├── index.html
│   └── style.css
├── screenshots/                # Chứa ảnh chụp màn hình minh chứng các mini-app
│   ├── form_validator_B3.png
│   ├── form_validator_B3_(2).png
│   ├── keyboard_app_B4.png
│   ├── keyboard_app_B4_(2).png
│   ├── keyboard_app_B4_(3).png
│   ├── product_catalog_B2.png
│   ├── product_catalog_B2_(2).png
│   ├── product_catalog_B2_(3).png
│   ├── todo_app_B1.png
│   └── todo_app_B1_(2).png
├── todo_app/                   # Bài B1: Ứng dụng Todo List hoàn chỉnh
│   ├── app.js
│   ├── index.html
│   └── style.css
├── answers.md                  # File trả lời lý thuyết, Debug DOM & Performance (Phần A, C)
└── README.md                   # Tài liệu hướng dẫn dự án (File này)
```
### 🛠️ Hướng dẫn Setup & Chạy dự án
1. Clone repository về máy local:
    git clone [Điền link git repository ]
2. Mở thư mục dự án:
    cd [Tên thư mục dự án]
3. Chạy dự án
- Xem trang web:
    + Sử dụng Visual Studio Code, cài đặt extension Live Server.
    + Di chuyển vào từng thư mục ứng dụng (todo_app, product_catalog, form_validator, keyboard_app).
    + Click chuột phải vào file index.html và chọn Open with Live Server.
    + Mở DevTools (F12) tab Console để theo dõi log và quá trình xử lý DOM.
4. Screenshots (Kết quả thực hành):
E:\Hoc_Web\CSE391_TranDucCo_2251161959\PBT_09_JS_DOM\screenshots