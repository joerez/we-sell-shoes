let next = document.getElementById('next');
let prev = document.getElementById('prev');

let slide1 = document.querySelector('.slide1');
let slide2 = document.querySelector('.slide2');

let hero = document.querySelector('.hero');


next.addEventListener("click", function() {


  if (hero.classList.contains('prev')) {
    hero.classList.remove('prev');
  }
  window.clearInterval(nextint);
  window.clearInterval(prevint);
  hero.classList.add('next');

})

prev.addEventListener("click", function() {

  if (hero.classList.contains('next')) {
    hero.classList.remove('next');
  }

  window.clearInterval(nextint);
  window.clearInterval(prevint);
  hero.classList.add('prev');
})

let nextint = window.setInterval(function() {
  if (hero.classList.contains('prev')) {
    hero.classList.remove('prev');
    hero.classList.add('next');
  }

}, 4000)

let prevint = window.setInterval(function() {
  if (hero.classList.contains('next')) {
    hero.classList.remove('next');
    hero.classList.add('prev');
  }
}, 8000)
