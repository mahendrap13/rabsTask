const swiper = new Swiper(".swiper", {
    autoplay: {
        delay: 1000,
    },
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



function deleteSlider() {
    document.getElementById("slider").style.display = "none"
}
function formDelete() {
    document.getElementById("Eform").style.display = "none"
}
function enquireForm() {
    document.getElementById("Eform").style = "display:grid; transform: scale(1,1);"
}
function toggles(){
    var main_slide = document.getElementById("main_slide")
    main_slide.classList.toggle("active")

}
