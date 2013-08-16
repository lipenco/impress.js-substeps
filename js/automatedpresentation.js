function automatedPresentationWithSubsteps() {
    var delayedNext = function (e) {
        var duration = e.target.dataset.duration;
        if (!duration) {
            duration = 3000;
        }
        var timing = setTimeout(function() {
            substepNext();
        }, duration);
    }
    document.addEventListener("impress:stepenter", delayedNext, false);
    document.addEventListener("impress:substep:enter", delayedNext, false);
}
