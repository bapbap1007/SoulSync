document.querySelector('.submit-btn').addEventListener('click', function () {
    const time = document.querySelector('input[type="datetime-local"]').value;
    const description = document.querySelector('textarea').value;
    const rating = document.querySelector('select').value;

    if (!time || !description) {
        alert('Vui lòng điền đầy đủ thông tin trước khi đặt lịch.');
    } else {
        const checkcon = confirm(`Bạn có muốn xác nhận đặt lịch không? !\nThời gian: ${time}\nMô tả: ${description}\nĐánh giá: ${rating} sao`);

        if (checkcon) {
            alert("lịch được đặt thành công");
            window.location.href = 'index.html';
        }
        else {
            alert('rất tiếc, bạn đã hủy lịch rồi !')
        }

    }
});
