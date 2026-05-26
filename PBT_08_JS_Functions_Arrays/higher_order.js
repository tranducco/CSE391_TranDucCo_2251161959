function pipe(...fns) {
    return (x) => fns.reduce((v, f) => f(v), x);
}

function memoize(fn) {
    const cache = {};
    return (n) => {
        if (cache[n] !== undefined) return cache[n];
        const res = fn(n);
        cache[n] = res;
        return res;
    }
}

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