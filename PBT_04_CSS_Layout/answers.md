# 📋 PHIẾU BÀI TẬP 04
# **CSS LAYOUT — Positioning, Flexbox & Grid**
## PHẦN A — KIỂM TRA ĐỌC HIỂU (20 điểm)
### Câu A1 (10đ) — 5 Loại Positioning
Đọc chương 12. Điền bảng sau mà **KHÔNG** tra Google:

| Position | Vẫn chiếm chỗ trong flow? | Tham chiếu vị trí | Cuộn theo trang? | Use case |
|----------|---------------------------|-------------------|------------------|----------|
| `static` | có | Không dùng | có | Mặc định — không cần viết |
| `relative` | có | Vị trí gốc của nó | có | Làm anchor cho absolute con, dịch nhẹ |
| `absolute` | không | Cha relative gần nhất | có | Badge, dropdown, tooltip, overlay |
| `fixed` | không | Viewport | không | Chat button, cookie banner, header cố định |
| `sticky` | có | Viewport (khi dính) | có | Sticky header, sticky table header, sidebar |

**Câu hỏi thêm:** Khi nào `absolute` tham chiếu `body`?
- Khi nó dò ngược lên toàn bộ cây DOM mà không tìm thấy bất kỳ thẻ tổ tiên nào (cha, ông, cụ...) có thuộc tính position khác static. Lúc này nó đành lấy giới hạn của trang web làm mốc tọa độ

 Khi nào tham chiếu parent?
- Khi thẻ parent đó được bạn chủ động thiết lập một thuộc tính position khác static

Giải thích khái niệm "nearest positione ancestor".
- khi một phần tử được gán position: absolute, nó bị bốc ra khỏi luồng hiển thị bình thường (normal flow). Để biết phải đứng ở đâu (khi dùng top, bottom, left, right), trình duyệt sẽ bắt đầu từ thẻ đó dò ngược lên trên các thẻ bao bọc nó.
Thẻ đầu tiên mà trình duyệt gặp có cài đặt position: relative, absolute, fixed, hoặc sticky sẽ được chọn làm hệ quy chiếu (mốc tọa độ 0,0) cho thẻ absolute kia 

Câu A2:
---
### Th1 Dự đoán: 1 hàng, 4 cột có chiều rộng bằng nhau
### Th2 Dự đoán: 3 hàng, mỗi hàng 2 cột
### Th3 Dự đoán: 1 hàng, 3 item nằm cách xa nhau tối đa, căn giữa theo chiều dọc.
### Th4 Dự đoán: 1 hàng, 3 cột (Holy Grail layout thu nhỏ)
### Th5 Dự đoán: 3 hàng. Hàng 1 và 2 có 3 cột bằng nhau. Hàng 3 có 1 item nằm ở góc dưới bên trái
Ảnh dự đoán trong screenshots: layoutketqua.jpg

Câu A3:
---
## PHẦN B — THỰC HÀNH CODE (60 điểm)

### Bài B1 (15đ) — Positioning Playground

Tạo file `positioning.html` + `positioning.css`.

### Bài B2 (20đ) — Flexbox Navigation & Cards

Tạo file `flexbox_layout.html` + `flexbox.css`.


## PHẦN C — SUY LUẬN (20 điểm)

### Câu C1 (10đ) — Flexbox vs Grid: Khi nào dùng gì?

Cho 5 tình huống layout thực tế. Với mỗi tình huống, trả lời: dùng **Flexbox**, **Grid**, hay **kết hợp cả hai**? Giải thích ngắn gọn tại sao.

1. Navigation bar ngang (logo + menu + buttons)
- chọn flexbox vì navbar là layout 1 chiều theo hàng ngang. Flexbox giúp căn giữa, giãn khoảng cách (justify-content), và sắp xếp item linh hoạt rất dễ
2. Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước)
- chọn grid vì đây là layout 2 chiều (hàng + cột). CSS Grid giúp chia đều 3 cột và tự động xuống hàng khi thêm ảnh mới
3. Layout blog: main content + sidebar
- chọn grid vì cần chia bố cục rõ ràng thành nhiều vùng: content chính và sidebar
4. Footer với 4 cột thông tin (Về chúng tôi, Liên kết, Hỗ trợ, Liên hệ)
- chọn grid vì footer thường là bố cục nhiều cột đều nhau. Grid giúp tạo 4 cột ổn định và responsive dễ hơn
5. Card sản phẩm (ảnh trên, text giữa, nút dưới — nút luôn dính đáy)
- chọn kết hợp vì dùng Flexbox theo chiều dọc (flex-direction: column) để: ảnh ở trên, 
nội dung ở giữa, nút luôn nằm dưới cùng (margin-top: auto)



