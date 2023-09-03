function menuTab() {
    const content = document.getElementById("content");

    content.innerHTML += `<div class="menu" id="menu">
    <img src="../src/menu.jpg" alt="menu-pic"></div>`;
};

export {menuTab};