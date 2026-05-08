CÂU A1:
1. type="email" → Ô nhập text dạng email, có validate chứa @ và domain → Dùng cho form đăng ký / đăng nhập tài khoản
2. type="password" → Ô nhập nhưng bị ẩn ký tự (••••) → Không validate nội dung nhưng có thể kết hợp required/minlength → Dùng khi nhập mật khẩu
3. type="number" → Ô nhập số, có nút tăng/giảm → Validate chỉ cho nhập số → Dùng nhập số lượng sản phẩm
4. type="tel" → Ô nhập số điện thoại → Không validate chặt nhưng hỗ trợ bàn phím số trên mobile → Dùng nhập SĐT giao hàng
5. type="date" → Hiển thị lịch chọn ngày → Validate định dạng ngày hợp lệ → Dùng chọn ngày giao hàng hoặc ngày sinh
6. type="radio" → Nút chọn 1 trong nhiều lựa chọn → Chỉ chọn được 1 → Dùng chọn phương thức thanh toán (COD / chuyển khoản)
7. type="checkbox" → Ô tick chọn nhiều lựa chọn → Có thể chọn nhiều → Dùng chọn sản phẩm kèm theo hoặc đồng ý điều khoản
8. type="file" → Nút upload file → Có thể giới hạn định dạng (accept) → Dùng upload ảnh đánh giá sản phẩm
9. type="search" → Ô tìm kiếm, có nút xóa nhanh → Không validate đặc biệt → Dùng thanh tìm kiếm sản phẩm
10. type="range" → Thanh kéo (slider) → Giới hạn min/max → Dùng lọc giá sản phẩm (ví dụ: 0 → 10 triệu)

Câu A2:
- Th1: không submit được , thuộc tính required bắt buộc phải nhập mà giá trị đang rỗng nên lỗi 
- Th2: không submit được , type"email" phải đúng format email (...@...), abc không hợp lệ
- th3: không submit được do giá trị nhập vượt max=10
- Th4: không submit được , do nhập có chữ cái mà định dạng yêu cầu chỉ nhập đúng 10 số
- Th5: không submit được , do nhập thiếu kí tự yêu cầu
ảnh test thực tế: validation_A2 
so sánh thực tế với dự đoán : kết quả trình duyệt chặn submit , báo lỗi như dự đoán 

Câu A3: 
1. Tại sao <label for="email"> quan trọng cho screen reader?
Thẻ <label for="email"> rất quan trọng vì nó giúp liên kết giữa phần mô tả và ô input. Khi người dùng sử dụng screen reader di chuyển đến ô nhập liệu, hệ thống sẽ đọc tên của label (ví dụ: “Email”) thay vì chỉ đọc chung chung như “edit text”. Nhờ đó, người dùng biết chính xác mình cần nhập thông tin gì. Nếu không có <label>, các ô input sẽ thiếu ngữ cảnh, gây khó khăn cho người dùng, đặc biệt là người khiếm thị. Ngoài ra, <label> còn giúp tăng trải nghiệm sử dụng khi có thể click vào chữ để focus vào ô nhập.
2. Khi nào dùng <fieldset> + <legend>? Cho ví dụ
<fieldset> và <legend> được sử dụng khi cần nhóm nhiều ô input có liên quan với nhau
trong cùng một phần. Ví dụ, trong form đặt hàng, ta có thể nhóm các trường như tên, số điện thoại, địa chỉ vào một nhóm “Thông tin giao hàng”. Khi đó, <legend> sẽ đóng vai trò là tiêu đề của nhóm. Với screen reader, nó sẽ đọc tiêu đề nhóm trước, sau đó mới đọc từng trường bên trong, giúp người dùng hiểu rõ họ đang nhập thông tin thuộc phần nào. Điều này làm form có cấu trúc rõ ràng hơn và dễ sử dụng hơn.
3. aria-label dùng khi nào? Vì sao không nên dùng khi đã có <label>?
aria-label được dùng khi phần tử không có nội dung văn bản hiển thị nhưng vẫn cần mô tả cho screen reader, ví dụ như button chỉ có icon. Khi đó, aria-label sẽ cung cấp tên để screen reader đọc. Tuy nhiên, không nên dùng aria-label khi đã có <label> vì sẽ gây trùng lặp thông tin, làm screen reader có thể đọc lặp lại không cần thiết. Ngoài ra, <label> là thẻ HTML chuẩn mang tính semantic cao, nên luôn được ưu tiên sử dụng trước. Nguyên tắc chung là chỉ dùng ARIA khi không thể giải quyết bằng HTML thuần.

Câu A4:
- loading="lazy" giúp trình duyệt không tải cái ảnh đó ngay lập tức lúc mới mở web, mà đợi user cuộn chuột (scroll) tới gần chỗ đó mới tải. Nó giúp web load nhanh hơn xịn hơn. KHÔNG nên dùng cho mấy cái ảnh to đùng nằm ở phần đầu tiên của web (Hero banner, logo) vì sẽ làm người dùng thấy hình bị load chậm.

- Nên cung cấp nhiều <source> vì không phải trình duyệt nào (Chrome, Safari, Firefox
cũ) cũng đọc được cùng 1 định dạng video. Mình đưa nhiều cái, thằng nào xài được chuẩn
nào thì nó tự lấy chuẩn đó. 3 format web phổ biến là: mp4, webm (đội Google chuộng),
ogg.

- Thuộc tính alt (Alternative text) dùng để hiện chữ thay thế nếu lỡ mạng lag rớt ảnh, và để Screen reader đọc cho người mù hiểu ảnh đó là gì.
    - iPhone 16: alt="Điện thoại iPhone 16 Pro Max màu Titan tự nhiên"
    - Ảnh trang trí: alt="" (Cứ để rỗng để máy đọc nó skip qua, đỡ ồn ào).
    - Ảnh biểu đồ: alt="Biểu đồ cột doanh thu quý 1 năm 2026, cho thấy mức tăng 15% so với cùng kỳ" (Phải ghi luôn ý nghĩa data biểu đồ).

Câu A5:
- So sánh <figure> vs <img>
- Cách 1 (chỉ <img>): Dùng cho mấy ảnh chèn vào cho web đỡ trống, ảnh minh họa chung
chung hoặc ảnh không cần mô tả. Ví dụ: Ảnh Avatar của user, ảnh Icon nhỏ trên trang.
- Cách 2 (có <figure> + <figcaption>): Dùng khi hình ảnh mang tính độc lập, có ý nghĩa
quan trọng và cần dòng chú thích đi kèm rõ ràng. Ví dụ: Ảnh minh họa sản phẩm có ghi giá/khuyến mãi bên dưới, hoặc ảnh biểu đồ trong một bài báo.

Câu C1: 
- Lỗi 1: Dòng 1 — Thẻ <form> trống trơn, thiếu thuộc tính action và method, vi phạm best practices (form không biết sẽ gửi dữ liệu đi đâu và bằng cách nào).
Sửa: <form action="#" method="POST">

- Lỗi 2: Dòng 2 — Input "Tên" không có <label for="...">, id, name, vi phạm accessibility và backend sẽ không nhận được dữ liệu.
Sửa: <label for="name">Tên:</label> <input type="text" id="name" name="name" required>

- Lỗi 3: Dòng 4 — Input "Email" lạm dụng placeholder thay cho thẻ <label>, thiếu id, name và validation required.
Sửa: <label for="email">Email:</label> <input type="email" id="email" name="email" placeholder="Email của bạn" required>

- Lỗi 4: Dòng 6, 7 — Hai input password thiếu <label>, id, name. Trình duyệt đọc màn hình (screen reader) sẽ không biết ô nào là mật khẩu, ô nào là xác nhận.
Sửa: <label for="pwd">Mật khẩu:</label> <input type="password" id="pwd" name="pwd" placeholder="Mật khẩu" required>
<label for="confirm_pwd">Nhập lại mật khẩu:</label> <input type="password" id="confirm_pwd" name="confirm_pwd" placeholder="Nhập lại mật khẩu" required>

- Lỗi 5: Dòng 9 — Input Phone dùng sai type="text" (đúng ra phải là type="tel"). Gán cứng value="0901234567" làm người dùng phải xóa đi mới nhập được, lẽ ra nên dùng placeholder.
Sửa: <label for="phone">Phone:</label> <input type="tel" id="phone" name="phone" placeholder="0901234567" pattern="[0-9]{10}">

- Lỗi 6: Dòng 11 — Thẻ <select> thiếu <label> mô tả, đồng thời thiếu id và name để định danh dữ liệu gửi đi.
Sửa: <label for="city">Khu vực:</label> <select id="city" name="city">

- Lỗi 7: Dòng 12, 13 — Các thẻ <option> bên trong select bị thiếu thuộc tính value (vi phạm best practices về chuẩn hóa dữ liệu gửi lên server).
Sửa: <option value="HN">Hà Nội</option> <option value="HCM">TP.HCM</option>

- Lỗi 8: Dòng 16 đến 18 — Có <label> "Tôi đồng ý điều khoản" nhưng lại... quên viết thẻ <input type="checkbox">. Lỗi này không check được điều khoản luôn.
Sửa: <label for="terms"><input type="checkbox" id="terms" name="terms" required> Tôi đồng ý điều khoản</label>

Câu C2:
Pattern Regex:
- CMND/CCCD (Đúng 12 số): pattern="[0-9]{12}"
- Số tài khoản (10 đến 15 số): pattern="[0-9]{10,15}"

- HTML5 Validation chưa đủ cho web ngân hàng đâu thầy. Lý do là HTML5 nó chỉ chạy ở phía Client (trên máy của ông user). Một người am hiểu IT chỉ cần nhấn F12 (Inspect Element), xóa cái dòng required hoặc sửa pattern là qua mặt form để submit rác lên hệ thống ngon ơ. Nó chỉ có tác dụng tăng UX (báo lỗi liền tay cho user đỡ chờ) chứ không dùng để bảo mật.

- 3 loại Validation HTML5 "bó tay" phải gọi Javascript ra cứu:
    So sánh 2 trường với nhau (Ví dụ: Mật khẩu và Nhập lại mật khẩu có giống nhau không).
    Kiểm tra logic nghiệp vụ phức tạp (Ví dụ: Tuổi phải trên 18 dựa vào ngày sinh tính đến hôm nay).
    Validate tính tồn tại dữ liệu (Ví dụ: Email này đã có ai đăng ký trong Database chưa).

- Rủi ro bảo mật nếu backend lười không check lại:
    Bị tấn công SQL Injection hoặc XSS: User cố tình gửi các đoạn code độc hại (script) vào form, nếu backend lưu thẳng vào database rồi in ra màn hình thì web sẽ bị hack.
    Rác dữ liệu và sập logic: Khách cố tình hack sửa HTML5 gửi lên "Số tiền chuyển khoản" là -10000 (số âm), nếu backend không bắt lỗi lại, tự nhiên hệ thống lại cộng thêm tiền cho tài khoản bị chuyển.