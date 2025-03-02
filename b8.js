let a = +prompt("Nhập độ dài cạnh thứ nhất:");
let b = +prompt("Nhập độ dài cạnh thứ hai:");
let c = +prompt("Nhập độ dài cạnh thứ ba:");

if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
       alert("Tam giác đều");
    } else if (a === b || a === c || b === c) {
        alert("Tam giác cân");
    } else if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) {
        alert("Tam giác vuông");
    } else {
        alert("Tam giác thường");
    }
} else {
    alert("Không phải là tam giác hợp lệ");
}