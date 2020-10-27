let mainHeading = document.querySelector(".typewritter");

let typewritter = new Typewriter( mainHeading ,{
    strings:['Developer', 'Designer', 'Larry Daniels' ],
    loop:true,
    autoStart:true,
    cursur: "Pipe character",
    typeSpeed:60,
    deleteSpeed:60
})