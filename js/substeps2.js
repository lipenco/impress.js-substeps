var substepsAll = document.querySelectorAll(".substep");
for (i = 0; i < substepsAll.length; i++) {
    substepsAll[i].classList.add("future");
}

function substepNext() {
    var activeStep = document.querySelector(".step.active");
    var substeps = activeStep.querySelectorAll(".substep");
    var future = activeStep.querySelectorAll(".substep.future");
    var present = activeStep.querySelectorAll(".substep.present");

    if (future.length == 0) {
        impress().next();
       
    } else {
        future[0] = present[0];
        future[0].classList.remove("future");
    }
}

function substepPrev() {
        impress().prev();
    } 
