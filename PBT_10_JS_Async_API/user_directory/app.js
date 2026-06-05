// ==========================================
// 1. API LAYER
// ==========================================
const api = {
    baseURL: "https://jsonplaceholder.typicode.com",
    
    async getUsers() {
        const res = await fetch(`${this.baseURL}/users`);
        if (!res.ok) throw new Error("Lỗi khi tải danh sách user");
        return res.json();
    },
    
    async createUser(data) {
        const res = await fetch(`${this.baseURL}/users`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
        });
        if (!res.ok) throw new Error("Lỗi khi tạo user");
        return res.json();
    },
    
    async updateUser(id, data) {
        const res = await fetch(`${this.baseURL}/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
        });
        if (!res.ok) throw new Error("Lỗi khi cập nhật user");
        return res.json();
    },
    
    async deleteUser(id) {
        const res = await fetch(`${this.baseURL}/users/${id}`, { method: 'DELETE' });
        if (!res.ok) throw new Error("Lỗi khi xóa user");
        return true;
    }
};

// ==========================================
// 2. UI LAYER
// ==========================================
const ui = {
    userList: document.getElementById('userList'),
    loading: document.getElementById('loading'),
    toast: document.getElementById('toast'),
    form: document.getElementById('userForm'),
    userId: document.getElementById('userId'),
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    submitBtn: document.getElementById('submitBtn'),
    cancelBtn: document.getElementById('cancelBtn'),

    renderUsers(users) {
        this.userList.innerHTML = '';
        if (users.length === 0) {
            this.userList.innerHTML = '<p style="text-align:center; color:#666;">Không tìm thấy kết quả.</p>';
            return;
        }

        users.forEach(user => {
            const card = document.createElement('div');
            card.className = 'user-card';
            card.innerHTML = `
                <div class="user-info">
                    <h3>${user.name}</h3>
                    <p>${user.email}</p>
                </div>
                <div class="actions">
                    <button class="edit-btn" data-id="${user.id}">Edit</button>
                    <button class="delete-btn" data-id="${user.id}">Delete</button>
                </div>
            `;
            this.userList.appendChild(card);
        });
    },

    showLoading() {
        this.loading.classList.remove('hidden');
        this.userList.classList.add('hidden');
    },

    hideLoading() {
        this.loading.classList.add('hidden');
        this.userList.classList.remove('hidden');
    },

    showToast(message, type) {
        this.toast.textContent = message;
        this.toast.className = `toast ${type}`;
        setTimeout(() => this.toast.classList.add('hidden'), 3000);
    },

    showError(message) { this.showToast(message, 'error'); },
    showSuccess(message) { this.showToast(message, 'success'); },

    fillForm(user) {
        this.userId.value = user.id;
        this.name.value = user.name;
        this.email.value = user.email;
        this.submitBtn.textContent = 'Cập nhật';
        this.cancelBtn.classList.remove('hidden');
    },

    resetForm() {
        this.form.reset();
        this.userId.value = '';
        this.submitBtn.textContent = 'Thêm User';
        this.cancelBtn.classList.add('hidden');
    }
};

// ==========================================
// 3. APP CONTROLLER (Logic)
// ==========================================
let usersData = [];

// Khởi tạo: Lấy dữ liệu
async function initApp() {
    ui.showLoading();
    try {
        usersData = await api.getUsers();
        ui.renderUsers(usersData);
    } catch (error) {
        ui.showError(error.message);
    } finally {
        ui.hideLoading();
    }
}

// Tìm kiếm (Client-side)
document.getElementById('searchInput').addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase().trim();
    const filtered = usersData.filter(u => 
        u.name.toLowerCase().includes(keyword) || 
        u.email.toLowerCase().includes(keyword)
    );
    ui.renderUsers(filtered);
});

// Thêm / Sửa User (Form Submit)
ui.form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = ui.userId.value;
    const data = { name: ui.name.value.trim(), email: ui.email.value.trim() };

    ui.submitBtn.disabled = true;
    try {
        if (id) {
            // Logic Cập nhật (UPDATE)
            await api.updateUser(id, data);
            const index = usersData.findIndex(u => u.id == id);
            if (index !== -1) usersData[index] = { ...usersData[index], ...data };
            ui.showSuccess("Cập nhật thành công!");
        } else {
            // Logic Thêm mới (CREATE)
            const newUser = await api.createUser(data);
            usersData.unshift(newUser); // Thêm lên đầu danh sách
            ui.showSuccess("Thêm user thành công!");
        }
        ui.resetForm();
        
        // Trigger lại sự kiện search để render đúng data hiện tại
        document.getElementById('searchInput').dispatchEvent(new Event('input'));
    } catch (error) {
        ui.showError(error.message);
    } finally {
        ui.submitBtn.disabled = false;
    }
});

// Nút Hủy Edit
ui.cancelBtn.addEventListener('click', () => ui.resetForm());

// Xóa / Bấm Edit (Event Delegation)
ui.userList.addEventListener('click', async (e) => {
    const id = e.target.dataset.id;
    if (!id) return;

    // Bấm Sửa
    if (e.target.classList.contains('edit-btn')) {
        const user = usersData.find(u => u.id == id);
        if (user) ui.fillForm(user);
    }

    // Bấm Xóa
    if (e.target.classList.contains('delete-btn')) {
        if (!confirm("Bạn có chắc chắn muốn xóa user này không?")) return;
        
        e.target.disabled = true;
        try {
            await api.deleteUser(id);
            usersData = usersData.filter(u => u.id != id);
            document.getElementById('searchInput').dispatchEvent(new Event('input'));
            ui.showSuccess("Xóa thành công!");
        } catch (error) {
            ui.showError(error.message);
            e.target.disabled = false;
        }
    }
});

// Chạy app
initApp();