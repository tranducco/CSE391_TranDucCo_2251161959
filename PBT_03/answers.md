Câu A1: 
1. Inline CSS (Nhúng trực tiếp vào thuộc tính style)
Ví dụ code:
<h1 style="color: #2563eb; font-size: 32px;">Tiêu đề xanh</h1>
- Ưu điểm & Nhược điểm:
    + Ưu điểm: Nhanh chóng, có độ ưu tiên cao nhất, hữu ích khi muốn ghi đè (override) tạm thời.
    + Nhược điểm: Khó tái sử dụng, khó bảo trì, làm mã HTML trở nên rối rắm và không thể tận dụng bộ nhớ đệm (caching) của trình duyệt.
- Khi nào nên dùng: Chỉ dùng cho các trường hợp khẩn cấp, ghi đè tạm thời hoặc khi cần can thiệp style bằng JavaScript một cách trực tiếp.

2. Internal CSS (Sử dụng thẻ <style>)
Ví dụ code:
<head>
  <style>
    h1 { color: #2563eb; font-size: 32px; }
  </style>
</head>
- Ưu điểm & Nhược điểm:
    + Ưu điểm: Quản lý tập trung các style của một trang duy nhất, không cần gửi thêm request HTTP để tải file riêng.
    + Nhược điểm: Chỉ có tác dụng trên một trang web cụ thể, không thể dùng chung cho toàn bộ website, làm tăng dung lượng file HTML.
- Khi nào nên dùng: Dùng cho các bản mẫu (prototype) hoặc các trang web đơn lẻ (Single Page) có phong cách thiết kế riêng biệt.

3. External CSS (Sử dụng file .css riêng biệt)
- Ví dụ code:
<head>
  <link rel="stylesheet" href="styles.css">
</head>
/* Trong file styles.css */
h1 { color: #2563eb; font-size: 32px; }
- Ưu điểm & Nhược điểm:
    + Ưu điểm: Tách biệt hoàn toàn nội dung và giao diện, dễ bảo trì, tái sử dụng được cho nhiều trang, giúp trình duyệt tải nhanh hơn nhờ cơ chế caching.
    + Nhược điểm: Cần thêm một request HTTP để tải file (tuy nhiên điều này không còn là vấn đề lớn với công nghệ hiện nay).
- Khi nào nên dùng: Đây là chuẩn Production, được khuyến khích sử dụng cho mọi dự án thực tế.

- Nếu cùng một element áp dụng cả 3 cách, Inline CSS sẽ "thắng" (được ưu tiên hiển thị).
Giải thích:
- Trong CSS, các quy tắc được áp dụng dựa trên độ ưu tiên (Specificity) và thứ tự xuất hiện.
- Inline CSS luôn có độ ưu tiên cao nhất vì nó nằm trực tiếp bên trong phần tử.
- Giữa Internal và External, nếu độ ưu tiên bằng nhau, trình duyệt sẽ chọn quy tắc nào được đọc sau cùng (thứ tự từ trên xuống dưới trong file HTML). Thông thường, External CSS được đặt trong <head>, nên nếu Internal CSS nằm phía dưới thẻ <link>, nó sẽ ghi đè External CSS.
- Việc sử dụng !important có thể phá vỡ mọi quy tắc ưu tiên trên, nhưng tài liệu khuyến cáo đây là một "anti-pattern" (thói quen xấu) nên tránh sử dụng vì sẽ cực kỳ khó debug về sau.