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
// document.getElementById('read').addEventListener('click', unHide);

// document.addEventListener('click', clickHandlers);

var gitProfile = 'https://api.github.com/users/spenser-anderson';

//From last asignment
//function clickHandlers() {
//   if (event.target.matches('button')) {
//     getData();
//   }
// }

// var addContent = function(data) {
//   var looped = '';
//     looped = `
//       <div class="item">
//       <h3>${data[i].login}</h3>
//         <p>${data.results[i].abstract}</p>
//         <p>${data.results[i].url}</p>
//         <p>${data.results[i].company}</p>
//         <p>${data.results[i].location}</p>
//         <p>${data.results[i].bio}</p>
//       </div>
//       `;
//   }

//   document.querySelector('#gitStuff').innerHTML = '<h3>${data[i].login}</h3>';
// };

// var getData = function() {
//   fetch(gitProfile)
//     .then(response => response.json())
//     .then(json => addContent(json));
// };

document.getElementById('gitStuff').addEventListener('click', getProfileData);

function getProfileData() {
  fetch('gitProfile')
    .then(res => res.text())
    .then(data => console.log(data));
}

// {
/* <div>
  <h3>${data.results[i].login}</h3>
  <p>${data.results[i].url}</p>
  <p>${data.results[i].company}</p>
  <p>${data.results[i].location}</p>
  <p>${data.results[i].location}</p>
</div>; */
// }
