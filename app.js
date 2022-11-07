function imgSlider(any) {
    document.querySelector(".fanta").src = any;

}

function changeColour(colour) {
    const circle = document.querySelector(".circle");

    circle.style.background = colour

}

function toggleMenu() {
    let menuToggle = document.querySelector(".toggle")
    let navigation = document.querySelector(".navigation")
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active")
}


