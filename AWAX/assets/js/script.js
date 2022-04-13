function infoToggle(e) {
    let div = document.querySelector(e);

    if (div.classList.contains('showInfo')) {
        div.classList.remove('showInfo');
    } else {
        div.classList.add('showInfo');
    }
}