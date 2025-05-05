



const burger = document.getElementById("burgerMenu");
const nav = document.getElementById("mainNav");

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    burger.classList.toggle("active"); // для анимации
});

document.addEventListener("click", (e) => {
    const clickedInsideNav = nav.contains(e.target);
    const clickedBurger = burger.contains(e.target);

    if (!clickedInsideNav && !clickedBurger) {
        nav.classList.remove("active");
        burger.classList.remove("active");
    }
});
// Smooth scroll + close menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        nav.classList.remove('open');
        burger.classList.remove('open');
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});



window.addEventListener('scroll', function () {
    const headerTop = document.querySelector('header')


    if (window.scrollY > 0) {
        headerTop.classList.add('moved');

    } else {
        headerTop.classList.remove('moved');

    }
});





document.querySelectorAll('.home-link ').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


const swiper = document.querySelector('.mySwiper')
if(swiper){
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    });

}








const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2,
});

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});


document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
        const item = q.parentElement;
        item.classList.toggle('active');
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const notice = document.getElementById("cookieNotice");
    const acceptBtn = document.getElementById("acceptCookies");

    if (!localStorage.getItem("cookiesAccepted")) {
        notice.style.display = "block";
    }

    acceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "true");
        notice.style.display = "none";
    });
});