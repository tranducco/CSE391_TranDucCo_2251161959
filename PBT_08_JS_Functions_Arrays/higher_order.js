function pipe(...fns) {
    return (x) => fns.reduce((v, f) => f(v), x);
}
//test:
const process = pipe(
    x => x * 2,        // 5 → 10
    x => x + 10,       // 10 → 20
    x => x.toString(), // 20 → "20"
    x => "Kết quả: " + x
);
console.log(process(5)); // → "Kết quả: 20"

function memoize(fn) {
    const cache = {};
    return (n) => {
        if (cache[n] !== undefined) return cache[n];
        const res = fn(n);
        cache[n] = res;
        return res;
    }
}
//test:
const expensiveCalc = memoize((n) => {
    console.log("Đang tính...");
    let result = 0;
    for (let i = 0; i < n; i++) result += i;
    return result;
});
console.log(expensiveCalc(1000000)); // → "Đang tính..." → 499999500000
console.log(expensiveCalc(1000000)); // → (không in "Đang tính...", lấy cache!)

function debounce(fn, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    }
}

async function retry(fn, maxAttempts = 3) {
    for (let i = 0; i < maxAttempts; i++) {
        try {
            return await fn();
        } catch (err) {
            if (i === maxAttempts - 1) throw err;
        }
    }
}
//test:
const search = debounce((query) => {
    console.log("Searching:", query);
}, 500);
// Gọi liên tục → chỉ lần cuối mới chạy
async function retry(fn, maxAttempts = 3) { /* ... */ }