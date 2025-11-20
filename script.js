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
        ClassToggle();

        if (burgerMenu.classList.contains('trans')) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.background = '#0075FF';
        } else {
            document.body.style.overflow = 'auto'; 
            document.documentElement.style.background = '';
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
