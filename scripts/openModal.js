let $login = document.querySelector('.openModal');
let $Modal = document.querySelector('.mainModalPage');
let $registModal = document.querySelector('.modalPage');

$login.addEventListener('click', function (event) {
    $Modal.style.display = "block";
})


window.onclick = function (event) {

    if (event.target == $Modal) {
        $Modal.style.display = "none"
    }
}
