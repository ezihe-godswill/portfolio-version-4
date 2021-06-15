<<<<<<< HEAD
document
    .querySelector(".menu-box")
    .addEventListener("click", function () {
        this.classList.toggle("active");
    });
=======
const mySiema = new Siema({
    perPage: 1,
    duration: 600,
    easing: "cubic-bezier(0.175, 0.885, 0.32, 1.175)",
});
document
    .querySelector(".eg-left-ctrl")
    .addEventListener("click", () => mySiema.prev());
document
    .querySelector(".eg-right-ctrl")
    .addEventListener("click", () => mySiema.next());

window.addEventListener("scroll", () => {
    let header = document.querySelector(".eg-header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
>>>>>>> 8598a4b0dde71a8ab1c28d5cc2ddf663b8422b23
