let myNav = document.querySelector(".navbar");
let scrollTop = document.querySelector(".scroll__Top");
let toggleMap = document.querySelector('.toggle__map');
let map = document.querySelector('iframe')

// when scroll we add background color to navbar and show scroll to top btn
window.onscroll = function () {
  if (window.pageYOffset >= 200) {
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-transparent");
    scrollTop.classList.add("show");
  } else {
    myNav.classList.remove("nav-colored");
    myNav.classList.add("nav-transparent");
    scrollTop.classList.remove("show");
  }
};

// function to scroll to top
scrollTop.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

// toggling the map
toggleMap.addEventListener('click', () => {
  map.classList.toggle('show__map')
  if(map.classList.contains('show__map')) {
    toggleMap.innerHTML = 'CLOSE MAP';
  } else {
    toggleMap.innerHTML = 'OPEN MAP';
  }
})