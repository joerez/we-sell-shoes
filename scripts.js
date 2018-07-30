let popUp = document.getElementById('pop-up');
let popUpLayer = document.getElementById('pop-up-layer');
let closeModal = document.getElementById('close-pop-up');


closeModal.addEventListener("click", function() {
  popUpLayer.style.display = 'none';
})

let popUpFun = window.setInterval(function() {
  popUpLayer.style.display = 'flex';

  window.clearInterval(popUpFun);

}, 40 * 1000)



///////////////////


let nextNext = document.getElementById('next-next')
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let testi1 = document.querySelector('.testi1');
let testi2 = document.querySelector('.testi2');
let testi3 = document.querySelector('.testi3')

let tests = document.querySelector('.tests');

nextNext.addEventListener("click", function() {


  if (tests.classList.contains('second')) {
    tests.classList.remove('second');
  }

  if (tests.classList.contains('first')) {
    tests.classList.remove('first')
  }

  window.clearInterval(nextNextInt);
  window.clearInterval(nextint);
  window.clearInterval(prevint);
  tests.classList.add('third');
})



next.addEventListener("click", function() {

  if (tests.classList.contains('first')) {
    tests.classList.remove('first');
  }

  if (tests.classList.contains('third')) {
    tests.classList.remove('third');
  }

  window.clearInterval(nextNextInt);
  window.clearInterval(nextint);
  window.clearInterval(prevint);
  tests.classList.add('second');

})

prev.addEventListener("click", function() {

  if (tests.classList.contains('second')) {
    tests.classList.remove('second');
  }

  if (tests.classList.contains('third')) {
    tests.classList.remove('third');
  }

  window.clearInterval(nextNextInt);
  window.clearInterval(nextint);
  window.clearInterval(prevint);
  tests.classList.add('first');
})

let nextNextInt = window.setInterval(function() {
  if (tests.classList.contains('second')) {
    tests.classList.remove('second');
    tests.classList.add('third');
  }

}, 4000)


let nextint = window.setInterval(function() {
  if (tests.classList.contains('first')) {
    tests.classList.remove('first');
    tests.classList.add('second');
  }

}, 8000)

let prevint = window.setInterval(function() {
  if (tests.classList.contains('third')) {
    tests.classList.remove('third');
    tests.classList.add('first');
  }
}, 16000)
