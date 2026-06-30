export const burgerBTN = document.querySelector('.header-burger');
export const navHeader = document.querySelector('.header-nav');
export const headerList = document.querySelector('.header-list');
export const body = document.querySelector('body');
export const coverBackground = document.querySelector('.coverBackground')
export const headerLink = document.querySelectorAll('.header-link')


burgerBTN.addEventListener('click', openBurger);

headerLink.forEach(el => el.addEventListener('click', closeBurgerMenu));

coverBackground.addEventListener('click', closeBurgerMenu);

export function closeBurgerMenu() {
    navHeader.classList.remove('active');
    body.classList.remove('no-scroll');
    coverBackground.classList.remove('active');
    headerList.classList.remove('burgerMenu-active');
    burgerBTN.classList.remove('active-burger');
}

export function openBurger() {
    burgerBTN.classList.toggle('active-burger');
    navHeader.classList.toggle('active');
    headerList.classList.toggle('burgerMenu-active');
    body.classList.toggle('no-scroll');
    coverBackground.classList.toggle('active');
}



//find the width
window.addEventListener('resize', (e) => {
    windowSize(e.target.innerWidth);
});

export function windowSize(width) {
    // console.log(width)
    if (width > 767) {
        burgerBTN.classList.add('disabled');
        navHeader.classList.remove('disabled-nav');
        navHeader.classList.remove('burger-menu');

    } else {
        burgerBTN.classList.remove('disabled');
        navHeader.classList.add('disabled-nav');
        navHeader.classList.add('burger-menu');
    }

}
windowSize(window.innerWidth);