
document.querySelector('.submit-btn').addEventListener('click', function () {

    const time = document.querySelector('input[type="datetime-local"]').value;
    const description = document.querySelector('textarea').value;
    const rating = document.querySelector('select').value;

    if (!time || !description) {
        alert('Vui lòng điền đầy đủ thông tin trước khi đặt lịch.');
    } else {
        const checkcon = confirm(`Bạn có muốn xác nhận đặt lịch không? !\nThời gian: ${time}\nMô tả: ${description}\nĐánh giá: ${rating} sao`);
        const email = JSON.parse(localStorage.getItem('user')).email;
        sendEmail(email, time);

        if (checkcon) {
            alert("lịch được đặt thành công, chúng tôi đã gửi email tới bạn, vui lòng kiểm tra hộp thư tại email bạn đăng kí với chúng tôi");
            window.location.href = 'index.html';
        }
        else {
            alert('rất tiếc, bạn đã hủy lịch rồi !')
        }

    }


});





function sendEmail(email, time) {


    // Dữ liệu bạn muốn gửi lên server
    const emailData = {
        email: email, // Địa chỉ email người nhận
        subject: "SoulSync Đặt Lịch thành công", // Tiêu đề email
        content: `Bạn đã đặt lịch khám thành công, thời gian khám của bạn là ${time}, đội ngũ SoulSync chúng tôi luôn mong muốn phục vụ bệnh nhân tốt nhất, xin cảm ơn!` // Nội dung email
    };

    // Gửi yêu cầu POST đến API
    fetch("https://mailsendnode.onrender.com/email/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData), // Convert object thành JSON
    })
        .then(response => {
            // Xử lý phản hồi từ server
            return response.json().then(result => {
                if (response.ok) {
                    alert("Email đã được gửi thành công!");
                } else {
                    console.error("Error:", result.errors);
                    alert("Có lỗi xảy ra khi gửi email: " + result.errors);
                }
            });
        })
        .catch(error => {
            // Xử lý lỗi khi fetch thất bại
            console.error("Fetch Error:", error);
            alert("Có lỗi xảy ra khi kết nối tới server!");
        });

}

// Gắn sự kiện vào nút gửi email
