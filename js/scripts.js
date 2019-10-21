// var mainNav = document.querySelectorAll('.siteNav li a');

// console.log(event.target);

// document.addEventListener('click', Active);
let link = document.querySelectorAll('.siteNav ul li a');

document.addEventListener('click', makeActive);

function makeActive() {
  if (!event.target.matches('.siteNav')) return;
  makeInactive();
  event.target.classList.add('active');
}

function makeInactive() {
  link.forEach(link => link.classList.remove('active'));
}
