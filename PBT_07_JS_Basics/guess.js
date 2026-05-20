const targetNumber = Math.floor(Math.random() * 100) + 1;
const MAX_GUESSES = 7;
let attempts = 0;
let guessedNumbers = [];

alert("Chào mừng đến với game Đoán Số! Máy đã chọn một số từ 1 đến 100. Bạn có 7 lần đoán.");

while (attempts < MAX_GUESSES) {
    let input = prompt(`Lần đoán thứ ${attempts + 1}/${MAX_GUESSES}.\nNhập số bạn đoán (1-100):`);
    
    // Nếu người dùng ấn Cancel
    if (input === null) {
        alert("Bạn đã thoát game.");
        break;
    }

    let guess = parseInt(input);

    // Validate
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Vui lòng nhập một số hợp lệ từ 1 đến 100!");
        continue; 
    }

    // Check trùng
    if (guessedNumbers.includes(guess)) {
        alert("Bạn đã đoán số này rồi! Vui lòng chọn số khác.");
        continue;
    }

    // Ghi nhận lần đoán hợp lệ
    guessedNumbers.push(guess);
    attempts++;

    // Logic trò chơi
    if (guess === targetNumber) {
        alert(`Đúng rồi! Bạn đoán đúng sau ${attempts} lần!`);
        break;
    } else if (guess < targetNumber) {
        alert("Thấp hơn! Hãy thử số lớn hơn.");
    } else {
        alert("Cao hơn! Hãy thử số nhỏ hơn.");
    }

    // Check thua
    if (attempts === MAX_GUESSES) {
        alert(`Bạn đã hết lượt! Số đúng là: ${targetNumber}`);
    }
}