'use strict';
//;CONST MODAL;calling the modal class or generally the whole body with class modal
// CONST OVERLAY;calls the whole part div2//layer behind the modal
// CONST STARBUTTON;calls the &times button
//CONST BTNSHOWMODAL;calls the showmodal button and stores them in an array which becomes btnshowmodal[show-modal,show-moda2,show-moda3]
// we call such classes with the same the same class with .querySwlwectorAll('.the name of the class')which aid us to call each using a for loop.
//using for loop we imput the event listener method of clicking and give the function some work eg removing the hidden class.
//we can manipulate a class using a method called classlist,remove/add;this either removes the class we select or adds it,
//eg if we want to display a class=hidden in our web page we;;;document.querrySelector('.class name of hidden').classList.remove('hidden')
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const starButton = document.querySelector('.close-modal'); //calling the backwindow to overwrite
const btnshowmodal = document.querySelectorAll('.show-modal'); //calling M1,M2,M3 //selects modals and stores them in array

for (let i = 0; i < btnshowmodal.length; i++) {
  //dispalaying the modal class that is hidden//body
  /*
   btnshowmodal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });*/
  const displayhidden = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };

  btnshowmodal[i].addEventListener('click', displayhidden);
  /*
  starButton.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  });
  overlay.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  });*/
  const close = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };
  starButton.addEventListener('click', close);
  overlay.addEventListener('click', close); //works like a button
  ///removing modal using escape
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
      close();
    }
  });
}
