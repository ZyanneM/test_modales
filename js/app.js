  var   btnopen = document.getElementById("btnOpen");
        container = document.getElementById("modal-container");
        btnCancel= document.getElementById("btnCancel");
        btnSub = document.getElementById("btnSubContainer");
        container2= document.getElementById("modal-container2");
        checkDiv = document.getElementById("containerSucces");
        btnSub2 = document.getElementById("btnSubContainer2");
        container3 = document.getElementById("modal-container3");
        btnSub3 = document.getElementById("btnSub3");

// --------------- FONCTION OPENFORM : OUVRE LA PREMIERE MODALE A PARTIR DU BOUTON MAGIC --------------- //

btnopen.addEventListener("click", function openForm(){
  container3.style.transform = 'scale(0)';
  container.style.display = 'flex';
  
  container.setAttribute('class', 'blowUpModal');

});
       
// --------------- FONCTION BOUGE : ANIME LE BOUTON CLOSE --------------- //

        btnCancel.addEventListener("mouseenter", function bouge() {

          btnCancel.setAttribute('class', 'closebouton');
          setTimeout(() => {
            btnCancel.setAttribute('class', 'removeanim ');
          }, 500);
        });

// --------------- FONCTION CLOSEFORM : FERME LA PREMIERE MODALE AVEC UNE ANIMATION A PARTIR DU BOUTON CLOSE --------------- //

btnCancel.addEventListener("click", function closeForm(){

  container.setAttribute('class', 'blowUpModalTwo');

});        


// --------------- FONCTION OPENFORM2 : OUVRE LA SECONDE MODALE A PARTIR DU BOUTON COMMANDER --------------- //
// Note : Attention au type de bouton, le bouton type "submit" fermait automatiquement la fenêtre //

btnSub.addEventListener("click", function openForm2(){

    container.style.display = 'none';
    container.removeAttribute('class');
    container2.style.display = 'flex';

    container2.setAttribute('class', 'bounce-in-top');
});

// --------------- FONCTION SHOWCHECK : FAIT APPARAITRE LA DIV CHECK AU CLIC DU BOUTON COMMANDER DE LA PREMIERE MODALE --------------- //

container2.addEventListener("pointerover", function showCheck(){
  checkDiv.style.opacity = '1';
  checkDiv.style.zIndex = '2';
  checkDiv.setAttribute('class', 'scale-in-center');
});

// --------------- FONCTION OPENFORM3 : FAIT APPARAITRE LA TROISIEME MODALE AU CLIC DU BOUTON DONE DE LA SECONDE --------------- //

btnSub2.addEventListener("click", function openForm3(){

  checkDiv.removeAttribute('class');
  container2.style.display = 'none';
  container2.removeAttribute('class');
  container3.style.transform = 'scale(1)';
  container3.setAttribute('class', 'bounce-in-top');
 
});

// --------------- FONCTION CLOSEFORM3 : FERME LA TROISIEME MODALE --------------- //

btnSub3.addEventListener("click", function closeForm3(){

    container3.style.transform = 'scale(0)';


});  

container3.addEventListener("animationend", function disparaitre(){
  
  container3.classList.remove('bounce-in-top');
});


// btnSub.addEventListener("click", function showCheck(){
  
//   checkDiv.setAttribute('class', 'closebouton');

// }); 

        


//   // btnopen.addEventListener("click", openForm);

// ------------------TESTS JQUERY SASS --------------------


// $('.button').click(function(){
//   var buttonId = $(this).attr('id');
//   //transformer l'id "one" en class "one"
//   $('#modal-container').removeAttr('class').addClass(buttonId);
//   $('body').addClass('modal-active');
// })

// $('#modal-container').click(function(){
//   $(this).addClass('out');
//   $('body').removeClass('modal-active');
// });

// ------------------PREMIERS TESTS CODE SOLO --------------------
  //   let btnopen = document.getElementById("one");

  //   btnopen.addEventListener("click", openForm);

  //   function openForm() {

  
  //     let container = document.getElementById("modal-container");
  
  // container.addClass('one');
  
  // container.style.animation ='anim 0.3s linear';
  
    // }






// // console.log(formulaire);

// /* <div class="form-popup" id="popup-Form"></div>
// </div> */