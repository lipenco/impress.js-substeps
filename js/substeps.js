var substepsAll = document.querySelectorAll(".substep");
for (i = 0; i < substepsAll.length; i++) {
    substepsAll[i].classList.add("hidden");
}


function substepNext() {
    var activeStep = document.querySelector(".step.active");
    var substeps = activeStep.querySelectorAll(".substep");
    var hidden = activeStep.querySelectorAll(".substep.hidden");

    if (hidden.length == 0) {
        impress().next();
       
    } else {
        hidden[0].classList.add("visible");
        hidden[0].classList.remove("hidden");
    }
}

function substepPrev() {
    var activeStep = document.querySelector(".step.active");
    var substeps = activeStep.querySelectorAll(".substep");
    var visible = activeStep.querySelectorAll(".substep.visible");
    if (visible.length == 0) {
        impress().prev();
    } else {
        visible[visible.length-1].classList.remove("visible");
        visible[visible.length-1].classList.add("hidden");
    }
    
}
