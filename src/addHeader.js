function addHeader() {
    const header = document.getElementById('header');  
    const navLinks = ['HOME','MENU','REVIEWS'];
    header.innerHTML += '<div class="nav" id="navi"></div>';
    header.innerHTML += `<div class="logo">BIG BUBBA'S BURGERS</div>`;
    header.innerHTML += '<div class="order-now"><button>ORDER NOW</button></div>';
  
    let nav = document.getElementById('navi');
    const ul = document.createElement('ul');
    ul.setAttribute('id', 'nav');
    nav.appendChild(ul);
    for (var i=0; i<= navLinks.length - 1; i++) {
      const li = document.createElement('li');
      let aTag = document.createElement('a');
      aTag.setAttribute('href', "#");
      aTag.innerHTML = navLinks[i]
      
      li.id = navLinks[i].toLowerCase();
      li.appendChild(aTag);
      ul.appendChild(li);
    }
    nav.appendChild(ul);
}
export {addHeader};