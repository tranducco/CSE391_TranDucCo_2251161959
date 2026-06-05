# 👤 User Directory CRUD (Bài B2)

Ứng dụng quản lý danh sách người dùng với đầy đủ các thao tác Thêm, Đọc, Sửa, Xóa (CRUD) và Tìm kiếm, được viết hoàn toàn bằng Vanilla JavaScript với cấu trúc phân lớp (API Layer & UI Layer).

##  Công nghệ & API sử dụng
- Công nghệ: HTML5, CSS3, JavaScript (ES6+). Không sử dụng bất kỳ thư viện hay framework nào.
- API sử dụng: [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) - Một Fake REST API miễn phí.
  - Lưu ý: Vì đây là API giả lập, các method `POST`, `PUT`, `DELETE` sẽ trả về response thành công (status 200/201) nhưng dữ liệu không thực sự lưu vào database của họ. Do đó, ứng dụng đã xử lý cập nhật state trực tiếp trên mảng `usersData` ở client-side để giao diện phản hồi chính xác và ngay lập tức.

## Cách chạy ứng dụng
1. Tải thư mục `user_directory/` về máy tính.
2. Mở trực tiếp file `index.html` bằng bất kỳ trình duyệt web nào (Chrome, Edge, Firefox...).
3. Ứng dụng chạy trực tiếp trên trình duyệt, không cần cài đặt Node.js hay Local Server.

##  Chức năng đã triển khai
- READ: Hiển thị danh sách người dùng ban đầu từ API.
- CREATE: Thêm người dùng mới (dữ liệu hiển thị ngay lập tức lên đầu danh sách).
- UPDATE: Điền thông tin cũ vào form, cho phép cập nhật lại Tên và Email.
- DELETE: Xóa người dùng (có hộp thoại Confirm xác nhận trước khi xóa).
- SEARCH: Thanh tìm kiếm Real-time lọc người dùng theo tên hoặc email.
- UX States: - Hiển thị hiệu ứng `Loading Skeleton` khi đang chờ tải dữ liệu từ API.
  - Hiển thị `Toast Notification` (thông báo góc dưới màn hình) khi thao tác thành công hoặc gặp lỗi.