// 1. STATE & DOM ELEMENTS
let currentPage = 1;
let isLoading = false;
const limit = 20;
const galleryGrid = document.getElementById('galleryGrid');
const loadingIndicator = document.getElementById('loadingIndicator');
const loadTrigger = document.getElementById('load-trigger');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeLightbox = document.getElementById('closeLightbox');
// 2. OBSERVERS (Intersection Observer)
// Observer 1: Lazy load cho TỪNG bức ảnh
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src; 
            img.onload = () => img.classList.add('loaded');
            observer.unobserve(img); 
        }
    });
}, { rootMargin: '50px' }); 

// Observer 2: Infinite scroll (Chạm đáy thì gọi thêm API)
const scrollObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !isLoading) {
        loadMorePhotos();
    }
}, { rootMargin: '100px' }); 
// 3. API & LOGIC
async function loadMorePhotos() {
    isLoading = true;
    loadingIndicator.classList.remove('hidden');

    try {
        // Dùng Lorem Picsum API
        const response = await fetch(`https://picsum.photos/v2/list?page=${currentPage}&limit=${limit}`);
        if (!response.ok) throw new Error("Lỗi khi tải ảnh");
        const photos = await response.json();
        
        renderPhotos(photos);
        currentPage++; 
    } catch (error) {
        console.error("Failed to load photos:", error);
    } finally {
        isLoading = false;
        loadingIndicator.classList.add('hidden');
    }
}

function renderPhotos(photos) {
    photos.forEach(photo => {
        const div = document.createElement('div');
        div.className = 'img-card';
        const thumbUrl = `https://picsum.photos/id/${photo.id}/400/400`;
        const fullUrl = `https://picsum.photos/id/${photo.id}/1200/800`;
        const img = document.createElement('img');
        img.dataset.src = thumbUrl; 
        img.dataset.full = fullUrl; 
        img.alt = photo.author;
        div.appendChild(img);
        galleryGrid.appendChild(div);
        imageObserver.observe(img);
    });
}
// 4. LIGHTBOX EVENTS
// Mở Lightbox (Event Delegation trên Grid)
galleryGrid.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        lightboxImg.src = e.target.dataset.full; 
        lightbox.classList.remove('hidden');
    }
});

// Đóng Lightbox
closeLightbox.addEventListener('click', () => lightbox.classList.add('hidden'));

// Đóng khi click ra ngoài ảnh
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.add('hidden');
});
// 5. KHỞI CHẠY APP
scrollObserver.observe(loadTrigger); 
