# Infinite Scroll Gallery (Bài B3)

Ứng dụng hiển thị thư viện ảnh dạng lưới, tích hợp tính năng tự động tải thêm khi cuộn (Infinite Scroll) và tối ưu hóa hiệu suất bằng Lazy Loading.

##  Công nghệ & API
- Công nghệ: HTML5, CSS Grid, Vanilla JavaScript (IntersectionObserver).
- API: [Lorem Picsum](https://picsum.photos/) (`/v2/list`) - Trả về mảng thông tin hình ảnh kèm ID để render.

##  Tính năng nổi bật
1. Responsive Grid: Hiển thị 4 cột (Desktop), 2 cột (Tablet), và 1 cột (Mobile).
2. Infinite Scroll: Tự động gọi API lấy trang tiếp theo (`page++`) khi người dùng cuộn đến gần phần tử `#load-trigger` ở đáy trang.
3. Lazy Loading: Áp dụng `IntersectionObserver` thứ 2 để chỉ tải hình ảnh khi chúng chuẩn bị xuất hiện trên màn hình, giúp tiết kiệm băng thông.
4. Lightbox Modal: Bấm vào hình ảnh (dạng lưới cắt vuông) sẽ mở modal hiển thị ảnh với độ phân giải cao (`1200x800`).

## Cách chạy
- Tải thư mục `gallery/` về.
- Mở trực tiếp file `index.html` bằng trình duyệt web. Không cần cấu hình server.