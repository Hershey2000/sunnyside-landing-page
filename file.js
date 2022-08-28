const hamBurger = document.querySelector(".hamburger");
const navList = document.getElementById("navList");

hamBurger.addEventListener("click", () => {
    navList.classList.toggle("hideList");
})