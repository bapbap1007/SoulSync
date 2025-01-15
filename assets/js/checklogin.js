const checkLogged = localStorage.getItem('logged');
const formsigninup = document.querySelector('.navbar-button');
const datauser = document.querySelector('.user-name');
const buttonlogout = document.querySelector(".dropdown-item");


const client_id = `382338656678-k2610scbuke133bljklkjkbh48rn9tqf.apps.googleusercontent.com`;
const url1 = 'https://ducmanhsuperdev.github.io/soulsync';
const url2 = 'http//127.0.0.1:5500';
const url3 = 'https://bapbap1007.github.io/soulsync/'

const GET_LINK_TOKEN = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile&response_type=token&redirect_uri=https://bapbap1007.github.io/soulsync/&client_id=${client_id}`
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('logged') === null) {
        localStorage.setItem('logged', false);
    }
    const signBtn = document.querySelector(".sign_btn");
    signBtn.addEventListener("click", () => {
        window.location.href = GET_LINK_TOKEN
    });
});



// Hàm lấy access token từ URL
const getToken = () => {
    console.log(window.location.hash);

    const params = new URLSearchParams(window.location.hash.substring(1));
    return params.get("access_token");
};

// Hàm gọi API để lấy thông tin người dùng
const getUserInfo = async () => {

    try {
        const accessToken = getToken();
        if (!accessToken) {
            console.error("Access token không tồn tại!");
            return;
        }

        const response = await fetch(
            `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`
        );

        if (!response.ok) {
            throw new Error(`Lỗi API: ${response.status} ${response.statusText}`);
        }

        const userData = await response.json();
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('logged', true);

        window.location.href = 'index.html';
        alert("Đăng nhập thành công")

        return userData;

    } catch (error) {
        console.error("Đã xảy ra lỗi khi lấy thông tin người dùng:", error);
        return null;
    }


};

function render() {

    const userdata = JSON.parse(localStorage.getItem('user'));

    if (userdata) {
        datauser.textContent = userdata.name;
        formsigninup.style.display = 'none';
    }
    else {
        datauser.style.display = 'none';
        formsigninup.style.display = 'flex';
    }
}
render();



// Gọi hàm lấy thông tin người dùng

getUserInfo();





function checklogin() {

    if (JSON.parse(localStorage.getItem('logged')) == true) {
        datauser.textContent = userdata.name;
        formsigninup.style.display = 'none';
    }
    else {
        datauser.style.display = 'none';
        formsigninup.style.display = 'flex';
        document.querySelector('.user-dropdown').style.display = 'none';
    }
}




function checkLinkAccess(event) {

    // localStorage.setItem('logged', userdata.name);
    const logged = JSON.parse(localStorage.getItem('logged'));
    console.log(logged);
    if (logged == false) {
        event.preventDefault();
        alert("Bạn cần đăng nhập để tiếp tục.");
        window.location.href = "login.html"; // Chuyển đến trang đăng nhập nếu chưa đăng nhập
        return false; // Ngăn không cho truy cập
    }
    return true; // Cho phép truy cập
}


function testlog() {

}


buttonlogout.onclick = function () {
    localStorage.setItem('logged', false);
    window.location.href = "index.html";

}

// checkLinkAccess();

checklogin(); 
