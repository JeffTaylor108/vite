import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
var clone;
var elem;
const btn = document.querySelector('.cloneButton');
btn.addEventListener('click', function(e) {
  document.querySelector('.card').classList.add();
  elem = document.querySelector('.card');
clone = elem.cloneNode(true);
clone.id = 'elem2';
elem.after(clone);
});

const backgroundButton = document.querySelector('.backgroundButton');
console.log(backgroundButton);
backgroundButton.addEventListener('click', function(e) {
  document.querySelector('.card').classList.toggle("noBackground");
});

const headingTextButton = document.querySelector('.headingButton');
console.log(headingTextButton);
headingTextButton.addEventListener('click', function(e) {
  document.querySelector('.heading').innerText = "something else";
});

const detailsButton = document.querySelector('.detailsButton');
console.log(detailsButton);
detailsButton.addEventListener('click', function(e) {
  document.querySelector('.paragraph').classList.toggle("paragraphHide");
});


document.querySelector('.deleteLastButton').addEventListener('click', function(e) {
  const cards = document.querySelectorAll(".card");
  if (cards.length != 1) { 
    const lastCard = cards[cards.length - 1];
    lastCard.remove();
  }
});

