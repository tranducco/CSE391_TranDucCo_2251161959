// 1. Lấy dữ liệu từ LocalStorage (nếu không có thì mảng rỗng)
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentFilter = 'All';

// 2. Các DOM Elements
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const todoCount = document.getElementById('todoCount');
const filters = document.getElementById('filters');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');

// CÁC HÀM XỬ LÝ LOGIC & RENDER
function saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
// Render UI  dùng createElement
function renderTodos() {
    todoList.innerHTML = ''; // Clear list cũ
    // Lọc mảng
    let filteredTodos = todos;
    if (currentFilter === 'Active') {
        filteredTodos = todos.filter(todo => !todo.completed);
    } else if (currentFilter === 'Completed') {
        filteredTodos = todos.filter(todo => todo.completed);
    }

    filteredTodos.forEach(todo => {
        // Tạo thẻ li
        const li = document.createElement('li');
        li.dataset.id = todo.id; // Gắn ID để dễ xử lý Event Delegation
        if (todo.completed) li.classList.add('completed');

        // Tạo thẻ span chứa chữ
        const span = document.createElement('span');
        span.textContent = todo.text;

        // Tạo ô input ẩn dùng để edit
        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.className = 'edit-input';
        editInput.value = todo.text;

        // Tạo nút Xóa
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        deleteBtn.className = 'delete-btn';

        // Gắn vào li
        li.appendChild(span);
        li.appendChild(editInput);
        li.appendChild(deleteBtn);

        // Gắn li vào ul
        todoList.appendChild(li);
    });

    // Cập nhật số lượng chưa hoàn thành
    const activeCount = todos.filter(t => !t.completed).length;
    todoCount.textContent = `${activeCount} items left`;
}

// Thêm Todo mới
function addTodo() {
    const text = todoInput.value.trim();
    if (text !== '') {
        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false
        };
        todos.push(newTodo);
        saveToLocalStorage();
        renderTodos();
        todoInput.value = '';
    }
}

// SỰ KIỆN (EVENTS)
// Sự kiện Add Todo
addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
});

// YÊU CẦU: EVENT DELEGATION CHO TODOLIST
// Click: Toggle completed hoặc Xóa
todoList.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    if (!li) return;
    
    const id = Number(li.dataset.id);

    // Xóa Todo
    if (e.target.className === 'delete-btn') {
        todos = todos.filter(todo => todo.id !== id);
        saveToLocalStorage();
        renderTodos();
    }
    
    // Toggle completed
    if (e.target.tagName === 'SPAN') {
        const todo = todos.find(t => t.id === id);
        todo.completed = !todo.completed;
        saveToLocalStorage();
        renderTodos();
    }
});

// Double Click: Chuyển sang Edit Mode
todoList.addEventListener('dblclick', (e) => {
    if (e.target.tagName === 'SPAN') {
        const li = e.target.closest('li');
        li.classList.add('editing');
        const input = li.querySelector('.edit-input');
        input.focus();
    }
});

// Lưu Edit Mode khi ấn Enter
todoList.addEventListener('keypress', (e) => {
    if (e.target.className === 'edit-input' && e.key === 'Enter') {
        const li = e.target.closest('li');
        const id = Number(li.dataset.id);
        const newText = e.target.value.trim();
        
        if (newText) {
            const todo = todos.find(t => t.id === id);
            todo.text = newText;
            saveToLocalStorage();
            renderTodos();
        }
    }
});

// Lọc (Filter)
filters.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        // Xóa class active cũ, đổi sang nút mới
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        // Cập nhật biến filter và render lại
        currentFilter = e.target.dataset.filter;
        renderTodos();
    }
});

// Xóa tất cả các task đã completed
clearCompletedBtn.addEventListener('click', () => {
    todos = todos.filter(todo => !todo.completed);
    saveToLocalStorage();
    renderTodos();
});

// Khởi chạy ứng dụng lần đầu
renderTodos();