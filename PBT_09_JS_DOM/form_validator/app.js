// ==========================================
// 1. CHUẨN BỊ DOM & TRẠNG THÁI (STATE)
// ==========================================
const form = document.getElementById('registerForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirmPassword');
const phoneInput = document.getElementById('phone');
const submitBtn = document.getElementById('submitBtn');

// Các Object lưu trữ trạng thái Valid của từng field
const isValid = {
    name: false,
    email: false,
    password: false,
    confirm: false,
    phone: false
};

// Hàm kiểm tra tổng để mở khóa nút Submit
function checkFormValidity() {
    // Nếu tất cả các giá trị trong object isValid đều là true -> Disable = false
    const allValid = Object.values(isValid).every(status => status === true);
    submitBtn.disabled = !allValid;
}
// 2. LOGIC VALIDATE TỪNG TRƯỜNG (Real-time)
// 2.1 Name (2-50 ký tự -> Hiện ✅ ❌)
nameInput.addEventListener('input', (e) => {
    const val = e.target.value.trim();
    const icon = document.getElementById('nameIcon');
    
    if (val.length >= 2 && val.length <= 50) {
        icon.textContent = '✅';
        isValid.name = true;
    } else {
        icon.textContent = val.length === 0 ? '' : '❌';
        isValid.name = false;
    }
    checkFormValidity();
});

// 2.2 Email (Regex)
emailInput.addEventListener('input', (e) => {
    const val = e.target.value.trim();
    const errorBox = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex cơ bản cho email

    if (val === '') {
        errorBox.textContent = '';
        isValid.email = false;
    } else if (emailRegex.test(val)) {
        errorBox.textContent = '';
        isValid.email = true;
    } else {
        errorBox.textContent = 'Email không đúng định dạng!';
        isValid.email = false;
    }
    checkFormValidity();
});

// 2.3 Password Strength Meter
passwordInput.addEventListener('input', (e) => {
    const val = e.target.value;
    const bar = document.getElementById('passwordStrengthBar');
    const text = document.getElementById('passwordText');
    
    // Check regex
    const hasLetter = /[a-zA-Z]/.test(val);
    const hasNumber = /[0-9]/.test(val);
    const hasUpper = /[A-Z]/.test(val);
    const hasLower = /[a-z]/.test(val);
    const hasSpecial = /[^A-Za-z0-9]/.test(val);

    if (val.length === 0) {
        bar.style.width = '0';
        text.textContent = '';
        isValid.password = false;
    } else if (val.length < 8) {
        // Yếu: < 8 ký tự
        bar.style.width = '33%';
        bar.style.backgroundColor = 'red';
        text.textContent = 'Yếu';
        text.style.color = 'red';
        isValid.password = false; // Chưa đủ 8 ký tự thì không hợp lệ
    } else if (hasUpper && hasLower && hasNumber && hasSpecial) {
        // Mạnh: 8+ ký tự, đủ chữ hoa, thường, số, đặc biệt
        bar.style.width = '100%';
        bar.style.backgroundColor = 'green';
        text.textContent = 'Mạnh';
        text.style.color = 'green';
        isValid.password = true;
    } else if (hasLetter && hasNumber) {
        // Trung bình: 8+ ký tự, có chữ và số
        bar.style.width = '66%';
        bar.style.backgroundColor = '#ffc107'; // Vàng
        text.textContent = 'Trung bình';
        text.style.color = '#ffc107';
        isValid.password = true;
    } else {
        // Đủ 8 ký tự nhưng chỉ toàn số hoặc toàn chữ
        bar.style.width = '33%';
        bar.style.backgroundColor = 'red';
        text.textContent = 'Yếu (Cần thêm chữ và số)';
        text.style.color = 'red';
        isValid.password = false;
    }
    
    // Kích hoạt lại sự kiện confirmPassword nếu người dùng sửa pass sau khi đã nhập confirm
    confirmInput.dispatchEvent(new Event('input'));
});

// 2.4 Confirm Password (Khớp)
confirmInput.addEventListener('input', (e) => {
    const val = e.target.value;
    const errorBox = document.getElementById('confirmError');
    
    if (val === '') {
        errorBox.textContent = '';
        isValid.confirm = false;
    } else if (val === passwordInput.value) {
        errorBox.textContent = '';
        isValid.confirm = true;
    } else {
        errorBox.textContent = 'Mật khẩu không khớp!';
        isValid.confirm = false;
    }
    checkFormValidity();
});

// 2.5 Phone (Auto Format: 0901-234-567)
phoneInput.addEventListener('input', (e) => {
    // Chỉ giữ lại số
    let rawNumbers = e.target.value.replace(/\D/g, ''); 
    
    // Giới hạn tối đa 10 số
    if (rawNumbers.length > 10) {
        rawNumbers = rawNumbers.substring(0, 10);
    }

    // Logic chèn dấu gạch ngang (-)
    let formatted = rawNumbers;
    if (rawNumbers.length > 4) {
        formatted = rawNumbers.substring(0, 4) + '-' + rawNumbers.substring(4);
    }
    if (rawNumbers.length > 7) {
        formatted = formatted.substring(0, 8) + '-' + rawNumbers.substring(7);
    }

    // Gán lại giá trị cho input
    e.target.value = formatted;
    
    // Valid khi đủ 10 số
    const errorBox = document.getElementById('phoneError');
    if (rawNumbers.length === 0) {
        errorBox.textContent = '';
        isValid.phone = false;
    } else if (rawNumbers.length === 10) {
        errorBox.textContent = '';
        isValid.phone = true;
    } else {
        errorBox.textContent = 'Số điện thoại phải có 10 chữ số';
        isValid.phone = false;
    }
    checkFormValidity();
});

// 3. XỬ LÝ SUBMIT & MODAL
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Chặn tải lại trang

    // Lấy Modal
    const modal = document.getElementById('successModal');
    const modalData = document.getElementById('modalData');

    // In thông tin ra modal
    modalData.innerHTML = `
        <p><strong>Tên:</strong> ${nameInput.value}</p>
        <p><strong>Email:</strong> ${emailInput.value}</p>
        <p><strong>SĐT:</strong> ${phoneInput.value}</p>
    `;
    
    // Hiện modal
    modal.style.display = 'flex';
});

// Đóng Modal
document.getElementById('closeModalBtn').addEventListener('click', () => {
    document.getElementById('successModal').style.display = 'none';
    form.reset(); // Xóa trắng form
    
    // Reset lại trạng thái
    Object.keys(isValid).forEach(key => isValid[key] = false);
    checkFormValidity();
    document.getElementById('nameIcon').textContent = '';
    document.getElementById('passwordStrengthBar').style.width = '0';
    document.getElementById('passwordText').textContent = '';
});