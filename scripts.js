let popUp = document.getElementById('pop-up');
let popUpLayer = document.getElementById('pop-up-layer');
let closeModal = document.getElementById('close-pop-up');


closeModal.addEventListener("click", function() {
  popUpLayer.style.display = 'none';
})

let popUpFun = window.setInterval(function() {
  popUpLayer.style.display = 'flex';

  window.clearInterval(popUpFun);

}, 10 * 1000)
