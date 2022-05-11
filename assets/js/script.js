// function infoToggle(e) {
//     let div = document.querySelector(e);

//     if (div.classList.contains('showInfo')) {
//         div.classList.remove('showInfo');
//     } else {
//         div.classList.add('showInfo');
//     };
// };

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
    let screenWidth = window.screen.width;

    switch(slide) {
        case 0: sliders.style = 'margin-left: 0';
                break;

        case 1: 
                if (area == '.section-team-area' && (screenWidth > 450 && screenWidth <= 800)) {                    
                    sliders.style = 'margin-left: -590px';
                } else if (area == '.section-team-area' && screenWidth <= 450) {
                    sliders.style = 'margin-left: -295px';
                } else if (area == '.section-team-area') {
                    sliders.style = 'margin-left: -885px';
                } else {
                    sliders.style = 'margin-left: -100vw';
                };                
                break;
        
        case 2:                                        
                // Somar o tamanho dos cards dos slides. Os 280 + a margem de 15 = 295. 
                    // Depois multiplcar esse valor pela quantidade de cards que aparecem na tela, 
                    // pode ser no máximo 3 e diminui para 2 e 1, coforme o tamanho da tela.
                    // Conforme passa o slide, aumentar o tamanho da margem, o valor total do tamanho dos slides "295" 
                    // multiplicado pela quantidade de cards que aparecem na tela, ex. 295 * 2 cards = 590. 
                    // E então somar esse valor ao total de margem que já possui.
                if (area == '.section-team-area' && (screenWidth > 450 && screenWidth <= 800)) {                    
                    sliders.style = 'margin-left: -1180px';
                } else if (area == '.section-team-area' && screenWidth <= 450) {
                    sliders.style = 'margin-left: -590px';
                } else if (area == '.section-team-area') {
                    sliders.style = 'margin-left: -1770px';
                } else {
                    sliders.style = 'margin-left: -200vw';
                };                
                break;
    } 
    
    activeSlide(area, slide);
};