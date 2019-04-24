function navMenuHandler() {
    const navButton = document.querySelector(".nav-toggle");

    navButton.addEventListener("click", function(){
        navButton.classList.toggle("active");
        const navCollapse = document.querySelector(navButton.dataset.target);
        navCollapse.classList.toggle("nav-container-active");
    });
}

window.addEventListener("load", navMenuHandler);