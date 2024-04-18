function changeImage(imageUrl) {
    document.getElementById('product_image').src = imageUrl;
}

function purchase() {
    alert("죄송합니다. 해당 제품은 현재 품절되었습니다.");
}


function preparing() {
    alert("죄송합니다. 해당 제품은 현재 준비중입니다.");
}

function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username.trim() === "" || password.trim() === "") {
        alert("아이디와 비밀번호를 모두 입력해주세요.");
        return false;
    }

    return true;
}