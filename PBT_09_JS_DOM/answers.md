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

