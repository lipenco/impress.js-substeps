var substepsAll = document.querySelectorAll(".substep");
for (i = 0; i < substepsAll.length; i++) {
    substepsAll[i].classList.add("hidden");
}

function substepNext() {
    var activeStep = document.querySelector(".step.active");
    var substeps = activeStep.querySelectorAll(".substep");
    var future = activeStep.querySelectorAll(".substep.hidden");
    var present = activeStep.querySelectorAll(".substep.visible");

    if (future.length == 0) {
        impress().next();
       
    } else {
        future[0] = present[0];
        future[0].classList.remove("hidden");
    }
}

function substepPrev() {
        impress().prev();
    } 
