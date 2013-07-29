var substeps = document.querySelectorAll( ".substep" );
for (i = 0 ; i < substeps.length; i++ ) {
  substeps[i].classList.add("hidden");
}
 
 // var showSubsteps = $( ".substep.hidden" );
 //  $( ".arrows" ).on( "click", function( event ) {
 //   showSubsteps.show();
 //    }); 

function substepNext() {
var activeStep = document.querySelector( ".step.active" );
var substeps = activeStep.querySelectorAll( ".substep" );
var hiddenSubsteps = activeStep.querySelectorAll( ".substep.hidden" );
		for (i = 0 ; i < hiddenSubsteps.length; i++ ) {
		  if (hiddenSubsteps.length == 0) {
		      impress.next();
		    } 
		  else 
		 {
		    hiddenSubsteps.classList.remove("hidden");
		    substep.classList.add('visible');
		 }
}

var el = document.getElementById("arrow");
el.addEventListener("click", substepNext, false);

// function substepNext() {
//  
//     
              
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
  
