function infoToggle() {
    let div = document.querySelector(".info");

    if (div.style.display == 'flex') {
        div.style.display = "none";
    } else {
        div.style.display = "flex";
    }
}