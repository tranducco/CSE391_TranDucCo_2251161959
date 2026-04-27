Phần A: KIỂM TRA ĐỌC HIỂU 
Câu A1:
1.Khi bạn gõ https://shopee.vn vào trình duyệt và nhấn Enter, liệt kê đúng thứ tự ít nhất 5 bước xảy ra (từ DNS lookup đến render): 
    1. REQUEST của mình sẽ đi từ máy sang router wifi của nhà 
    2. sau đó từ router của nhà mạng đi qua cáp quang biển đến datacenter của shopee ở singapore 
    3. sever xử lí : bạn muốn vào trang chủ shopee 
    4. response chạy ngược lại : cáp quang-> vnpt-> router-> trình duyệt 
    5 trình duyệt nhận file HTML,CSS,JS -> RENDER RA giao diện 
    6. giao diện trang chủ shopee hiện lên màn hình cho người sử dụng .

Câu A2:
4 lỗi secmantic trong đoạn code trên là :
    1. Thiếu các thẻ cấu trúc như header, main, footer khiến trang web không biết đâu là đầu trang , đâu là nội dung chính và cuối trang.
    2. không sử dụng thẻ điều hướng <nav>: thẻ <nav> giúp cho chúng ta biết được bên trong đó chứa các thẻ bên trong đó chứa các thẻ link điều hướng .
    3. Thiếu các thẻ <h1>,<h2> : các thẻ tiêu đề đóng vai trò quan trọng để nhận biết được chủ đề chính của trang web .
    4. Thiếu thuộc tính alt trong thẻ ảnh <img>: thuộc tính này giúp mô tả ảnh chi tiết , giúp cho googlebot có thể nhận biết được ảnh dễ hơn .
Sửa lại code : 
    <header class="header">
        <div class="logo">ShopTLU</div>
        <nav class="menu">
            <ul>
                <li><a href="/">Trang chủ</a></li>
                <li><a href="/products">Sản phẩm</a></li>
            </ul>
        </nav>
    </header>
    <main class="main">
        <article class="product">
            <h1 class="title">iPhone 16 Pro</h1>
            <p class="price">25.990.000đ</p>
            <div class="image">
                <img src="iphone.jpg" alt="Điện thoại iPhone 16 Pro chính hãng">
            </div>
        </article>
    </main>
    <footer class="footer">
        <p>© 2026 ShopTLU</p>
    </footer>

Câu A3:
- Hiển thị như sau: 
Hộp 1
Text A Text B
Hộp 2
Text C Text D  
Hộp 3 
*Chú thích : Text D bôi đậm , các chứ khác bình thường.
Giải thích :
- Thẻ <div> (block): mặc định chiếm 100% chiều ngang màn hình. Dù chữ bên trong ngắn tí, nó vẫn đạp tất cả những đứa khác xuống dòng. Do đó 3 Hộp nằm ở 3 dòng riêng.
- Thẻ <span> và <strong> (Inline): Kích thước chỉ to đúng bằng chữ bên trong. Cứ còn chỗ trống là chúng tự động nối đuôi nhau xếp chung trên cùng một dòng (do code viết liền nhau nên "Text A" dính sát "Text B").

Câu A4:
1. Khác nhau giữa <thead>, <tbody>, <tfoot>:
    Mấy thẻ này dùng để gom nhóm các phần của một cái bảng cho rõ ràng, giống cấu trúc một tờ hóa đơn:
    <thead> (Đầu bảng): Chứa các dòng tiêu đề của cột (VD: STT, Tên sản phẩm, Đơn giá).
    <tbody> (Thân bảng): Chứa nội dung, dữ liệu chính. (Một bảng có thể có nhiều tbody).
    <tfoot> (Chân bảng): Chứa dòng chốt sổ, tổng kết (VD: Dòng "Tổng cộng: 500k"). Dù bạn có viết thẻ này ở trên phần <tbody> thì lúc chạy web, nó vẫn tự động chui xuống dưới cùng của bảng.
2. 3 lý do KHÔNG NÊN dùng table làm layout:
    Rất khó làm Responsive: Thẻ table hiển thị rất cứng. Khi mở trên màn hình điện thoại nhỏ, giao diện sẽ bị vỡ form, tràn viền hoặc ép người dùng phải vuốt ngang màn hình mới xem được.
    Code HTML bị rối, khó bảo trì: Để chia layout bằng table thì phải lồng cả đống thẻ <table>, <tr>, <td> vào nhau. File code sẽ cực kỳ rác, sau này muốn fix bug hay đổi vị trí thanh menu là rất mệt.
    Sai ngữ nghĩa (Semantic) ảnh hưởng SEO: Thẻ <table> sinh ra chỉ để hiển thị dữ liệu dạng bảng( bảng điểm, thời khóa biểu). Lấy nó đi dựng khung giao diện thì Google Bot sẽ đọc không hiểu, quét sai cấu trúc, khiến trang web bị đánh giá SEO rất thấp.
PHẦN B — THỰC HÀNH CODE
Câu B3: 
    - Lỗi 1: Dòng 1 — Sai cú pháp khai báo chuẩn HTML5 — Cách sửa: Sửa `<!DOCTYPE>` thành `<!DOCTYPE html>`.
    - Lỗi 2: Dòng 1 — Lỗi Semantic: Thẻ `<html>` thiếu thuộc tính khai báo ngôn ngữ — Cách sửa: Thêm `lang="vi"` để thành `<html lang="vi">`.
    - Lỗi 3: Dòng 2 — Thiếu thẻ đóng `</title>` — Cách sửa: Thêm `</title>` vào cuối dòng: `<title>Trang web</title>`.
    - Lỗi 4: Dòng 3 — Sai định dạng ghi chuẩn ký tự utf-8 — Cách sửa: Sửa `charset="utf8"` thành `charset="utf-8"`.
    - Lỗi 5: Dòng 4 — Sai thẻ đóng `<h1>` — Cách sửa: Sửa `<h1>` ở cuối câu thành `</h1>`.
    - Lỗi 6: Dòng 8 — Sai thẻ đóng `<a>` — Cách sửa: Sửa `<a>` ở cuối dòng thành `</a>`.
    - Lỗi 7: Dòng 15 & 22 — Lỗi Semantic: Nhảy cóc cấp độ tiêu đề (từ `<h1>` nhảy thẳng xuống `<h3>` bỏ qua `<h2>`) — Cách sửa: Đổi các thẻ `<h3>` thành `<h2>`.
    - Lỗi 8: Dòng 16 — Lỗi cú pháp & Semantic: Thiếu dấu ngoặc kép ở đường dẫn ảnh và hoàn toàn thiếu thuộc tính `alt` — Cách sửa: Sửa thành `<img src="iphone.jpg" alt="Hình ảnh iPhone 16 Pro">`.
    - Lỗi 9: Dòng 18 — Lỗi đan chéo thẻ (Overlapping tags): Mở `<p>` rồi mở `<b>`, nhưng lại đóng `</p>` trước `</b>` — Cách sửa: Đảo lại thứ tự thẻ đóng thành `<b>25.990.000đ</b></p>`.
    - Lỗi 10: Dòng 24-27 — Lỗi Semantic: Hàng tiêu đề của bảng đang dùng thẻ `<td>` (chứa dữ liệu) thay vì thẻ `<th>` (chứa tiêu đề) — Cách sửa: Đổi `<td>Tên</td>` và `<td>Giá</td>` thành `<th>Tên</th>` và `<th>Giá</th>`. Bổ sung thêm `<thead>` và `<tbody>`.
    - Lỗi 11: Dòng 36 — Lỗi Semantic : Một trang web HTML5 chỉ được phép có duy nhất một thẻ `<main>`. Ngoài ra, Sidebar không được nằm trong `<main>` — Cách sửa: Đổi thẻ `<main>` thứ hai thành `<aside>`.
    - Lỗi 12: Dòng 41 — Thiếu thẻ đóng đoạn văn `</p>` — Cách sửa: Thêm `</p>` vào cuối: `<p>Copyright 2026</p>`.
Câu B4:Chọn trang shopee
1.Chụp screenshot tab Elements, chỉ ra ít nhất:
- 3 thẻ semantic HTML5 mà Shopee sử dụng đúng chuẩn:
    <header> (Ở trên cùng trang): Chứa toàn bộ thanh điều hướng trên cùng, logo Shopee, thanh tìm kiếm và icon giỏ hàng.
    <footer> (Ở dưới cùng trang): Chứa các thông tin về chăm sóc khách hàng, chính sách, bản quyền (Copyright), và các phương thức thanh toán.
    <main> hoặc <nav>: Shopee có sử dụng <nav> ở một số khu vực như thanh Menu danh mục sản phẩm (Categories) để báo hiệu đây là cụm liên kết điều hướng.
    (screenshot: semantic_shopee.png trong folder)
- 2 thẻ mà trang đó KHÔNG dùng đúng semantic (Lỗi lạm dụng thẻ):
    Lạm dụng <div> làm nút bấm (Button): Tại rất nhiều vị trí (như các nút lọc sản phẩm, nút chuyển slide banner), Shopee không dùng thẻ <button> mà dùng <div class="..."> sau đó gắn sự kiện onClick bằng JavaScript. Điều này làm giảm tính trợ năng (Accessibility) cho người dùng khiếm thị.
    Lạm dụng <div> làm liên kết (Link): Một số khu vực sản phẩm hoặc banner quảng cáo, thay vì dùng thẻ <a> chứa thuộc tính href rõ ràng để tốt cho SEO, hệ thống lại bọc bằng một đống thẻ <div> lồng nhau.
    (seomantic_shopee_2.png)

