### Track A
## Câu A1 — Grid System

Đọc tài liệu Grid System. Không chạy code, vẽ layout cho HTML sau ở 3 kích thước:

```html
<div class="container">
    <div class="row">
        <div class="col-12 col-md-6 col-lg-3">Box 1</div>
        <div class="col-12 col-md-6 col-lg-3">Box 2</div>
        <div class="col-12 col-md-6 col-lg-3">Box 3</div>
        <div class="col-12 col-md-6 col-lg-3">Box 4</div>
    </div>
</div>
```

| Kích thước | < 768px | 768px - 991px | ≥ 992px |
|------------|---------|---------------|---------|
| Số cột | 1 | 2 | 4 |
| Box layout | Xếp chồng dọc (Stack), Box 1 đến 4 nằm trên 4 hàng riêng biệt, mỗi box chiếm 100% (12/12) chiều rộng | 2 hàng x 2 cột , Box 1 & 2 nằm hàng trên, Box 3 & 4 nằm hàng dưới, mỗi box chiếm 50% (6/12) chiều rộng | 1 hàng duy nhất nằm ngang, Cả 4 box cùng nằm trên 1 hàng, mỗi box chiếm 25% (3/12) chiều rộng |
2. Trả lời câu hỏi thêm 
- col-md-6 nghĩa là gì?
    + Class này thiết lập quy tắc: Bắt đầu từ kích thước màn hình Medium (md — có min-width ≥ 768px) trở lên, phần tử sẽ chiếm 6/12 cột của hệ thống Grid (tương đương với 50% chiều rộng của hàng chứa nó)
- Tại sao không cần viết col-sm-12?
    + Lý do là Bootstrap sử dụng phương pháp tiếp cận Mobile-First. Các class khai báo cho màn hình nhỏ (ở đây là class cơ sở col-12) sẽ mặc định áp dụng cho mọi kích thước màn hình lớn dần lên cho đến khi gặp một breakpoint lớn hơn ghi đè lên nó. Do kích thước màn hình sm (≥ 576px) nhỏ hơn mốc md (≥ 768px), nó sẽ tự động kế thừa thuộc tính 12 cột từ class col-12. Việc khai báo thêm col-sm-12 ở đây hoàn toàn hợp lệ nhưng bị dư thừa và không cần thiết

## Câu A2 — Utilities & Components

1. Giải thích class `d-none d-md-block`. Element này hiển thị khi nào, ẩn khi nào?
- Class d-none d-md-block: 
    + Ẩn: Trên màn hình nhỏ (dưới 768px - mobile) do lệnh d-none.
    + Hiện: Trên màn hình từ md trở lên (≥768px - tablet, desktop) do lệnh d-md-block ghi đè d-none.
2. Liệt kê 5 spacing utilities (margin/padding) và giải thích. VD: `mt-3`, `px-4`, `mb-auto`
    - mt-3: Margin-top (cách lề trên) mức 3 (tương đương 1rem / 16px).
    - px-4: Padding trục X (khoảng đệm bên trái và phải) mức 4 (1.5rem / 24px).
    - mb-auto: Margin-bottom tự động (thường dùng kết hợp flexbox để đẩy các phần tử khác ra xa).
    - pb-2: Padding-bottom (khoảng đệm bên dưới) mức 2 (0.5rem / 8px).
    - mx-auto: Margin trục X (trái/phải) tự động, dùng để căn giữa các phần tử block.
3. Sự khác nhau giữa `.container`, `.container-fluid`, `.container-md`?
    - .container: Có chiều rộng tối đa (max-width) cố định, nhảy kích thước theo từng mốc màn hình (sm, md, lg...). Luôn được căn giữa.
    - .container-fluid: Trải dài full 100% chiều rộng màn hình ở tất cả các kích thước thiết bị.
    - .container-md: Có chiều rộng tối đa (max-width) cố định


## Câu C1: Tùy biến Bootstrap
1. Bạn muốn đổi màu `$primary` từ xanh mặc định sang `#E63946`. Giải thích quy trình (cần công cụ gì, modify file nào).
- Công cụ: Cần trình biên dịch SASS (VD: Extension Live Sass Compiler trên VS Code hoặc dùng Node.js/npm).
- Cách làm: Tạo file custom.scss. Khai báo biến $primary: #E63946; trước dòng lệnh @import "bootstrap/scss/bootstrap";. Sau đó compile file này ra file CSS để nhúng vào web.
2. Tại sao KHÔNG nên override trực tiếp `.btn-primary { background: red; }` mà nên dùng SASS variables?
- Nếu chỉ viết .btn-primary { background: red; }, bạn sẽ bỏ sót các trạng thái :hover, :focus, :active và hàng loạt class khác cũng dùng màu primary (như text-primary, bg-primary, border-primary).
- Dùng biến SASS giúp Bootstrap tự động nội suy, tính toán màu sắc và đồng bộ đồng loạt cho toàn bộ hệ thống.


## Câu C2: So sánh CSS thuần và Bootstrap
- Số dòng CSS cần viết: CSS thuần tốn hàng chục đến hàng trăm dòng (để xử lý layout, media queries, hiệu ứng). Với Bootstrap, bạn tốn 0 dòng CSS custom (chỉ việc gọi class trong HTML)
- Thời gian phát triển: Bootstrap nhanh hơn vượt trội, giúp dựng form/layout trong vài phút. CSS thuần tốn nhiều thời gian code, căn chỉnh và fix bug trên từng thiết bị
- Khả năng tùy biến: CSS thuần linh hoạt 100%. Bootstrap bị gò bó theo khuôn mẫu mặc định, muốn tùy biến sâu phải can thiệp bằng SASS khá phức tạp hoặc tốn công viết CSS đè
- Khi nào NÊN dùng Bootstrap: Các dự án cần ra mắt nhanh (MVP), làm trang Admin Dashboard, làm việc nhóm cần một quy chuẩn chung, hoặc dev backend không rành về CSS
- Khi nào KHÔNG NÊN dùng Bootstrap: Các website yêu cầu thiết kế UI/UX độc bản/phá cách, dự án siêu nhỏ cần tối ưu tốc độ load (tránh tải thừa file CSS nặng), hoặc khi layout hoàn toàn không giống hệ thống Grid của Bootstrap
