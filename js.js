
let nav_menu = document.getElementById('nav-menu'),
    toggle_menu = document.getElementById('toggle-m'),
    b = document.querySelector('body');


// === links menu ===
let nav_links = document.querySelectorAll('.nav .nav-item');


// ==== toggle menu action ====
toggle_menu.onclick = function () {
    nav_menu.classList.toggle('show');
}

// ==== links menu action =====
nav_links.forEach(nav_link => {
    nav_link.addEventListener('click', function () {
        nav_menu.classList.toggle('show');

    });
});

window.addEventListener('scroll', function () {

    document.getElementById('navbar').classList.toggle('sticky', window.scrollY > 0);
});


ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 1500,
});

ScrollReveal().reveal('.person-detials .person-image', { origin: 'bottom' });
ScrollReveal().reveal('.person-detials .person-info', { origin: 'bottom' });



ScrollReveal().reveal('.about-me', { origin: 'bottom' });
ScrollReveal().reveal('.services', { origin: 'top' });


const person_detials = document.querySelector('.person-detials');
for (var i = 0; i <= 300; i++) {
    const blocks = document.createElement('div');
    const blocks2 = document.createElement('div');
    blocks.classList.add('circle');
    blocks2.classList.add('squer');
    person_detials.appendChild(blocks);
    person_detials.appendChild(blocks2);
}

function animateBlocks() {
    anime({
        targets: '.circle',
        translateX: function () {
            return anime.random(-700, 700);
        },
        translateY: function () {
            return anime.random(-400, 400);
        },
        scale: function () {
            return anime.random(1, 3);
        },
        easing: 'easeInOutQuad',
        duration: 1000,
        rotate: '1turn',
        delay: anime.stagger(100),
        complete: animateBlocks
    });
}

function animateBlocks2() {
    anime({
        targets: '.squer',
        translateX: function () {
            return anime.random(-700, 700);
        },
        translateY: function () {
            return anime.random(-400, 400);
        },
        scale: function () {
            return anime.random(1, 3);
        },
        easing: 'easeInOutQuad',
        duration: 3000,
        rotate: '1turn',
        delay: anime.stagger(100),
        complete: animateBlocks2
    });
}

// anime({
//     targets: '.block',
//     translateX: function () {
//         return anime.random(-700, 700);
//     },
//     translateY: function () {
//         return anime.random(-400, 400);
//     },
//     scale: function () {
//         return anime.random(1, 5);
//     },
//     keyframes: [
//         {
//             translateY: function () {
//                 return anime.random(-400, 400);
//             }
//         },
//         {
//             translateX: function () {
//                 return anime.random(-700, 700);
//             }
//         },
//         {
//             translateY: function () {
//                 return anime.random(-700, 700);
//             }
//         },
//         {
//             translateX: function () {
//                 return anime.random(-700, 700);
//             }
//         },
//         {
//             translateY: function () {
//                 return anime.random(100, 400);
//             }
//         }
//     ],
//     duration: 10000,
//     easing: 'linear',
//     delay: anime.stagger(50),
//     complete: animateBlocks
// });


animateBlocks();
animateBlocks2();