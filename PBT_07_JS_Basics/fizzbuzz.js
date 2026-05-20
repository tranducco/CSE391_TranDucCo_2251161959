// Version 1: Classic
console.log("--- Version 1: Classic ---");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}

// Version 2: Custom
console.log("\n--- Version 2: Custom ---");
function customFizzBuzz(n, rules) {
    for (let i = 1; i <= n; i++) {
        let output = "";
        
        // Duyệt qua từng rule, nếu chia hết thì nối chuỗi
        for (let j = 0; j < rules.length; j++) {
            if (i % rules[j].divisor === 0) {
                output += rules[j].word;
            }
        }
        
        // Nếu output rỗng (không chia hết cho số nào trong rules) thì in ra số i
        console.log(output === "" ? i : output);
    }
}

// Test
customFizzBuzz(30, [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" }
]);