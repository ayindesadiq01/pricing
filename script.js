'use strict';
const toggleBox = document.querySelector('.toggle-box');
const toggleIcon = document.querySelector('.toggle-icon');


// CHANGE OF AMOUNT TEXT
let basicAmount = document.querySelector('.basic-amount');
let profAmount = document.querySelector('.professional-amount');
let masterAmount = document.querySelector('.master-amount');

toggleBox.addEventListener('click', e => {

  // Switching Toggle Icon for either Annual or Monthly Sub
  const clicked = e.target.classList.contains('toggle-icon');

  if(!clicked) return;
  toggleIcon.classList.toggle('toggle-active');


  // CHANGE OF TEXT CONTENT 
  if(toggleIcon.classList.contains('toggle-active')) {
    basicAmount.textContent = '$19.99';
    profAmount.textContent = '$24.99';
    masterAmount.textContent = '$39.99';
  } else {
    basicAmount.textContent = '$199.99';
    profAmount.textContent = '$249.99';
    masterAmount.textContent = '$399.99';
  }
})

// SWITCHING PLAN
const paymentLists = document.querySelector('.payment-lists');

paymentLists.addEventListener('click', e => {
  const clicked = e.target.closest('.payment-list');

  if(clicked) {
    document.querySelectorAll('.payment-list').forEach(playList => {
      playList.classList.remove('active-list');
    })

    clicked.classList.add('active-list');
  }
})