var substeps = document.querySelectorAll( ".substep" );
for (i = 0 ; i < substeps.length; i++ ) {
  substeps[i].classList.add("hidden");
}

var hiddenSubsteps = $( ".hidden" );
    $( ".arrows" ).on( "click", function( event ) {
      hiddenSubsteps.show();
     }); 


// function substepNext() {
//  var activeStep = document.querySelector( ".step.active" );
//  var substeps = activeStep.querySelectorAll( ".substep" );
//  var hiddenSubsteps = activeStep.querySelectorAll( ".substep.hidden" );
//     if (hiddenSubsteps.length == 0) {
//       impress().next();
//     } 
//     else 
//     {
              
//    }   
// }


    // hiddenSubsteps.nextSibling().classList.remove("hidden");
    //    hiddenSubsteps.nextSibling().classList.add('visible');

//       // show substep
//       // add class 'visible'
 //   var substep = hiddenSubsteps[i];
 //      substep.classList.remove("hidden");
 //      substep.classList.add('visible');
 //     }
 // }
  
