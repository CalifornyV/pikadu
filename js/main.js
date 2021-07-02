//создаем переменную в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
//создаем переменныую в которую положим меню
let menu = document.querySelector('.sidebar')


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

const editUsername = document.querySelector('.edit-username');
const editPhotoURL = document.querySelector('.edit-userphoto');
const userAvatarElem = document.querySelector('.user-avatar');

const postsWrapper = document.querySelector('.posts');


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

const setPosts = {
    allPosts: [{
            title: 'Заголовок поста',
            text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Над моей оксмокс свою живет по всей, запятых маленький не? Рукописи своих силуэт они предложения дал предупредила маленькая осталось запятых букв эта курсивных, языком агентство домах даль своего пор диких вдали гор текстов первую вершину деревни грустный.',
            tags: ['Свежее', 'Лучшее', 'Горячее', 'Подписки'],
            author: '1@mail.ru',
            date: '11.11.2020, 20:54:00',
            like: 15,
            comments: 10,
        },
        {
            title: 'Заголовок поста2',
            text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Над моей оксмокс свою живет по всей, запятых маленький не? Рукописи своих силуэт они предложения дал предупредила маленькая осталось запятых букв эта курсивных, языком агентство домах даль своего пор диких вдали гор текстов первую вершину деревни грустный.',
            tags: ['Свежее', 'Лучшее', 'Горячее', 'Подписки'],
            author: '2@mail.ru',
            date: '19.11.2020, 20:54:00',
            like: 15,
            comments: 10,
        },
        {
            title: 'Заголовок поста42',
            text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Над моей оксмокс свою живет по всей, запятых маленький не? Рукописи своих силуэт они предложения дал предупредила маленькая осталось запятых букв эта курсивных, языком агентство домах даль своего пор диких вдали гор текстов первую вершину деревни грустный.',
            tags: ['Свежее', 'Лучшее', 'Горячее', 'Подписки'],
            author: '2@mail.ru',
            date: '19.11.2020, 20:54:00',
            like: 15,
            comments: 10,
        }
    ]
};

const showAllPosts = () => {

    let postsHTML = '';

    setPosts.allPosts.forEach(({ title, text, date }) => {



        postsHTML += ` <section class="post">
                <div class="post-body">
                    <h2 class="post-title">${title}</h2>
                    <p class="post-text">${text}</p>
                    <p class="post-text">
                        Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Над моей оксмокс свою живет по всей, запятых маленький не? Рукописи своих силуэт они предложения дал предупредила маленькая осталось запятых букв эта курсивных, языком
                        агентство домах даль своего пор диких вдали гор текстов первую вершину деревни грустный. Свой жаренные текстов, вопрос имеет вопроса буквоград алфавит последний великий своего диких lorem скатился, однажды текстами единственное
                        что парадигматическая ipsum! Повстречался осталось имеет проектах не власти, жаренные злых семантика всеми переписали, взобравшись назад правилами! Встретил свое пустился, ему взгляд прямо домах пояс оксмокс всемогущая по всей
                        даже собрал то всеми раз все продолжил? Они продолжил подзаголовок текст буквенных оксмокс первую своего до свое по всей дороге силуэт гор что, строчка бросил приставка парадигматическая взобравшись, коварных несколько! Не, проектах,
                        переписывается составитель языкового, осталось продолжил вдали текстов если что родного выйти по всей страну. Коварный на берегу сбить от всех вдали своего парадигматическая букв прямо реторический дал своих страна рукопись большого,
                        бросил, которое заглавных живет, рекламных решила. Возвращайся составитель страна над переписали путь себя дал всемогущая жаренные своих инициал курсивных букв lorem диких дорогу заголовок сих на берегу решила точках бросил, взобравшись
                        выйти текстами коварный. Запятой переписывается текстов она рекламных взобравшись. Lorem она пояс его гор лучше домах, рыбными составитель даль взгляд.
                    </p>

                    <div class="tags">
                        <a href="#" class="tag">#свежее</a>
                        <a href="#" class="tag">#новое</a>
                        <a href="#" class="tag">#горячее</a>
                        <a href="#" class="tag">#моё</a>
                        <a href="#" class="tag">#случайность</a>
                    </div>
                </div>
                <div class="post-footer">
                    <div class="post-buttons">
                        <button class="post-button likes">
                <svg width="19" height="20" class="icon icon-like">
                    <use xlink:href="img/icons.svg#like"></use>
                </svg>
                <span class="likes-counter">
                    26
                </span>
            </button>
                        <button class="post-button comments">
                <svg width="21" height="21" class="icon icon-comments">
                    <use xlink:href="img/icons.svg#comment"></use>
                </svg>
                <span class="comments-counter">
                    157
                </span>
            </button>
                        <button class="post-button save">
                <svg width="19" height="19" class="icon icon-save">
                    <use xlink:href="img/icons.svg#save"></use>
                </svg>
            </button>
                        <button class="post-button share">
                <svg width="17" height="19" class="icon icon-share">
                    <use xlink:href="img/icons.svg#share"></use>
                </svg>
            </button>
                    </div>
                    <!-- /.post-buttons -->
                    <div class="post-autor">
                        <div class="autor-about">
                            <a href="" class="autor-username">
                    artemislamov
                </a>
                            <span class="post-time">${date}</span>
                        </div>
                        <!-- /.autor-about -->
                        <a href="#" class="autor-link"><img src="img/avatar.jpeg" alt="avatar" class="autor-avatar"></a>
                        <!-- /.autor-link -->
                    </div>
                    <!-- /.post-autor -->
                </div>
            </section>`;

    })
    postsWrapper.innerHTML = postsHTML
};

const init = () => {
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
        editUsername.value = setUsers.user.displayName;
    });

    editContainer.addEventListener('submit', event => {
        event.preventDefault();
        setUsers.editUser(editUsername.value, editPhotoURL.value, toggleAuthDom);
        editContainer.classList.remove('visible');
    });

    //отслеживаем клик по кнопке меню и запускаем функцию
    menuToggle.addEventListener('click', function(event) {
        //отменяем стандартное поведение ссылки
        event.preventDefault();
        //вешаем класс на меню
        menu.classList.toggle('visible')
    });

    showAllPosts();

    toggleAuthDom();
}

document.addEventListener('DOMContentLoaded', () => {
    init();
})