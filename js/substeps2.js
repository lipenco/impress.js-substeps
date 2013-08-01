var substepsAll = document.querySelectorAll(".substep");
for (i = 0; i < substepsAll.length; i++) {
    substepsAll[i].classList.add("future");
}

function substepNext() {
    var activeStep = document.querySelector(".step.active");
    var substeps = activeStep.querySelectorAll(".substep");
    var future = activeStep.querySelectorAll(".future");
    var present = activeStep.querySelectorAll(".present");

    if (future.length == 0) {
        impress().next();
       
    } else {
        future[0].classList.add("present");
        future[0].classList.remove("future");
        present[0].classList.add("past");
        present[0].classList.remove("present");
    }
}

function substepPrev() {
        impress().prev();
    } 
