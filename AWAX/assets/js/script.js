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
        show: "calc(100vh - 100px)",
        hidden: "0px"
    }
    let element = document.getElementById('menu-area');

    if (element.style.height == menu.show) {
        element.style.display = 'none';
        element.style.height = menu.hidden;
    } else {
        element.style.display = 'flex';
        element.style.height = menu.show;       
    };
};

function activeSlide(area, slide) {
    let pointers = document.querySelectorAll(area + ' .pointer');

    for (let i in pointers)  {
        console.log(i);
        if (pointers[i].classList.contains('active') && i != slide) {
            pointers[i].classList.remove('active');
        } else if (i == slide) {
            pointers[i].classList.add('active');
        };
    };
};

function changeSlide(area, slide) {
    let sliders = document.querySelector(area + ' .sliders');

    switch(slide) {
        case 0: sliders.style = 'margin-left: 0';
                break;

        case 1: sliders.style = 'margin-left: -100vw';
                break;
        
        case 2: sliders.style = 'margin-left: -200vw';
                break;
    } 
    
    activeSlide(area, slide);
};