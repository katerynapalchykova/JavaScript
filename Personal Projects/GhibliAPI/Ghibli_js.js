import {
  picList
} from './pic_list.js';

const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'white_logo.jpg';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

function getJSON(url) {
  return fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        //console.log(response.json());
        return response.json();
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

getJSON('https://ghibliapi.herokuapp.com/people').then(data => {
  console.log(data);

  data.forEach(human => {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const h1 = document.createElement('h1');
    h1.textContent = human.name;
    const showImage = findPicture(human.name);

    const p = document.createElement('p');
    human.description = human.gender.substring(0, 300);
    p.textContent = `Gender: ${human.gender}, Age: ${human.age}.`;

    container.appendChild(card);
    card.appendChild(h1);
    card.appendChild(p);

    if (showImage) {
      const img = document.createElement('img');
      img.src = showImage.picture;
      card.appendChild(img);
    }
  })
});

function findPicture(name) {
  return picList.find(function (item) {
    return item.id === name;
  })
}