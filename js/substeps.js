var substepsAll = document.querySelectorAll(".substep");
for (i = 0; i < substepsAll.length; i++) {
    substepsAll[i].classList.add("hidden");
}


function substepNext() {
    var activeStep = document.querySelector(".step.active");
    var substeps = activeStep.querySelectorAll(".substep");
    var hidden = activeStep.querySelector(".substep.hidden");

    if (!hidden) {
        impress().next();
        return 0;
    } else {
        hidden.classList.add("visible");
        hidden.classList.remove("hidden");
    }
    if (substeps.length == 0) {
        impress().next();
    }
}

function substepPrev() {
    var activeStep = document.querySelector(".step.active");
    var substeps = activeStep.querySelectorAll(".substep");
    var visible = activeStep.querySelectorAll(".substep.visible");

    if (!visible) {
        impress().prev();
        return 0;
    } else {
        visible[i].classList.remove("visible");
        visible[i].classList.add("hidden");
    }
    if (substeps.length == 0) {
        impress().prev();
    }
}