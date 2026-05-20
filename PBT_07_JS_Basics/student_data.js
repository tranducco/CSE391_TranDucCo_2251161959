const students = [
{ name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
{ name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
{ name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
{ name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
{ name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
{ name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
{ name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
{ name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

let sumMath = 0, sumPhysics = 0, sumCs = 0;
let maleCount = 0, maleSum = 0;
let femaleCount = 0, femaleSum = 0;

let stats = { "Giỏi": 0, "Khá": 0, "Trung bình": 0, "Yếu": 0 };
let maxStudent = null, minStudent = null;

console.log("| STT | Tên    | TB   | Xếp loại    |");
console.log("|-----|--------|------|-------------|");

for (let i = 0; i < students.length; i++) {
    let s = students[i];
    
    // 1. Tính điểm TB
    let avg = (s.math * 0.4) + (s.physics * 0.3) + (s.cs * 0.3);
    avg = parseFloat(avg.toFixed(1)); // Làm tròn 1 chữ số thập phân
    s.avg = avg; // Lưu lại để dùng cho bước 5

    // 2. Xếp loại
    let rank = "";
    if (avg >= 8.0) rank = "Giỏi";
    else if (avg >= 6.5) rank = "Khá";
    else if (avg >= 5.0) rank = "Trung bình";
    else rank = "Yếu";

    // 4. Đếm xếp loại
    stats[rank]++;

    // 3. In bảng
    // Sử dụng padEnd để format bảng cho đẹp
    console.log(`| ${String(i+1).padEnd(3)} | ${s.name.padEnd(6)} | ${avg.toFixed(1).padEnd(4)} | ${rank.padEnd(11)} |`);

    // Phục vụ bước 5: Tìm max, min
    if (!maxStudent || avg > maxStudent.avg) maxStudent = s;
    if (!minStudent || avg < minStudent.avg) minStudent = s;

    // Phục vụ bước 6: Tính tổng môn học
    sumMath += s.math;
    sumPhysics += s.physics;
    sumCs += s.cs;

    // Phục vụ bước 7: Điểm TB theo giới tính
    if (s.gender === "M") {
        maleCount++;
        maleSum += avg;
    } else {
        femaleCount++;
        femaleSum += avg;
    }
}

console.log("\n--- THỐNG KÊ ---");
console.log(`4. Số lượng SV: Giỏi (${stats["Giỏi"]}), Khá (${stats["Khá"]}), TB (${stats["Trung bình"]}), Yếu (${stats["Yếu"]})`);
console.log(`5. Cao điểm nhất: ${maxStudent.name} (${maxStudent.avg}) | Thấp điểm nhất: ${minStudent.name} (${minStudent.avg})`);
console.log(`6. TB toàn lớp môn Toán: ${(sumMath / students.length).toFixed(1)}`);
console.log(`   TB toàn lớp môn Lý: ${(sumPhysics / students.length).toFixed(1)}`);
console.log(`   TB toàn lớp môn CS: ${(sumCs / students.length).toFixed(1)}`);
console.log(`7. Bonus - TB Nam: ${(maleSum / maleCount).toFixed(1)} | TB Nữ: ${(femaleSum / femaleCount).toFixed(1)}`);