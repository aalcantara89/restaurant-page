function appendHtml() {
    const content = document.getElementById("content");
    content.innerHTML += `<video autoplay muted loop id="myVideo">
    <source src="../src/burger.mp4" type="video/mp4"></video>`;
  
    content.innerHTML += `<div class="menu" id="menu">
    <img src="../src/menu.jpg" alt="menu-pic"></div>`;
    content.innerHTML += `<div class="reviews" id="reviews">
    <img src="../src/reviews.png" alt="reviews"></div>`;
  
   };
   export {appendHtml};