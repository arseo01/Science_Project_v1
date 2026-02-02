//* Needed for every page
const menu_page = document.getElementById("menu");
const blur = document.getElementById("background_blur");

function open_menu() {
    menu_page.classList.add("show");
    menu_page.classList.remove("hide");
    blur.style.visibility = "visible";
}

function blur_background() {
    setTimeout(() => {
        menu_page.classList.add("hide");
        menu_page.classList.remove("show");
        blur.style.visibility = "hidden";
    }, 100);
}
//* Until here