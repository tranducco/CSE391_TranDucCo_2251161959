Ứng dụng xem thời tiết đơn giản sử dụng Vanilla JavaScript, Fetch API và LocalStorage.

##  Công nghệ sử dụng
- Ngôn ngữ: HTML5, CSS3, JavaScript (ES6+).
- API: [wttr.in](https://wttr.in) (`format=j1`) - API miễn phí trả về dữ liệu thời tiết dưới dạng JSON mà không cần đăng ký API Key. 

##  Cách chạy ứng dụng
1. Clone hoặc tải thư mục `weather_app/` về máy.
2. Mở file `index.html` trực tiếp bằng bất kỳ trình duyệt web nào (Chrome, Edge, Firefox...).
3. Không cần cài đặt Node.js hay bất kỳ server cục bộ nào.

##  Chức năng chính (Đã hoàn thành)
- Tìm kiếm thời tiết theo tên thành phố.
- Xử lý mượt mà 3 trạng thái: `Loading...`, `Success` và `Error`.
- Lưu trữ tối đa 5 lịch sử tìm kiếm gần nhất vào trình duyệt (`LocalStorage`).
- Tính năng click vào từ khóa trong lịch sử để tìm kiếm lại ngay lập tức.