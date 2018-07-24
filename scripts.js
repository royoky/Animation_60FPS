var clicked=0;

var box = document.getElementById('box');
box.addEventListener('click', function() {
  animateBox();
  console.log('clicked the div');
  });

box.addEventListener('transitionend', function() {
  box.classList.toggle('animated');
  //box.style.transition = "translate 2s";
  console.log('end of transition');
})

function animateBox() {
  var target = document.getElementById('box');
  target.classList.toggle('animated');
  target.style.transition = "transform 2s";
}