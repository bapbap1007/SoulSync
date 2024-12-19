// import 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap';


// Lấy các phần tử cần thiết
const userInfo = document.querySelector('.user-info');
const dropdownMenu = document.querySelector('.dropdown-menu');
const body = document.querySelector('.wrapper');
console.log(body);

const check = document.querySelector('.check');

const bodyCotent = document.body.innerHTML;

userInfo.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});



document.addEventListener('click', (e) => {
    if (!userInfo.contains(e.target)) {
        dropdownMenu.classList.remove('show');
    }
});



// Kiểm tra ngay khi tải trang


// Lắng nghe sự kiện resize


function checkWidth() {

    if (window.innerWidth <= 1024 || window.innerWidth > 2048) {
        body.style.display = 'none';
        check.style.display = 'block';


    } else {

        body.style.display = 'block';
        check.style.display = 'none';
    }
}


// Fade In Function for body
function fadeIn() {
    const body = document.body;
    let opacity = 0;
    body.style.display = "block"; // Đảm bảo body được hiển thị

    // Sử dụng setInterval để tăng opacity
    let fadeInInterval = setInterval(function () {
        if (opacity < 1) {
            opacity += 0.05; // Tăng dần opacity
            body.style.opacity = opacity;
        } else {
            clearInterval(fadeInInterval); // Dừng khi opacity đạt 1
        }
    }, 30); // Tốc độ thay đổi opacity
}

// Fade Out Function for body
function fadeOut() {
    const body = document.body;
    let opacity = 1;

    // Sử dụng setInterval để giảm opacity
    let fadeOutInterval = setInterval(function () {
        if (opacity > 0) {
            opacity -= 0.05; // Giảm dần opacity
            body.style.opacity = opacity;
        } else {
            body.style.display = "none"; // Ẩn body khi opacity = 0
            clearInterval(fadeOutInterval); // Dừng khi opacity đạt 0
        }
    }, 30); // Tốc độ thay đổi opacity
}


// Kiểm tra ngay khi tải trang
// checkWidth();

// // Lắng nghe sự kiện resize để kiểm tra lại khi kích thước thay đổi
window.addEventListener('resize', checkWidth);





