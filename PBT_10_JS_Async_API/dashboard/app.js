const refreshBtn = document.getElementById('refreshBtn');
const loadTimeBadge = document.getElementById('loadTime');
const globalLoading = document.getElementById('globalLoading');

const fetchAPI = async (url) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Lỗi HTTP ${res.status}`);
    return res.json();
};

async function loadDashboard() {
    // 1. Reset UI (Hiện Global Loading, ẩn thời gian, set widget loading)
    globalLoading.classList.remove('hidden');
    loadTimeBadge.textContent = '';
    
    for (let i = 0; i < 3; i++) {
        document.getElementById(`widget-${i}`).innerHTML = `
            <div class="widget-loading">
                <div class="spinner"></div>
                Đang tải...
            </div>`;
    }

    const startTime = Date.now();
    
    // 2. Gọi song song 3 API
    // Dùng Promise.allSettled để API nào lỗi thì hiển thị lỗi widget đó, không sập toàn trang
    const results = await Promise.allSettled([
        fetchAPI("https://randomuser.me/api/?results=3"),            
        fetchAPI("https://dog.ceo/api/breeds/image/random/1"),       
        fetchAPI("https://restcountries.com/v3.1/name/vietnam")       
    ]);
    
    // 3. Ẩn Global Loading
    globalLoading.classList.add('hidden');
    
    // 4. Phân tích kết quả và Render từng widget
    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            renderWidget(index, result.value);
        } else {
            renderWidgetError(index, result.reason.message);
        }
    });
    
    // 5. Tính thời gian
    const timeTaken = Date.now() - startTime;
    loadTimeBadge.textContent = `Data loaded in ${timeTaken}ms`;
    console.log(`Loaded in ${timeTaken}ms`);
}

// HÀM RENDER RIÊNG CHO TỪNG WIDGET

function renderWidget(index, data) {
    const container = document.getElementById(`widget-${index}`);
    
    if (index === 0) {
        const usersHTML = data.results.map(user => `
            <li>👤 <strong>${user.name.first} ${user.name.last}</strong> <br> <small>${user.email}</small></li>
        `).join('');
        container.innerHTML = `<ul>${usersHTML}</ul>`;
    } 
    else if (index === 1) {
        const imgSrc = Array.isArray(data.message) ? data.message[0] : data.message;
        container.innerHTML = `<img src="${imgSrc}" class="dog-img" alt="Random Dog">`;
    } 
    else if (index === 2) {
        const country = data[0];
        container.innerHTML = `
            <p><strong>Quốc gia:</strong> ${country.name.common}</p>
            <p><strong>Thủ đô:</strong> ${country.capital ? country.capital[0] : 'N/A'}</p>
            <p><strong>Dân số:</strong> ${country.population.toLocaleString()}</p>
            <p><strong>Khu vực:</strong> ${country.region}</p>
            <h1 style="text-align:center; margin-top:10px;">${country.flag}</h1>
        `;
    }
}
// Hàm render trạng thái lỗi cho 1 widget
function renderWidgetError(index, errorMessage) {
    const container = document.getElementById(`widget-${index}`);
    container.innerHTML = `
        <div class="error-msg">
            <p>❌ Lỗi tải dữ liệu</p>
            <small>${errorMessage}</small>
        </div>
    `;
}


refreshBtn.addEventListener('click', loadDashboard);
loadDashboard();