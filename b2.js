let math = +prompt("Mời bạn nhập vào điểm môn toán: ");
let literature = +prompt("Mời bạn nhập vào điểm môn văn: ");
let englishSubject = +prompt("Mời bạn nhập vào điểm môn anh: ");
let averageScore = (math+literature+englishSubject)/3;
if (averageScore >=0 && averageScore <= 10) {
    if (averageScore >= 8.0 && averageScore <= 10) {
        alert("Học lực giỏi")
    } else if (averageScore >=6.5 && averageScore <= 7.9) {
        alert("Học lực khá");
    } else if (averageScore >= 5.0 && averageScore <= 6.4) {
        alert("Học lực Trung Bình");
    } else {
        alert("Học lực yếu");
    }
} else{
    alert ("Bạn không được nhập điểm một trong ba môn quá 10 điểm !!!");
}