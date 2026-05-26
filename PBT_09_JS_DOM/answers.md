## Câu A1:DOM Tree
1. Sơ đồ DOM Tree:
```plaintext
div#app
 ├── header
 │    ├── h1 (Todo App)
 │    └── nav
 │         ├── a.active (All)
 │         ├── a (Active)
 │         └── a (Completed)
 └── main
      ├── form#todoForm
      │    ├── input#todoInput
      │    └── button (Add)
      └── ul#todoList
           ├── li.todo-item (Learn HTML)
           └── li.todo-item.completed (Learn CSS)
```
2. Viết querySelector cho mỗi yêu cầu:
- Chọn thẻ h1
```javascript
document.querySelector('h1')
```
- Chọn input trong form:
```javascript
document.querySelector('#todoForm input')
```
- Chọn tất cả .todo-item:
```javascript
document.querySelectorAll('.todo-item')
```
- Chọn link đang active:
```javascript
document.querySelector('a.active')
```
- Chọn li đầu tiên trong #todoList
```javascript
document.querySelector('#todoList li:first-child')
```
- Chọn tất cả a bên trong nav:
```javascript
document.querySelectorAll('nav a')
```

## Câu A2 (5đ) — innerHTML vs textContent
- Khác nhau: innerHTML lấy/chèn cả chữ lẫn các thẻ HTML (nó parse 
thẻ HTML). textContent chỉ lấy text thuần túy, gán thẻ HTML vào
nó cũng biến thành text bình thường luôn.
- Khi nào dùng: Cần nhét thẻ HTML động vào thì xài innerHTML. Còn
chỉ muốn đổi chữ (như hiển thị tên user, báo lỗi) thì bắt buộc
xài textContent.
- Vấn đề XSS: Vì innerHTML nó chạy luôn mã HTML, nên nếu user nhập mã độc kiểu script... hay
thẻ ảnh chứa script, trình duyệt sẽ hiểu lầm và chạy nó.
- Cách sửa: Chỗ kia chỉ cần đổi thành text là an toàn:
```javascript
document.querySelector("#result").textContent = userInput;
```


