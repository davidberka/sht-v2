function menuHandler() {
    const burgerMenu = document.querySelector(".burger");
    const slideNav = document.querySelector("header nav");

    burgerMenu.addEventListener("click", () => {
        slideNav.classList.toggle("active");
        burgerMenu.classList.toggle("active");
        document.body.classList.toggle("stop_scroll");
    });
}

menuHandler();