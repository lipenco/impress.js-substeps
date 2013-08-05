var substepsAll = document.querySelectorAll(".substep");
for (i = 0; i < substepsAll.length; i++) {
    substepsAll[i].classList.add("future");
}

function substepNext() {
    var activeStep = document.querySelector(".step.active");
    var substep = activeStep.querySelector(".substep");
    var substeps = activeStep.querySelectorAll(".substep");
    var future = activeStep.querySelectorAll(".future");
    var present = activeStep.querySelectorAll(".present");
    var nextStep = document.querySelectorAll(".future");

    if (future.length == 0) {
        impress().next();
        present[present.length-1].classList.add("past");
       
    } else {
        future[0].classList.add("present");
        future[0].classList.remove("future");
        present[0].classList.add("past");
        present[0].classList.remove("present");
    }

    if (nextStep.length == 0) {
        substeps.classList.add("future");
        substeps.classList.remove("past");
    }      
}

function substepPrev() {
        impress().prev();
    } 

document.addEventListener("keyup", function ( event ) {
            if ( event.keyCode === 9 || ( event.keyCode >= 32 && event.keyCode <= 34 ) || (event.keyCode >= 37 && event.keyCode <= 40) ) {
                switch( event.keyCode ) {
                    case 33: // pg up
                    case 37: // left
                    case 38: // up
                           substepPrev() 
                             break;
                    case 9:  // tab
                    case 32: // space
                    case 34: // pg down
                    case 39: // right
                    case 40: // down
                             substepNext();
                             break;
                }
                
                event.preventDefault();
            }
        }, false);