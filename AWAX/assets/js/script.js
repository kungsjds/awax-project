function infoToggle(e) {
    let div = document.querySelector(e);

    if (div.classList.contains('showInfo')) {
        div.classList.remove('showInfo');
    } else {
        div.classList.add('showInfo');
    };
};

function scrollToggle() {
    const element = document.querySelector('#scrollTopButton');
    if (window.scrollY == 0) {
        element.style.display = 'none';
    } else {
        element.style.display = 'flex';
    }
}

window.addEventListener('scroll', scrollToggle);

function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

function menuToggle() {
    let menu = {
        show: "839px",
        hidden: "0px"
    }
    let element = document.getElementById('menuMobile');

    if (element.style.height == "839px") {
        element.classList.remove('paddingMenuMobile');
        element.style.height = menu.hidden;
    } else {
        element.classList.add('paddingMenuMobile');
        element.style.height = menu.show;
    };
};