let experience = +prompt("Mời bạn nhập vào năm kinh nghiệm nhân viên: ");

    if (experience > 1 ) {
        alert("Mới vào nghề")
    } else if (experience > 1 && experience <= 3) {
        alert("Nhân Viên có kinh nghiệm");
    } else if (experience >= 4 && experience <= 6) {
        alert("chuyên viên");
    } else {
        alert("Quản lý");
    }