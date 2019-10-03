let $nav = document.querySelector('.forBurger');
let $burgBtn = document.querySelector('.burger');

function burger() {
    $nav.classList.toggle('navTop');
    $nav.style.transition = 'all .4s'

    if ($burgBtn.style.color === "black") {
        $burgBtn.style.color = "white"
    } else {
        $burgBtn.style.color = "black"
    }
}
