/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];




let header = document.querySelector('.header');
let body = document.querySelector('body');
let menuButton = document.querySelector('.menu-button');

function menuCreator(array) {

  let div = document.createElement('div');
  let ul = document.createElement('ul');
  div.appendChild(ul);
  div.classList.add('menu');

  array.forEach((item) => {
    let li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  })
  
  div.appendChild(ul);

 
  

  return div;
}

let newMenu = menuCreator(menuItems);


// const header = document.querySelector('.header');


// menuButton.appendChild(menuCreator(menuItems));
// header.prepend(menuCreator(menuItems));
// let headerDiv = document.querySelector('.header');
menuButton.addEventListener('click', (event) => {
  let menu = document.querySelector('.menu');
  newMenu.classList.toggle('menu--open');

})
header.prepend(newMenu);




// /* 

//   Step 1: Write a function that will create a menu component as seen below:

//   <div class="menu">
//     <ul>
//       {each menu item as a list item}
//     </ul>
//   </div>

//   The function takes an array as its only argument.

//   Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
//   Add those items to the <ul>

//   Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

//   Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

//   Step 5: return the menu component.

//   Step 6: add the menu component to the DOM.
  
// */

// /* This is the data we will be using, study it but don't change anything, yet. */

// let menuItems = [
//   'Students',
//   'Faculty',
//   "What's New",
//   'Tech Trends',
//   'Music',
//   'Log Out'
// ];

// /* 

//   Step 1: Write a function that will create a menu component as seen below:

//   <div class="menu">
//     <ul>
//       {each menu item as a list item}
//     </ul>
//   </div>

//   Pass the function an array as it's only argument.

//   Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
//   Add those items to the <ul>

//   Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
//   Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

//   Step 5: return the menu component.

//   Step 6: add the menu component to the DOM.
  
// */
 



// //write a function that creates the component and takes an array as an argument
// function menuMaker(menuList) {
//   //create the elements
//   menuDiv = document.createElement('div');
//   menuUl = document.createElement('ul');
  
//   //add structure
//   menuDiv.appendChild(menuUl);
  
//   //add classes
//   menuDiv.classList.add("menu");

//   //loop over the array
//   menuList.forEach(element => {
//     //create an li every single time it loops
//     const li = document.createElement('li');
//     //set each li's textContent to each element
//     li.textContent = element;
//     //append the li's to the ul
//     menuUl.appendChild(li);
//   });
  
//   const menuButton = document.querySelector('.menu-button');

//   //event listener
//   menuButton.addEventListener("click", () => {
//     menuDiv.classList.toggle("menu--open");
//     console.log('clicked')
//   })

//   return menuDiv;
// }

// window.addEventListener('load', () => {
//   //select header
//   const menu = document.querySelector('.header');
//   //call this function while appending the return menu to the dom
//   menu.appendChild(menuMaker(menuItems));

// }) 