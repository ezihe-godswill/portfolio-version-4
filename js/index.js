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