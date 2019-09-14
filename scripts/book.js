let $myBtn = document.querySelector('.stretcher');
let $p = document.querySelector('.longText');
$myBtn.addEventListener('click', function (eve) {

    if ($p.style.maxHeight) {
        $p.style.maxHeight = null;
        $myBtn.style.transform = "rotate(0)"

    } else {
        $p.style.maxHeight = $p.scrollHeight + 'px'
        $p.style.transition = "all .4s";
        $myBtn.style.transform = "rotate(180deg)"
    }
})
