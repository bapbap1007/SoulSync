function checkLogin() {
    const username = document.querySelector('#username').value || '';
    const password = document.querySelector('#password').value || '';
    const formsigninup = document.querySelector('.navbar-button');

    const datauser = document.querySelector('.user-name');
    console.log(datauser);



    if (username == 'admin' && password == 'admin') {
        alert('Đăng nhập thành công');
        localStorage.setItem('logged', true);

        window.location.href = 'index.html';
        datauser.textContent = 'administrator';

    }
}


checkLogin();


