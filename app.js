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

function mobileToggle() {
    let src = "";

    let canArr = ["/assets/2-p.png", "/assets/3-o.png", "/assets/4-r.png"]

    let rNum = Math.floor(Math.random() * 3)

    return canArr[rNum]
}
