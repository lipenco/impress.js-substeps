var substepsAll = document.querySelectorAll( ".substep" );
for (i = 0 ; i < substepsAll.length; i++ ) {
  substepsAll[i].classList.add("hidden");
};
 

function substepNext() {
var activeStep = document.querySelector( ".step.active" );
var substeps = activeStep.querySelectorAll(".substep.hidden");
	for (i = 0 ; i < substeps.length; i++) {
		if (substeps.length = 0) {
		      impress().next();
		   } 
		else {
		   substeps[i].classList.add("visible");
		   substeps[i].classList.remove("hidden");
		   }
		}
};


