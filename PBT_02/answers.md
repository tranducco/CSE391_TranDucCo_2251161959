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
