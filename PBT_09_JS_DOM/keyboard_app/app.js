// 1. DATA & STATE
// Data Gallery
const images = Array.from({ length: 9 }, (_, i) => `https://placehold.co/600x400?text=Image+${i + 1}`);
let currentIndex = -1;
let isSlideshowPlaying = false;
let slideshowInterval = null;

// Data Command Palette
const commands = [
    { id: 'dark', label: 'Tắt/Bật Dark Mode' },
    { id: 'gallery', label: 'Mở Gallery Ảnh' },
    { id: 'alert', label: 'Hiện thông báo Alert' },
    { id: 'reload', label: 'Tải lại trang' }
];
let filteredCommands = [...commands];
let selectedCmdIndex = 0; // Quản lý focus bằng mũi tên lên/xuống

// DOM Elements
const galleryContainer = document.getElementById('galleryContainer');
const galleryModal = document.getElementById('galleryModal');
const mainImage = document.getElementById('mainImage');
const galleryStatus = document.getElementById('galleryStatus');

const cmdModal = document.getElementById('cmdModal');
const cmdInput = document.getElementById('cmdInput');
const cmdList = document.getElementById('cmdList');

// 2. GALLERY LOGIC
function initGallery() {
    images.forEach((src, index) => {
        const btn = document.createElement('button');
        btn.className = 'thumb-btn';
        btn.setAttribute('aria-label', `Mở ảnh số ${index + 1}`);
        btn.innerHTML = `<img src="${src}" alt="Thumbnail ${index + 1}">`;
        
        btn.addEventListener('click', () => openGallery(index));
        galleryContainer.appendChild(btn);
    });
}

function openGallery(index) {
    currentIndex = index;
    updateGalleryImage();
    galleryModal.classList.add('active');
    // Set focus vào nút Next để bẫy focus (Trap focus) hoặc tiện thao tác
    document.getElementById('nextBtn').focus();
}

function closeGallery() {
    galleryModal.classList.remove('active');
    stopSlideshow();
    // Trả lại focus cho thumbnail cuối cùng vừa xem
    const thumbs = document.querySelectorAll('.thumb-btn');
    if (thumbs[currentIndex]) thumbs[currentIndex].focus();
    currentIndex = -1;
}

function updateGalleryImage() {
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    mainImage.src = images[currentIndex];
}

function toggleSlideshow() {
    if (isSlideshowPlaying) {
        stopSlideshow();
    } else {
        isSlideshowPlaying = true;
        galleryStatus.textContent = '▶ Đang tự động chuyển ảnh (Slideshow)';
        slideshowInterval = setInterval(() => {
            currentIndex++;
            updateGalleryImage();
        }, 2000);
    }
}

function stopSlideshow() {
    isSlideshowPlaying = false;
    galleryStatus.textContent = '⏸ Đã dừng slideshow';
    clearInterval(slideshowInterval);
}

// Lắng nghe nút trong Modal
document.getElementById('prevBtn').addEventListener('click', () => { stopSlideshow(); currentIndex--; updateGalleryImage(); });
document.getElementById('nextBtn').addEventListener('click', () => { stopSlideshow(); currentIndex++; updateGalleryImage(); });
document.getElementById('closeGalleryBtn').addEventListener('click', closeGallery);

// 3. COMMAND PALETTE LOGIC

function openCmdPalette() {
    cmdModal.classList.add('active');
    cmdInput.value = '';
    filterCommands('');
    cmdInput.focus(); // Focus ngay vào ô nhập
}

function closeCmdPalette() {
    cmdModal.classList.remove('active');
}

function filterCommands(keyword) {
    const text = keyword.toLowerCase().trim();
    filteredCommands = commands.filter(cmd => cmd.label.toLowerCase().includes(text));
    selectedCmdIndex = 0; // Reset lại dòng đang chọn
    renderCommands();
}

function renderCommands() {
    cmdList.innerHTML = '';
    filteredCommands.forEach((cmd, index) => {
        const li = document.createElement('li');
        li.className = `cmd-item ${index === selectedCmdIndex ? 'selected' : ''}`;
        li.textContent = cmd.label;
        li.setAttribute('role', 'option');
        li.setAttribute('aria-selected', index === selectedCmdIndex);
        
        // Chuột click chạy luôn
        li.addEventListener('click', () => executeCommand(cmd.id));
        cmdList.appendChild(li);
    });
}

function executeCommand(id) {
    closeCmdPalette();
    switch (id) {
        case 'dark': document.body.classList.toggle('dark-mode'); break;
        case 'gallery': openGallery(0); break;
        case 'alert': alert('Bạn vừa thực thi lệnh từ Command Palette!'); break;
        case 'reload': location.reload(); break;
    }
}


// ==========================================
// 4. GLOBAL KEYBOARD SHORTCUTS & EVENT LISTENERS
// ==========================================

window.addEventListener('keydown', (e) => {
    const isCmdOpen = cmdModal.classList.contains('active');
    const isGalleryOpen = galleryModal.classList.contains('active');

    // 4.1. Mở Command Palette (Ctrl + K)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault(); // Chặn focus lên thanh tìm kiếm trình duyệt
        isCmdOpen ? closeCmdPalette() : openCmdPalette();
        return;
    }

    // 4.2. Đóng Modal bằng phím Escape
    if (e.key === 'Escape') {
        if (isCmdOpen) closeCmdPalette();
        if (isGalleryOpen) closeGallery();
        return;
    }

    // 4.3. Xử lý phím khi COMMAND PALETTE đang mở (Điều hướng mũi tên + Enter)
    if (isCmdOpen) {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedCmdIndex = (selectedCmdIndex + 1) % filteredCommands.length;
            renderCommands();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedCmdIndex = (selectedCmdIndex - 1 + filteredCommands.length) % filteredCommands.length;
            renderCommands();
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (filteredCommands.length > 0) {
                executeCommand(filteredCommands[selectedCmdIndex].id);
            }
        }
        return; // Dừng tại đây, không xử lý phím Gallery
    }

    // 4.4. Xử lý phím khi GALLERY đang mở (Hoặc nhảy ảnh 1-9 từ ngoài trang)
    
    // Nếu đang ở trong một ô input nào đó (không tính Cmd Palette vì đã chặn ở trên), không can thiệp phím
    if (document.activeElement.tagName === 'INPUT') return;

    // Phím 1 đến 9: Nhảy đến ảnh tương ứng (0-8)
    if (e.key >= '1' && e.key <= '9') {
        const index = parseInt(e.key) - 1;
        if (index < images.length) {
            openGallery(index);
        }
    }

    // Phím Mũi tên trái / phải để chuyển ảnh (chỉ khi gallery đang mở)
    if (isGalleryOpen) {
        if (e.key === 'ArrowLeft') {
            stopSlideshow(); currentIndex--; updateGalleryImage();
        } else if (e.key === 'ArrowRight') {
            stopSlideshow(); currentIndex++; updateGalleryImage();
        } 
        // Phím Space để Play/Pause (chặn cuộn trang)
        else if (e.key === ' ') {
            e.preventDefault();
            toggleSlideshow();
        }
    }
});

// Lắng nghe gõ phím vào ô tìm kiếm Command Palette
cmdInput.addEventListener('input', (e) => filterCommands(e.target.value));

// Khởi tạo
initGallery();