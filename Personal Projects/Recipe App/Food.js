import {
    food_list
  } from 'food_list.js';
 
var obj = JSON.parse(recipeList);
obj[1];

listController
renderList: (recipeList) => {
const main = document.querySelector('main');
const listElement = document.createElement('ul');
listElement.forEach(element) => {
    const item = document.createElement('li');
    item.innerHTML = '
    <h2>title: $(element.title) </h2>
    ';
    listElement.appendChild(listElement);
}
};
