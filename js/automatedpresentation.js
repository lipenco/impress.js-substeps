
function automatedPresentationWithSubsteps() {
    var element = document.querySelector(".substep");
    // element.addEventListener("keyup", function(e) {
    document.addEventListener("impress()", function (e) {
        var duration = e.target.dataset.duration;
        if (!duration) {
            duration = 3000;
        } 
        var timing = setTimeout(function() {
        substepNext()
        }, duration);
        }, false);
     if (typeof timing !== "undefined") {
        clearTimeout(timing);
        }
}




