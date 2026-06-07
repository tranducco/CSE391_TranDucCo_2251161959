# Multi-API Dashboard (Bài B4)

Dashboard tổng hợp dữ liệu thời gian thực từ 3 nguồn API khác nhau, minh họa cách xử lý bất đồng bộ song song trong JavaScript.

## Kỹ thuật áp dụng
- `Promise.allSettled()`: Phương thức cốt lõi được sử dụng để gọi đồng thời 3 API. Ưu điểm của `allSettled` là khi 1 API bị từ chối (bị sập, sai URL), các API còn lại vẫn sẽ được resolve và hiển thị bình thường.
- Tính toán hiệu năng: Sử dụng `Date.now()` để đo lường chính xác thời gian hoàn thành toàn bộ các network requests.
- Kiểm soát trạng thái: Cung cấp đầy đủ trạng thái UI: `Global Loading` (khi mới fetch), `Widget Loading` (spinner bên trong card) và `Widget Error` (thông báo lỗi riêng biệt nếu API thất bại).

## API Sử dụng
1. [Random User Generator](https://randomuser.me/) - Lấy danh sách 3 người dùng ngẫu nhiên.
2. [Dog API](https://dog.ceo/dog-api/) - Lấy 1 bức ảnh chó ngẫu nhiên.
3. [REST Countries](https://restcountries.com/) - Tra cứu thông tin quốc gia (Việt Nam).

## Cách chạy
Mở file `index.html` trực tiếp trên trình duyệt. Có thể nhấn nút Refresh All để gọi lại dữ liệu và xem sự thay đổi của thời gian Load (Data loaded in X ms).