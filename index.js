function toggleSidebar(){
    const menuBtn = document.querySelector('.menu_btn');
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');

    if (sidebar.classList.contains('active')) {
        menuBtn.innerHTML = '<i class="material-symbols-outlined">close</i>';
    } else {
        menuBtn.innerHTML = '<i class="material-symbols-outlined">menu</i>';
    }
}