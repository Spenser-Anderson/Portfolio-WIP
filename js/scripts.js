// var mainNav = document.querySelectorAll('.siteNav li a');

// console.log(event.target);

// document.addEventListener('click', Active);
let link = document.querySelectorAll('.siteNav ul li a');

link.addEventListener('click', makeActive);

function makeActive() {
  if (!event.target.matches('.siteNav ul li a')) return;
  makeInactive();
  event.target.classList.add('active');
}

function makeInactive() {
  link.forEach(link => link.classList.remove('active'));
}
