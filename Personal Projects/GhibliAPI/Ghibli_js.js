// const app = document.getElementById('root');

// const logo = document.createElement('img');
// logo.src = 'logo.png';

// const container = document.createElement('div');
// container.setAttribute('class', 'container');

// app.appendChild(logo);
// app.appendChild(container);

// var request = new XMLHttpRequest();
// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
// request.onload = function () {

//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response);

//   console.log(data);

//   if (request.status >= 200 && request.status < 400) {
//     data.forEach(movie => {
//       const card = document.createElement('div');
//       card.setAttribute('class', 'card');

//       const h1 = document.createElement('h1');
//       h1.textContent = movie.title;

//       const p = document.createElement('p');
//       movie.description = movie.description.substring(0, 300);
//       p.textContent = `${movie.description}...`;

//       container.appendChild(card);
//       card.appendChild(h1);
//       card.appendChild(p);
//     });
//   } else {
//     const errorMessage = document.createElement('marquee');
//     errorMessage.textContent = `It's not working!`;
//     app.appendChild(errorMessage);
//   }
// }

// request.send();



function getJSON(url) {
  return fetch(url)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        // console.log(response.json());
        return response.json();
      }
    })
    .catch(function(error) {
      console.log(error);
    });
}


getJSON('https://ghibliapi.herokuapp.com/people').then(data => {
  console.log(data);
  
 //data = JSON.parse(this.response);
 
data.forEach(human => {
  const card = document.createElement('div');
  card.setAttribute('class', 'card');

  const h1 = document.createElement('h1');
  h1.textContent = human.name;

  const p = document.createElement('p');
  movie.description = human.films;
  p.textContent = `${movie.films}...`;

  container.appendChild(card);
  card.appendChild(h1);
  card.appendChild(p);
})
}); 
