# 📋 PHIẾU BÀI TẬP 10: ASYNC JAVASCRIPT & API INTEGRATION

**Trường Đại học Thủy Lợi (TLU) - Khoa Hệ thống Thông tin**

## 👤 Thông tin sinh viên
- **Họ và tên:** Trần Đức Cơ
- **Mã sinh viên:** [2251161959]
- **Lớp:** [64HTTT2]

---

## 📝 Tổng quan dự án
Repository này chứa bài làm cho Phiếu bài tập 10. Trọng tâm của dự án là làm việc với **Bất đồng bộ trong JavaScript (Async JS)** và **Tích hợp API thực tế**. Thông qua 4 mini-app, dự án áp dụng các kiến thức về Event Loop, Fetch API, Promise (all, allSettled) cũng như cú pháp `async/await`. Đặc biệt, mỗi ứng dụng đều được xử lý triệt để 3 trạng thái bắt buộc trong quá trình gọi dữ liệu: Loading (Đang tải), Success (Thành công), và Error (Lỗi mạng/API).

### 📁 Cấu trúc thư mục (Folder Structure)

```text
PBT_10_JS_Async_API/
├── dashboard/                  # Bài B4: Multi-API Dashboard (Promise.allSettled)
│   ├── app.js
│   ├── index.html
│   ├── README.md               # Tài liệu chi tiết cho app Dashboard
│   └── style.css
├── gallery/                    # Bài B3: Infinite Scroll Gallery (IntersectionObserver)
│   ├── app.js
│   ├── index.html
│   ├── README.md               # Tài liệu chi tiết cho app Gallery
│   └── style.css
├── screenshots/                # Chứa ảnh chụp minh chứng 3 trạng thái của từng app
│   ├── error_state_B1.png      # Trạng thái lỗi mạng/API
│   ├── error_state_B2.png
│   ├── error_state_B3.png
│   ├── error_state_B4.png
│   ├── loading_state_B1.png    # Trạng thái đang tải (Skeleton/Spinner)
│   ├── loading_state_B2.png
│   ├── loading_state_B3.png
│   ├── loading_state_B4.png
│   ├── success_state_B1.png    # Trạng thái gọi dữ liệu thành công
│   ├── success_state_B2.png
│   ├── success_state_B3.png
│   ├── success_state_B3(2).png
│   └── success_state_B4.png
├── user_directory/             # Bài B2: Quản lý người dùng CRUD (RESTful API)
│   ├── app.js
│   ├── index.html
│   ├── README.md               # Tài liệu chi tiết cho app User Directory
│   └── style.css
├── Video_Demo/                 # Chứa link file video thực hành
│   └── link.txt
├── weather_app/                # Bài B1: Ứng dụng thời tiết (wttr.in / Open-Meteo)
│   ├── app.js
│   ├── index.html
│   ├── README.md               # Tài liệu chi tiết cho app Weather
│   └── style.css
├── answers.md                  # File trả lời lý thuyết & Error Handling Strategy
└── README.md                   # Tài liệu hướng dẫn dự án chung (File này)
```
### 🛠️ Hướng dẫn Setup & Chạy dự án
1. Clone repository về máy local:
    git clone [Điền link git repository ]
2. Mở thư mục dự án:
    cd [Tên thư mục dự án]
3. Chạy dự án
- Xem trang web:
    + Sử dụng Visual Studio Code, cài đặt extension Live Server.
    + Di chuyển vào từng thư mục ứng dụng (weather_app, user_directory, gallery, dashboard).
    + Click chuột phải vào file index.html và chọn Open with Live Server.
    + Mở DevTools (F12) -> tab Network (để giả lập Offline/Slow 3G test Error state) và tab Console để theo dõi kết quả trả về từ API.
4. Screenshots (Kết quả thực hành):PBT_10_JS_Async_API\screenshots