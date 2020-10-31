let mainHeading = document.querySelector(".typewritter");
var navBar = document.querySelector('.navbar');
function editNavBar() {
    if ($(window).scrollTop() >= 400) {
      navBar.classList.replace('navbar-dark', 'navbar-light');
      $('.navbar').addClass("bg-light navbar-shadow ");
    } else {
      navBar.classList.replace('navbar-light', 'navbar-dark');
      $('.navbar').removeClass("bg-light navbar-shadow ");
    }
}
$(window).scroll(function (){
    editNavBar();
});
$('main').scrollspy({ target: '#navbar' });
let typewritter = new Typewriter( mainHeading ,{
    strings:['Developer', 'Designer', 'Larry Daniels' ],
    loop:true,
    autoStart:true,
    cursur: "Pipe character",
    typeSpeed:60,
    deleteSpeed:60
})


