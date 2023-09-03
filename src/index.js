import _ from 'lodash';
import { appendHtml } from './appendHtml';
import { menuTab } from './menu-tab';
import { reviewsTab } from './reviews-tab';
import { addHeader } from "./addHeader";

const display = document.getElementById('content');
const home = document.getElementById('home');
const menu = document.getElementById('menu');
const reviews = document.getElementById('reviews');
let lastScroll = 0;


function clear() {
  display.innerHTML = "";
}

 const throttle = (func, time = 100) => {
    let lastTime = 0;
    return () => {
      const now = new Date();
      if (now - lastTime >= time) {
        func();
        time = now;
      }
    };
  };

  const validateHeader = () => {
    const windowY = window.scrollY;
    const windowH = window.innerHeight;
    if (windowY > windowH) {
      // We passed the first section, set a toggable class
      header.classList.add("is-fixed");
      // Determine is we ready to animate
      if (windowY > windowH + 40) {
        header.classList.add("can-animate");
        if (windowY < lastScroll) {
          // Determine if we scrolling up
          header.classList.add("scroll-up");
        } else {
          header.classList.remove("scroll-up");
        }
      } else {
        header.classList.remove("scroll-up");
      }
    } else {
      header.classList.remove("is-fixed", "can-animate");
    }
    lastScroll = windowY;
  };
  


  //events
  window.onload = appendHtml();
  window.onload = addHeader();
  window.addEventListener('scroll', throttle(validateHeader, 100));
  document.getElementById('menu').addEventListener('click', () => {
    clear();
    menuTab();
  });
  document.getElementById('reviews').addEventListener('click', () => {
    clear();
    reviewsTab();
  });
  document.getElementById('home').addEventListener('click', () => {
    clear();
    appendHtml();
  });
  export {clear};

