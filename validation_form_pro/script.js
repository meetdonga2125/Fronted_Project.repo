// let pra = document.querySelectorAll("label")

// for(i=0; i<label1.length; i++){
//     console.log(pra[i].textContent);
// }


let heading = document.querySelector("h2");
heading.innerHTML = "I am practicing............"
console.log(heading.innerHTML);
let btn1 = document.querySelector(".btn");
// btn1.addEventListener("click",()=>{
//       heading.classList.add("heading");
    
// })

let signupForm = document.querySelector(".signup-form");
let newElement = document.createElement('p');
newElement.textContent = "This is a p tag";
// signupForm.appendChild(newElement);


btn1.insertAdjacentElement("beforebegin", newElement)


let FormGroup = document.querySelectorAll(".form-group");
// console.log(FormGroup);
// for(let i=0; i<=FormGroup.length; i++){
//       console.log(FormGroup[i].textContent);
// }


// btn1.addEventListener("click", () => {
//       for(let i=0; i<=FormGroup.length; i++){
//             FormGroup[i].style.backgroundColor = "red";
//       } 
     
      
// })















