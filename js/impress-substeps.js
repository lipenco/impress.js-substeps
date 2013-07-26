
var substep = document.querySelector( ".substep" );
for (var i = 0; i < subteps.length; i++) {
  substeps[i].classList.add('hidden');
}

// każdy substep na początku ma klasę 'hidden'

function substepNext() {
  
    var activeStep = document.querySelector( ".step.active" );
  
    var substeps = activeStep.querySelectorAll( ".substep" );
  
    var hiddenSubsteps = activeStep.querySelectorAll( ".hidden" );

    
    
    [ a, b, c, d ]

    // jeśli nie ma substepów to    
    if (hiddenSubsteps.length == 0) {
      impress().next();
    } else {
      for (var i = 0; i < hiddenSubsteps.length; i++)
      var substep = hiddenSubsteps[i];
      substep.classList.remove("hidden");
      substep.classList.add('visible');
    }
}
  
function substepPrev() {

  impress().prev();

}





