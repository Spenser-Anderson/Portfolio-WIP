// var mainNav = document.querySelectorAll('.siteNav li a');

// document.addEventListener('click', Active);
//break
// let link = document.querySelectorAll('.siteNav ul li a');
// document.addEventListener('click', makeActive);

// function makeActive() {
//   if (!event.target.matches('.siteNav')) return;
//   makeInactive();
//   event.target.classList.add('active');
// }
// function makeInactive() {
//   link.forEach(link => link.classList.remove('active'));
// }

//Break
var hiddenText = document.querySelectorAll('.readMore');
var readMoreBtn = document.querySelector('button');

function unHide() {
  if (event.target.matches('button')) {
    console.log('I heard you.');
    for (let i = 0; i < hiddenText.length; i++) {
      hiddenText[i].classList.toggle('readMore');
    }
    readMoreBtn.innerHTML = 'Read Less';
  }
}

readMoreBtn.addEventListener('click', unHide);
