//создаем переменную в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
//создаем переменныую в которую положим меню
let menu = document.querySelector('.sidebar')
    //отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener('click', function(event) {
    //отменяем стандартное поведение ссылки
    event.preventDefault();
    //вешаем класс на меню
    menu.classList.toggle('visible')
})

const regExpValidEmail = /^\w+@\w+\.\w{2,}$/;

const loginElem = document.querySelector('.login');
const loginFrom = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginSignup = document.querySelector('.login-signup');

const userElem = document.querySelector('.user');
const userNameElem = document.querySelector('.user-name');

const exitElem = document.querySelector('.exit');
const editElem = document.querySelector('.edit');
const editContainer = document.querySelector('.edit-container');

const editUsername = document.querySelector('.edit-username')
const editPhotoURL = document.querySelector('.edit-userphoto')
const userAvatarElem = document.querySelector('.user-avatar')


const toggleAuthDom = () => {
    const user = setUsers.user;
    console.log('user: ', user);

    if (user) {
        loginElem.style.display = 'none';
        userElem.style.display = '';
        userNameElem.textContent = user.displayName;
        userAvatarElem.src = user.photo || userAvatarElem.src;
    } else {
        loginElem.style.display = '';
        userElem.style.display = 'none';
    }

};

const listUsers = [{
        id: '01',
        email: '1@mail.ru',
        password: '12345',
        displayName: '123JS'
    },
    {
        id: '02',
        email: '2@mail.ru',
        password: '12345',
        displayName: '321JS'
    }
];

const setUsers = {
    user: null,
    logIn(email, password, handler) {
        if (!regExpValidEmail.test(email)) return alert('email not valid')
        const user = this.getUser(email);
        if (user && user.password === password) {
            this.authorizedUser(user);
            handler();
        } else {
            alert('Пользователь с такими данными не найден')
        }
    },
    logOut(handler) {
        this.user = null;
        handler();
    },
    signUp(email, password, handler) {
        if (!regExpValidEmail.test(email)) return alert('email not valid')
        if (!email.trim() || !password.trim()) {
            alert('Введите данные')
            return;
        }
        if (!this.getUser(email)) {
            const user = { email, password, displayName: email.split('@')[0] };
            listUsers.push(user)
            this.authorizedUser(user)
            handler();
        } else {
            alert('Пользователь с таким email уже зарегистрирован')
        }
    },
    editUser(userName, userPhoto, handler) {
        if (userName) {
            this.user.displayName = userName;
        }
        if (userPhoto) {
            this.user.photo = userPhoto;
        }
        handler();
    },
    getUser(email) {
        return listUsers.find((item) => {
            return item.email === email
        })
    },
    authorizedUser(user) {
        this.user = user;
    }
};

loginFrom.addEventListener('submit', event => {
    event.preventDefault();

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    setUsers.logIn(emailValue, passwordValue, toggleAuthDom);
    loginFrom.reset();
});

loginSignup.addEventListener('click', event => {
    event.preventDefault();

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    setUsers.signUp(emailValue, passwordValue, toggleAuthDom);
    loginFrom.reset();
});

exitElem.addEventListener('click', event => {
    event.preventDefault();
    setUsers.logOut(toggleAuthDom);
});

editElem.addEventListener('click', event => {
    event.preventDefault();
    editContainer.classList.toggle('visible');
});

editContainer.addEventListener('click', event => {
    event.preventDefault();

    setUsers.editUser(editUsername.value, editPhotoURL.value, toggleAuthDom);
});

toggleAuthDom();