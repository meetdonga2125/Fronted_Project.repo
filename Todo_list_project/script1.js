//select element using get element by id

// const mainHeading = document.getElementById("main-heading");  
// console.log(mainHeading);


// select element using queryselector

//  const mainHeading = document.querySelector("#main-heading");  
//  console.log(mainHeading);
// const navItem = document.querySelectorAll(".nav-item");
// console.log(navItem);

//change text
//textContent and innertext : both are same but in textContent hidden text also shown and in innertext we saw only whatever we see on display.

// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.textContent);
// mainHeading.textContent = "This is something else"
// console.log(mainHeading.textContent);


// change the style of Element 

// const mainHeading = document.querySelector("div.headline h2");
// mainHeading.style.color = "blue";
// mainHeading.style.backgroundColor = "blue";
// mainHeading.style.border = "2px solid green"


//get and set attribute.

// const inpuElement = document.querySelector(".form-todo input");
// console.log(inpuElement.getAttribute("type"));

// const link = document.querySelector('a');
// console.log(link.setAttribute("href", "https://codprog.com"));
// console.log(link.getAttribute("href"));


//loop

// const navItems = document.getElementsByClassName("nav-item"); //HTML collection array like object: indexing, length property........
//simpe for loop
//for of loop
//forEach :: We can't use for Each to iterate through HTMLCollection.

// for(let i=0; i<navItems.length; i++){
//        const navItem = (navItems[i]);

// }

// const navItems = document.getElementsByTagName("a");
// for(let i=0; i<navItems.length; i++){
//     const navItem = (navItems[i]);
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";

// }


//innerHTML

// const headline = document.querySelector(".headline");
// console.log(headline.innerHTML);
// headline.innerHTML = "<h1> Inner html changed </h1>"
// headline.innerHTML += "<button class= \"btn\"> Learn More </button>"
// console.log(headline.innerHTML);


// const logo = document.getElementsByClassName("logo");
// logo.innerHTML = "It's MY Website";
// console.log(logo.innerHTML);


//create new Element(append, prepend, remove);

// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.append(newTodoItem);





















