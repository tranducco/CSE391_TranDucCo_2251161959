
const products = [
    { id: 1, name: "iPhone 16 Pro", price: 28990000, category: "phone", image: "https://placehold.co/200?text=iPhone", rating: 4.8, inStock: true },
    { id: 2, name: "Samsung S24 Ultra", price: 31990000, category: "phone", image: "https://placehold.co/200?text=Samsung", rating: 4.7, inStock: true },
    { id: 3, name: "Xiaomi 14", price: 19990000, category: "phone", image: "https://placehold.co/200?text=Xiaomi", rating: 4.2, inStock: true },
    { id: 4, name: "MacBook Air M3", price: 27990000, category: "laptop", image: "https://placehold.co/200?text=MacBook", rating: 4.9, inStock: true },
    { id: 5, name: "Dell XPS 14", price: 35000000, category: "laptop", image: "https://placehold.co/200?text=Dell", rating: 4.6, inStock: true },
    { id: 6, name: "Lenovo ThinkPad", price: 25000000, category: "laptop", image: "https://placehold.co/200?text=Lenovo", rating: 4.5, inStock: true },
    { id: 7, name: "iPad Pro M4", price: 28990000, category: "tablet", image: "https://placehold.co/200?text=iPad", rating: 4.9, inStock: true },
    { id: 8, name: "Galaxy Tab S9", price: 18990000, category: "tablet", image: "https://placehold.co/200?text=GalaxyTab", rating: 4.5, inStock: true },
    { id: 9, name: "Xiaomi Pad 6", price: 8990000, category: "tablet", image: "https://placehold.co/200?text=MiPad", rating: 4.1, inStock: true },
    { id: 10, name: "Apple Watch S9", price: 10990000, category: "watch", image: "https://placehold.co/200?text=AppleWatch", rating: 4.7, inStock: true },
    { id: 11, name: "Galaxy Watch 6", price: 6990000, category: "watch", image: "https://placehold.co/200?text=GalaxyWatch", rating: 4.3, inStock: true },
    { id: 12, name: "Garmin Fenix 7", price: 18000000, category: "watch", image: "https://placehold.co/200?text=Garmin", rating: 4.8, inStock: true },
];

let currentProducts = [...products]; // Mảng dùng để hiển thị (bị thay đổi khi lọc/sort)
let cartCount = 0;

// Các DOM Elements
const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilters = document.getElementById('categoryFilters');
const sortSelect = document.getElementById('sortSelect');
const cartBadge = document.getElementById('cartBadge');
const themeToggleBtn = document.getElementById('themeToggleBtn');

// 2. CORE FUNCTIONS (Các hàm xử lý)
// YÊU CẦU: Render HTML bằng createElement
function renderProducts(list) {
    productGrid.innerHTML = ''; // Clear container

    list.forEach(product => {
        // Tạo Card
        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.id = product.id; // Gắn ID để dễ mở Modal

        // Tạo Ảnh
        const img = document.createElement('img');
        img.src = product.image;

        // Tạo Tên
        const title = document.createElement('h3');
        title.textContent = product.name;

        // Tạo Giá
        const price = document.createElement('p');
        price.className = 'price';
        price.textContent = product.price.toLocaleString() + ' đ';

        // Tạo Nút Thêm Giỏ Hàng
        const btn = document.createElement('button');
        btn.className = 'add-cart-btn';
        btn.textContent = 'Thêm giỏ';

        // Append vào DOM
        card.append(img, title, price, btn);
        productGrid.appendChild(card);
    });
}

// YÊU CẦU: Lọc theo Category
function filterByCategory(category) {
    if (category === 'all') {
        currentProducts = [...products];
    } else {
        currentProducts = products.filter(p => p.category === category);
    }
    // Chạy thêm hàm search/sort hiện tại để đồng bộ điều kiện
    const keyword = searchInput.value;
    searchProducts(keyword); // Hàm search sẽ gọi render
}

// YÊU CẦU: Search realtime
function searchProducts(keyword) {
    const text = keyword.toLowerCase().trim();
    // Lọc trên currentProducts (đã được lọc category) hoặc mảng gốc tuỳ logic
    // Ở đây ta lọc lại từ danh sách category hiện tại để kết hợp cả 2 bộ lọc
    const categoryActive = document.querySelector('.cat-btn.active').dataset.category;
    let baseList = categoryActive === 'all' ? products : products.filter(p => p.category === categoryActive);
    
    currentProducts = baseList.filter(p => p.name.toLowerCase().includes(text));
    sortProducts(sortSelect.value); // Gọi hàm sort để render
}

// YÊU CẦU: Sắp xếp (Sort)
function sortProducts(sortType) {
    switch (sortType) {
        case 'price-asc':
            currentProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            currentProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            currentProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'rating-desc':
            currentProducts.sort((a, b) => b.rating - a.rating);
            break;
    }
    renderProducts(currentProducts);
}

// YÊU CẦU: Tạo Modal hoàn toàn bằng JS
function showModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Element bao ngoài (Overlay mờ)
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    
    // Element nội dung
    const modal = document.createElement('div');
    modal.className = 'modal-content';

    const img = document.createElement('img');
    img.src = product.image;

    const name = document.createElement('h2');
    name.textContent = product.name;

    const detail = document.createElement('p');
    detail.textContent = `Giá: ${product.price.toLocaleString()} đ | Đánh giá: ⭐${product.rating}`;

    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-modal-btn';
    closeBtn.textContent = 'Đóng';
    
    // Logic đóng modal
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(overlay);
    });

    // Bấm ra ngoài overlay cũng đóng modal
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) document.body.removeChild(overlay);
    });

    modal.append(img, name, detail, closeBtn);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}


// ==========================================
// 3. EVENT LISTENERS
// ==========================================

// Sự kiện Search realtime
searchInput.addEventListener('input', (e) => {
    searchProducts(e.target.value);
});

// Sự kiện Filter Buttons (Event Delegation trên Container)
categoryFilters.addEventListener('click', (e) => {
    if (e.target.classList.contains('cat-btn')) {
        // Active class logic
        document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        filterByCategory(e.target.dataset.category);
    }
});

// Sự kiện Sort Dropdown
sortSelect.addEventListener('change', (e) => {
    sortProducts(e.target.value);
});

// Sự kiện Click Card hoặc Thêm giỏ (Event Delegation trên Grid container)
productGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    if (!card) return; // Click ra ngoài khoảng trống

    const id = Number(card.dataset.id);

    // Bấm nút thêm giỏ
    if (e.target.classList.contains('add-cart-btn')) {
        cartCount++;
        cartBadge.textContent = cartCount;
    } 
    // Bấm vào khu vực khác trên thẻ -> Mở Modal chi tiết
    else {
        showModal(id);
    }
});

//Dark mode
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Light Mode';
    } else {
        themeToggleBtn.textContent = 'Dark Mode';
    }
});

renderProducts(currentProducts);