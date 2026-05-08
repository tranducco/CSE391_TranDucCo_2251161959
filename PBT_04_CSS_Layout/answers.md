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
- Khi nó dò ngược lên toàn bộ cây DOM mà không tìm thấy bất kỳ thẻ tổ tiên nào (cha, ông, cụ...) có thuộc tính position khác static. Lúc này nó đành lấy giới hạn của trang web làm mốc tọa độ.

 Khi nào tham chiếu parent?
- Khi thẻ parent đó được bạn chủ động thiết lập một thuộc tính position khác static

Giải thích khái niệm "nearest positione ancestor".
- hi một phần tử được gán position: absolute, nó bị bốc ra khỏi luồng hiển thị bình thường (normal flow). Để biết phải đứng ở đâu (khi dùng top, bottom, left, right), trình duyệt sẽ bắt đầu từ thẻ đó dò ngược lên trên các thẻ bao bọc nó. Thẻ đầu tiên mà trình duyệt gặp có cài đặt position: relative, absolute, fixed, hoặc sticky sẽ được chọn làm hệ quy chiếu (mốc tọa độ 0,0) cho thẻ absolute kia 
