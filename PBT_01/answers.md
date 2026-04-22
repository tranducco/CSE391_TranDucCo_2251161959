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
Hiển thị như sau: 
Hộp 1
Text A Text B
Hộp 2
Text C Text D  
Hộp 3 
*Chú thích : Text D bôi đậm , các chứ khác bình thường.
Giải thích :Thẻ <div> (block): mặc định chiếm 100% chiều ngang màn hình. Dù chữ bên trong ngắn tí, nó vẫn đạp tất cả những đứa khác xuống dòng. Do đó 3 Hộp nằm ở 3 dòng riêng.
Thẻ <span> và <strong> (Inline): Kích thước chỉ to đúng bằng chữ bên trong. Cứ còn chỗ trống là chúng tự động nối đuôi nhau xếp chung trên cùng một dòng (do code viết liền nhau nên "Text A" dính sát "Text B").

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

