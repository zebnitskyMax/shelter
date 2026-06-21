console.log('Maximum score: 100 points')

console.log(`Shelter-Part2: 100 points`)

const burgerBTN = document.querySelector('.header-burger')
const navHeader = document.querySelector('.header-nav')

burgerBTN.addEventListener('click', openBurger);

function openBurger() {
    burgerBTN.classList.toggle('active-burger')
}


//find the width
window.addEventListener('resize', (e) => {
    windowSize(e.target.innerWidth)
});

function windowSize(width) {
    if (width > 760) {
        burgerBTN.classList.add('disabled')
        navHeader.classList.remove('disabled-nav')
    } else {
        burgerBTN.classList.remove('disabled')
        navHeader.classList.add('disabled-nav')
    }

}
windowSize(window.innerWidth)