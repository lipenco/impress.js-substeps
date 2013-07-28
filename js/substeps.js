var substeps = document.querySelectorAll( ".substep" );
for (i = 0 ; i < substeps.length; i++ ) {
  substeps[i].classList.add("hidden");
}


function substepNext() {
  
 var activeStep = document.querySelector( ".step.active" );
  
 var substeps = activeStep.querySelectorAll( ".substep" );
 
 var hiddenSubsteps = activeStep.querySelectorAll( ".substep.hidden" );
    
    
    if (hiddenSubsteps.length == 0) {
      impress().next();
    } else {
    for (i = 0 ; i < hiddenSubsteps.length; i++ ) {
  hiddenSubsteps[i].classList.add("visible");
//       // show substep
//       // add class 'visible'
   var substep = ??;
      substep.classList.remove("hidden");
      substep.classList.add('visible')
     }
 }
  
// function substepPrev() {

//   impress().prev();

// }
