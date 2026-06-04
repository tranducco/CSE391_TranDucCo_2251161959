## PHẦN A — KIỂM TRA ĐỌC HIỂU (15 điểm)

### Câu A1 (5đ) — Sync vs Async

#### 1. Dự đoán thứ tự output:
1. `1 - Start`
2. `4 - End`
3. `3 - Promise`
4. `6 - Promise 2`
5. `2 - Timeout 0ms`
6. `7 - Nested Timeout`
7. `5 - Timeout 100ms`

#### 2. Giải thích chi tiết cơ chế Event Loop:

Thứ tự thực thi được quyết định bởi 3 thành phần chính: **Call Stack**, **Microtask Queue** (Promise) và **Macrotask Queue** (setTimeout).
- Code đồng bộ (1, 4): Được đẩy vào Call Stack và thực thi ngay lập tức từ trên xuống dưới.
- Microtask Queue (3, 6): Chứa các callback của Promise. Event Loop sẽ ưu tiên chạy toàn bộ hàng đợi Microtask ngay sau khi code đồng bộ kết thúc. Do đó, 3 và 6 chạy ngay sau 1 và 4.
- Macrotask Queue (2, 7, 5): Chứa các callback của setTimeout. Chạy sau khi Microtask Queue đã rỗng hoàn toàn.
