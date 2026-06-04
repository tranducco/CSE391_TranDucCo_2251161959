// 1. DOM Elements & State

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const historyList = document.getElementById('historyList');

const stateLoading = document.getElementById('state-loading');
const stateError = document.getElementById('state-error');
const stateSuccess = document.getElementById('state-success');

const errorText = document.getElementById('errorText');
const cityNameEl = document.getElementById('cityName');
const temperatureEl = document.getElementById('temperature');
const descriptionEl = document.getElementById('description');
const humidityEl = document.getElementById('humidity');

// Khởi tạo lịch sử từ LocalStorage (Tối đa 5 item)
let searchHistory = JSON.parse(localStorage.getItem('weather_history')) || [];

// 2. UI State Management (Quản lý 3 trạng thái)
function switchState(state) {
    stateLoading.classList.add('hidden');
    stateError.classList.add('hidden');
    stateSuccess.classList.add('hidden');

    if (state === 'loading') stateLoading.classList.remove('hidden');
    if (state === 'error') stateError.classList.remove('hidden');
    if (state === 'success') stateSuccess.classList.remove('hidden');
}

// 3. Logic Fetch API
async function getWeather(city) {
    if (!city) return;
    
    switchState('loading'); // Kích hoạt trạng thái 1: Đang tải

    try {
        // Sử dụng wttr.in format=j1 (trả về JSON) và lang=vi (Tiếng Việt)
        const response = await fetch(`https://wttr.in/${encodeURIComponent(city)}?format=j1&lang=vi`);
        
        if (!response.ok) {
            throw new Error('Thành phố không tồn tại hoặc lỗi mạng!');
        }

        const data = await response.json();
        
        // Trích xuất dữ liệu
        const current = data.current_condition[0];
        const temp = current.temp_C;
        const humidity = current.humidity;
        // Ưu tiên lấy tiếng Việt, nếu không có thì lấy tiếng Anh
        const desc = current.lang_vi ? current.lang_vi[0].value : current.weatherDesc[0].value;
        const requestedLocation = data.nearest_area[0].areaName[0].value;

        // Đổ dữ liệu ra UI
        cityNameEl.textContent = requestedLocation;
        temperatureEl.textContent = `${temp}°C`;
        humidityEl.textContent = `${humidity}%`;
        descriptionEl.textContent = desc;

        // Kích hoạt trạng thái 2: Thành công
        switchState('success');
        
        // Lưu lịch sử
        saveHistory(requestedLocation);

    } catch (error) {
        // Kích hoạt trạng thái 3: Lỗi
        errorText.textContent = error.message;
        switchState('error');
    }
}

// 4. LocalStorage & History Logic
function saveHistory(city) {
    // Lọc bỏ thành phố nếu đã có để không bị trùng
    searchHistory = searchHistory.filter(item => item.toLowerCase() !== city.toLowerCase());
    
    // Thêm vào đầu mảng
    searchHistory.unshift(city);
    
    // Giới hạn 5 phần tử
    searchHistory = searchHistory.slice(0, 5);
    
    // Lưu và render lại
    localStorage.setItem('weather_history', JSON.stringify(searchHistory));
    renderHistory();
}

function renderHistory() {
    historyList.innerHTML = '';
    searchHistory.forEach(city => {
        const li = document.createElement('li');
        li.textContent = city;
        // Bấm vào lịch sử thì tìm kiếm lại luôn
        li.addEventListener('click', () => {
            cityInput.value = city;
            getWeather(city);
        });
        historyList.appendChild(li);
    });
}

// 5. Events Lắng nghe tương tác
searchBtn.addEventListener('click', () => {
    getWeather(cityInput.value.trim());
});

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getWeather(cityInput.value.trim());
    }
});

// Chạy lần đầu để load lịch sử
renderHistory();