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
## Câu A3:  Event Bubbling
- Bình thường: Gõ code chạy nó sẽ sủi bọt (bubbling) từ trong ra ngoài. Output: BUTTON -> INNER -> OUTER.
- Nếu bỏ comment stopPropagation(): Lệnh này dùng để chặn sủi bọt, ngăn không cho event lan lên các thẻ cha. Output chỉ hiện đúng thằng bị click: BUTTON.

## Câu C1: Debug DOM Code
- lỗi 1: Code lỗi: addEventListener("onclick", ...),Cách sửa: Sửa "onclick" thành "click"
- Lỗi 2: Code lỗi: countDisplay = count; (Trong nút Reset), Cách sửa: gán vào nội dung của thẻ: countDisplay.textContent = count
- Lỗi 3: Code lỗi: historyList.innerHTML = null, Cách sửa: Sửa thành historyList.innerHTML = ""
- Lỗi 4: Code lỗi: item.remove; (Trong nút Clear History), Cách sửa: Sửa thành item.remove();
- Lỗi 5: Code lỗi: count = localStorage.getItem("count"), Cách sửa: Ép kiểu sang số và đặt giá trị mặc định nếu rỗng: count = Number(localStorage.getItem("count")) || 0;
- lỗi 6: Ở sự kiện "load", chỉ lấy lại count mà quên mất lấy lại lịch sử. (Mặc dù lúc "beforeunload" có lưu historyList.innerHTML), cách sửa: ổ sung việc load history: historyList.innerHTML = localStorage.getItem("history") || "";
- Lỗi 7: hi bạn khôi phục lại các thẻ <li> bằng historyList.innerHTML = ..., các thẻ này chỉ là mã HTML thuần, toàn bộ sự kiện click gắn trên từng <li> bằng addEventListener trước đó sẽ bị mất sạch. Bạn không thể click để xóa các thẻ cũ nữa. Cách sửa: Khắc phục triệt để bằng kỹ thuật Event Delegation: Xóa sự kiện click ở từng thẻ <li>, thay vào đó gắn một sự kiện click duy nhất lên thẻ cha #history
- Code sau khi sửa lỗi :
```javascript
// App: Counter with history
const countDisplay = document.querySelector(".count");
const historyList = document.getElementById("history");

let count = 0;

// [SỬA LỖI 7] Sử dụng Event Delegation: Gắn sự kiện 1 lần duy nhất lên thẻ cha
historyList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.remove(); // Xóa <li> được click
    }
});

document.querySelector("#incrementBtn").addEventListener("click", function() {
    count++;
    countDisplay.textContent = count; // Dùng textContent an toàn hơn innerHTML
    
    // Lưu history
    const li = document.createElement("li");
    li.textContent = "Count changed to " + count;
    // Đã bỏ dòng li.addEventListener("click"...) tại đây vì đã có Event Delegation
    historyList.append(li);
});

// [SỬA LỖI 1] Đổi "onclick" thành "click"
document.querySelector("#decrementBtn").addEventListener("click", function() {
    count--;
    countDisplay.textContent = count;
});

document.querySelector("#resetBtn").addEventListener("click", () => {
    count = 0;
    // [SỬA LỖI 2] Gán giá trị vào textContent thay vì gán đè biến const
    countDisplay.textContent = count;
    // [SỬA LỖI 3] Dùng chuỗi rỗng thay vì null
    historyList.innerHTML = "";
});

// Clear all history
document.querySelector("#clearHistory").addEventListener("click", () => {
    const items = historyList.querySelectorAll("li");
    items.forEach(item => {
        // [SỬA LỖI 4] Thêm dấu () để thực thi hàm
        item.remove(); 
    });
    // Lưu ý: Viết ngắn gọn hơn là chỉ cần gọi historyList.innerHTML = "";
});

// Save to localStorage
window.addEventListener("beforeunload", () => {
    localStorage.setItem("count", count);
    localStorage.setItem("history", historyList.innerHTML);
});

// Load from localStorage
window.addEventListener("load", () => {
    // [SỬA LỖI 5] Ép kiểu sang số và gán giá trị mặc định là 0 nếu chưa có
    count = Number(localStorage.getItem("count")) || 0;
    countDisplay.textContent = count;
    
    // [SỬA LỖI 6] Khôi phục lại giao diện history
    const savedHistory = localStorage.getItem("history");
    if (savedHistory) {
        historyList.innerHTML = savedHistory;
    }
});
```
## Câu C2- Performance
1. Tại sao gắn 1000 events là BAD PRACTICE?
- Tốn bộ nhớ (RAM), giảm hiệu năng, Mất kết nối với element động
- Event Delegation giải quyết thế nào?:
     + Lợi dụng cơ chế Event Bubbling (Sự kiện nổi bọt). Nó chỉ gắn 1 sự kiện duy nhất lên phần tử cha bọc ngoài. Khi click vào thẻ con, sự kiện sẽ "nổi bọt" lên cha. Tại đây, cha dùng e.target để xác định chính xác phần tử con nào vừa bị click để xử lý
2. Refactor Code giảm Reflow bằng DocumentFragment
code đã sửa lỗi:
```javascript
const fragment = document.createDocumentFragment(); // Tạo fragment trong RAM

for (let i = 0; i < 1000; i++) {
    const div = document.createElement("div");
    div.textContent = `Item ${i}`;
    fragment.appendChild(div); // Chỉ thay đổi trong RAM, không reflow
}

document.body.appendChild(fragment); // ← Gắn toàn bộ 1000 elements vào DOM, chỉ 1 lần reflow!
```
- Tại sao DocumentFragment nhanh hơn?
     + Thêm 1 thẻ = 1 lần trình duyệt phải tính toán lại kích thước, vị trí (Reflow) và vẽ lại màn hình (Repaint). Gắn 1000 lần trực tiếp vào body sẽ ép trình duyệt làm việc này 1000 lần, DocumentFragment là một DOM ảo chỉ tồn tại trong bộ nhớ (RAM). Khi nhồi 1000 thẻ div vào nó, trình duyệt không hề hay biết nên không bị kích hoạt Reflow, khi bê nguyên cục fragment đó ném vào document.body ở dòng cuối cùng, trình duyệt nhận được 1000 thẻ cùng lúc và chỉ thực hiện tính toán Reflow/Repaint đúng 1 lần duy nhất, giúp tối ưu tốc độ triệt để
