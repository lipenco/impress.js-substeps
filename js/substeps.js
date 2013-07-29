var substeps = document.querySelectorAll( ".substep" );
for (i = 0 ; i < substeps.length; i++ ) {
  substeps[i].classList.add("hidden");
}


function substepNext() {
 var activeStep = document.querySelector( ".step.active" );
 var substeps = activeStep.querySelectorAll( ".substep" );
 var hiddenSubsteps = activeStep.querySelectorAll( ".substep.hidden" );

  for(var i = 0; i < hiddenSubsteps.length; i++)
       {
  if(hiddenSubsteps[i] == selectionDiv)
         {
         var previousSubstep = divs[i - 1];
         var nextSubstep = divs[i + 1];
         var presentSubstep = divs[i];
         }
   }
    
    if (hiddenSubsteps.length == 0) {
      impress().next();

    } else {
     document.addEventListener("click", function ( event ) {
       nextSubstep.classList.remove("hidden");
       nextSubstep.classList.add('visible');                     
                }
         event.preventDefault();
            }
        }, false);
      
   }   
}

    // hiddenSubsteps.nextSibling().classList.remove("hidden");
    //    hiddenSubsteps.nextSibling().classList.add('visible');

//       // show substep
//       // add class 'visible'
 //   var substep = hiddenSubsteps[i];
 //      substep.classList.remove("hidden");
 //      substep.classList.add('visible');
 //     }
 // }
  
// function substepPrev() {

//   impress().prev();

// }
