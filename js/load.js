const splashScreen = document.querySelector(".splashScreen");

window.addEventListener("load", () => {
    splashScreen.classList.add("load");
    setTimeout(() => {
        splashScreen.style.display = "none";
    }, 1500);
});
