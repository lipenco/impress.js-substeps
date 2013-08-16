
function automatedPresentationWithSubsteps() {
    var elements = document.querySelector(".substep");
// for (var index = 0; index < elements.length; index++) {
     document.addEventListener("impress:stepenter", function () {
        var duration = elements.dataset.duration;
        if (!duration) {
            duration = 3000;
        } 
        var timing = setInterval(function() {
        substepNext()
        }, duration);
        }, false);
   
}



