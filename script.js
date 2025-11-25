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

    function ClassToggle(){
        burger.classList.toggle('trans');
        line1.classList.toggle('trans');
        line3.classList.toggle('trans');
        burgerMenu.classList.toggle('trans');
    }

    burger.addEventListener("click", function() {
        this.blur(); // убираем фокус с кнопки после клика
        ClassToggle();
        if (burgerMenu.classList.contains('trans')) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.background = '#0075FF';
        } else {
            document.body.style.overflow = 'auto'; 
            document.documentElement.style.background = '';
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key == 'Escape' && burgerMenu.classList.contains('trans')) {
            ClassToggle();
            if (burgerMenu.classList.contains('trans')) {
                document.body.style.overflow = 'hidden';
                document.documentElement.style.background = '#0075FF';
            } else {
                document.body.style.overflow = 'auto'; 
                document.documentElement.style.background = '';
            }
        }
    });

    const links = document.querySelectorAll('.burger-menu a');

    links.forEach(link => {
        link.addEventListener("click", function(){
            ClassToggle();
            if (burgerMenu.classList.contains('trans')) {
                document.body.style.overflow = 'hidden';
                document.documentElement.style.background = '#0075FF';
            } else {
                document.body.style.overflow = 'auto'; 
                document.documentElement.style.background = '';
            }
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
        error.className = 'error';
        error.textContent = textError;
        error.style.color = 'red';
        error.style.fontSize = '12px';
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

    if(!name1.value.trim()) showError("Введите имя", name1);
    if(!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value.trim())){
        showError('Введите корректный email', email)
    }
    if(!message.value.trim()) showError("Введите сообщение", message);


    if(isValued){
        alert("Форма успешно отправлена!");
        document.getElementById('form').reset();
    }
        
})    
