var substepsAll = document.querySelectorAll( ".substep" );
for (i = 0 ; i < substepsAll.length; i++ ) {
  substepsAll[i].classList.add("hidden");
};
 

function substepNext() {
var activeStep = document.querySelector( ".step.active" );
var substeps = activeStep.querySelectorAll(".substep");
var hidden = activeStep.querySelector(".substep.hidden");
  for (i = 0 ; i < substeps.length; i++) {
      if ( !hidden) {
		     impress().next();
		     return 0;
		   } 
     else {
		   hidden.classList.add("visible");
		   hidden.classList.remove("hidden");
		   }
	}
 if (substeps.length == 0) {
	impress().next();
	}
};

function substepPrev() {
var activeStep = document.querySelector( ".step.active" );
var substeps = activeStep.querySelectorAll(".substep");
var hidden = activeStep.querySelector(".substep.visible");
	for (i = substeps.length; i > 0 ;  i--) {
		if (substeps.length = 0) {
		      impress().next();
		   } 
		else {
		   hidden.classList.add("hidden");
		   hidden.classList.remove("visible");
		   }
		}
};


