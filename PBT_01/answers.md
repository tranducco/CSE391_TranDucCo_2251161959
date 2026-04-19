Câu A1:
1.Khi bạn gõ https://shopee.vn vào trình duyệt và nhấn Enter, liệt kê đúng thứ tự ít nhất 5 bước xảy ra (từ DNS lookup đến render): 
    1. REQUEST của mình sẽ đi từ máy sang wifi của nhà 

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


