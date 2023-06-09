const todoForm = document.querySelector('.form-todo');
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector('.todo-list');
var key = 1;

Object.keys(localStorage).forEach(function (key) {
   const newLi = document.createElement('li');

   if(key.endsWith('s')) 
   {
      const newLiInner =
         `<span class="text" style="text-decoration:line-through">${localStorage.getItem(key)}</span>
      <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
      </div>`;
      newLi.innerHTML = newLiInner;
      todoList.prepend(newLi);
   }

   else
   {
      const newLiInner =
         `<span class="text">${localStorage.getItem(key)}</span>
      <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
      </div>`;  
      newLi.innerHTML = newLiInner;
      todoList.prepend(newLi);
   }
});


todoForm.addEventListener('submit', (e) => {
   e.preventDefault(); // prevents page from refreshing
   console.log('Form submitted');
   const newTodoText = todoInput.value;
   const newLi = document.createElement('li');
   const newLiInner =
      `<span class="text">${newTodoText}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`;
   newLi.innerHTML = newLiInner;
   todoList.prepend(newLi);
   localStorage.setItem(key, newTodoText);
   todoInput.value = "";
   key++;
});


// Using event delegation
todoList.addEventListener('click', (e) => {
   // check if user clicked on done button
   if (e.target.classList.contains("done")) {
      Object.keys(localStorage).forEach(function (key) {
         if (localStorage.getItem(key) == e.target.parentNode.previousElementSibling.innerHTML) {
            const text = e.target.parentNode.previousElementSibling.innerHTML;
            localStorage.removeItem(key);
            localStorage.setItem(key+'s', text);
         }
      });
      const liSpan = e.target.parentNode.previousElementSibling;
      liSpan.style.textDecoration = "line-through";
   }

   if (e.target.classList.contains("remove")) {
      Object.keys(localStorage).forEach(function (key) {
         if (localStorage.getItem(key) == e.target.parentNode.previousElementSibling.innerHTML) {
            localStorage.removeItem(key);
         }
      });
      const targetLi = e.target.parentNode.parentNode;
      targetLi.remove();
   }
})

const signupForm = document.querySelector('.signup-form');
const userName = document.querySelector('#username');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const about = document.querySelector('#about');


signupForm.addEventListener('submit',(e)=>{
   e.preventDefault();
   if(userName.value == "" || password.value == "" || confirmPassword.value == "" ||
   phone.value == "" || email.value == "" || about.value == "")
   {
      alert('You are required to fill every fields of the form');
   }
   
   else
   {
      alert('Thank you for submitting form');
      userName.value = "";
      password.value = "";
      confirmPassword.value = "";
      phone.value = "";
      email.value = ""; 
      about.value == "";
   }
})

