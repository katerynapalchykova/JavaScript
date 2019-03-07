

let recipeList = [
    {title: ["Chocolate Cake"],
    picture: ["Food_images/choc.jpg"],
    subtitle: ["Click for details"]},

    {title: ["Chocolate Cake"],
    picture: ["Food_images/choc.jpg"],
    subtitle: ["Click for details"]},

    {title: ["Chocolate Cake"],
    picture: ["Food_images/choc.jpg"],
    subtitle: ["Click for details"]},

    {title: ["Chocolate Cake"],
    picture: ["Food_images/choc.jpg"],
    subtitle: ["Click for details"]},

    {title: ["Chocolate Cake"],
    picture: ["Food_images/choc.jpg"],
    subtitle: ["Click for details"]},

    {title: 'Chocolate Cake',
    picture: ["Food_images/choc.jpg"],
    subtitle: ["Click for details"]},

];


// stack on this part 
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



// var obj = JSON.parse(recipeList);
// document.getElementById('output');
// output.innerHTML = recipeList.title[1];