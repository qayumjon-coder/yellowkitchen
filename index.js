const cart_btn = document.querySelector(".cart_btn");
const cart = document.querySelector(".cart");


// Cart toggle
cart_btn.addEventListener("click", () => {

    cart.classList.toggle("show");

    setTimeout(() => {
        cart.classList.toggle("smooth");
    }, 100);
});

// Menu toggle
function toggleSidebar() {
    const menuBtn = document.querySelector('.menu_btn');
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');

    if (sidebar.classList.contains('active')) {
        menuBtn.innerHTML = '<i class="material-symbols-outlined">close</i>';
    } else {
        menuBtn.innerHTML = '<i class="material-symbols-outlined">menu</i>';
    }
}