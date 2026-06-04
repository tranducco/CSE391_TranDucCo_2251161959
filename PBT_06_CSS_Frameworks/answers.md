#### Câu A1 — Grid System

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
