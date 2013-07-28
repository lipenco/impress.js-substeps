var substep = document.querySelector( ".substep" );

for (i ... subteps.length.. ) {
  substeps[i].classList.add('hidden');
}

// każdy substep na początku ma klasę 'hidden'

function substepNext() {
  
    var activeStep = document.querySelector( ".step.active" );
  
    var substeps = activeStep.querySelectorAll( ".substep" );
  
    var hiddenSubsteps = ....;
    
    
    [ a, b, c, d ]

    // jeśli nie ma substepów to    
    if (hiddenSubsteps.length == 0) {
      impress().next();
    } else {
      // pokaż substep
      // nadaj my klasę 'visible'
      var substep = ??;
      substep.classList.remove("hidden");
      substep.classList.add('visible')
    }
}
  
function substepPrev() {

  impress().prev();

}
