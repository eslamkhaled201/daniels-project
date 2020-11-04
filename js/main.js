let mainHeading = document.querySelector(".typewritter");
let navBar = document.querySelector('.navbar');
let counters = document.querySelectorAll('.number');
let speed = 200;

function editNavBar() {
    if (window.scrollY >= 400) {
        navBar.classList.replace('navbar-dark', 'navbar-light');
        $(navBar).addClass("bg-light navbar-shadow");
    } else {
        navBar.classList.replace('navbar-light', 'navbar-dark');
        $(navBar).removeClass("bg-light navbar-shadow");
    }
}

$(window).scroll(function () {
    editNavBar();
    if (window.scrollY >= 3100) {
        counters.forEach(counter => {
            let updateCount = () => {
                let target = +counter.getAttribute('data-target');
                let currentCount = +counter.innerHTML;
                let incValue = target / speed;
                if (currentCount < target) {
                    counter.innerHTML = Math.ceil(currentCount + incValue);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerHTML = target;
                }
                
            }
            updateCount();
        });
    }
});
$('main').scrollspy({ target: '#navbar' });
let typewritter = new Typewriter(mainHeading, {
    strings: ['Developer', 'Designer', 'Larry Daniels'],
    loop: true,
    autoStart: true,
    cursur: "Pipe character",
    typeSpeed: 60,
    deleteSpeed: 60
})

