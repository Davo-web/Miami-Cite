document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('is-visible');
        } else {
            backToTopButton.classList.remove('is-visible');
        }
    });

    backToTopButton.addEventListener('click', function(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    const burger = document.querySelector(".burger");
    const line1 = document.querySelector(".line1");
    const line3 = document.querySelector(".line3");
    const burgerMenu = document.querySelector(".burger-menu");

    function ClassToggle(){ //  убираем/добавляем класс trans
        burger.classList.toggle('trans');
        line1.classList.toggle('trans');
        line3.classList.toggle('trans');
        burgerMenu.classList.toggle('trans');
    }
    function StylesMenu(){ //  стили, при открытом/закрытом меню
        ClassToggle();
        if (burgerMenu.classList.contains('trans')) { // меню открыто
            // запрещаем прокрутку и даём html синий фон, иначе линия прокрутки (которую спрятали) будет белой (под основной цвет)
            document.body.style.overflow = 'hidden';
            document.documentElement.style.background = '#0075FF';
        } else { // меню закрыто
            // возвращаем
            document.body.style.overflow = 'auto'; 
            document.documentElement.style.background = '';
        }
    }

    burger.addEventListener("click", function() {
        this.blur(); // убираем фокус с кнопки после клика
        StylesMenu();
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key == 'Escape' && burgerMenu.classList.contains('trans')) {
            StylesMenu();
        }
    });

    const links = document.querySelectorAll('.burger-menu a');

    links.forEach(link => {
        link.addEventListener("click", function(){
            StylesMenu();
        })
    })


});

document.getElementById('form').addEventListener("submit", function(e){
    e.preventDefault();

    name1 = document.getElementById('name');
    email = document.getElementById('email');
    message = document.getElementById('message');

    isValued = true;

    function showError (textError, input) {
        contacts = document.querySelector('.contacts-form');
        let error = document.createElement('div');
        error.className = 'error'; // добавляем класс, чтобы потом удалить элемент - текст ошибки
        error.textContent = textError;
        error.style.color = 'red';
        error.style.fontSize = '12px';
        // находим следующий элемент после поля ввода и до него (т.е. к первому элементому) вставляем ошибку
        const nextElement = input.nextElementSibling;
        if (nextElement) {
            input.parentElement.insertBefore(error, nextElement);
        } else {
            input.parentElement.appendChild(error);
        }

        
        isValued = false;
    }
    errorRemove();
    function errorRemove(){
        document.querySelectorAll('.error').forEach(i => i.remove());
    }

    if(!name1.value.trim()) showError("Enter a name", name1);
    if(!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value.trim())){
        showError('Enter the correct e-mail', email)
    }
    if(!message.value.trim()) showError("Enter a message", message);


    document.documentElement.classList.remove('show');
    if(isValued){
        document.documentElement.classList.add('show');
        const modal = document.querySelector('.modal');
        const htmlBefore = document.querySelector('.show');
        const modalBtn = document.querySelector('.modal-content_btn');


        htmlBefore.style.visibility = "visible";
        htmlBefore.style.opacity = "1";

        modal.style.visibility = "visible";
        modal.style.opacity = "1";
        
        
        modalBtn.addEventListener('click', function() {
            document.documentElement.classList.remove('show');

            modal.style.visibility = "hidden";
            modal.style.opacity = "0";
        })
        document.getElementById('form').reset();
    }

    
})

