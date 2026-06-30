import {
    DATA
} from "../data.js";

for (let key in DATA) {
    // console.log(DATA[key].name)
    // console.log(DATA[key])
    // console.log(Object.keys(DATA[key]))
}
// console.log(DATA)



const BODY = document.querySelector('body');
export const html = document.documentElement
export const blocks = document.querySelectorAll('.items')
export const blockCover = document.querySelector('.coverBackground')
export const pointDispose1 = document.querySelector('.our-friends__card-content');
export const pointDispose2 = document.querySelector('.our-friend_card-btn');
export const cardPets = document.querySelectorAll('.our-friend__cards.pets');
// const ourFriends = document.querySelector('.our-friends')
const mainBlockCards = document.querySelector('.our-friends__container');
// const petCard = document.querySelector('.pet-image');
// const namePet = document.querySelector('.our-friends__card-h4')
// const aaa = document.querySelector('.our-friends__card-content')

// ----------------------------remove data from this block when popUp closed

export function delPopUpBlock() {
    const mainPopUp = document.querySelector('.wrap-popUp')
    let popUp = document.querySelector('.popUp');
    popUp.classList.remove('pets');
    mainPopUp.remove()
    // innerPopUp.innerHTML = '';
}
// ----------------------------

// ----------------------------add scroll and remove cover when disappear popUp on Main page
blockCover.addEventListener('click', () => {
    blockCover.classList.remove('pop-up__cover')
    html.classList.remove('no-scroll')
    delPopUpBlock()

})

// ----------------------------add smoothy scroll
export function moveToPoint1() {
    pointDispose1.scrollIntoView({
        block: "center",
        behavior: "smooth"
    });
}
export function moveToPoint2() {
    pointDispose2.scrollIntoView({
        block: "center",
        behavior: "smooth"
    });
}

// ----------------------------



//-----------------------------add scroll and remove cover when disappear popUp on Pet page
// const popBtnClose = document.querySelector('.popUp__btn')
// popBtnClose.addEventListener('click', btnClose);
export function btnClose() {
    blockCover.classList.remove('pop-up__cover');
    html.classList.remove('no-scroll');
    delPopUpBlock();
}

// ----------------------------

// const mainBlockSlider = document.querySelector('.our-friend__cards');
//----------------------------hang event on main block of slider 
mainBlockCards.addEventListener('click', e => {
    // console.log(e.target)
    if (e.target.classList.contains('our-friends__card-content') || e.target.classList.contains('pet-image') || e.target.classList.contains('our-friends__card-text') || e.target.classList.contains('our-friend_card-btn')) {

        // console.log(mainBlockCards.className.split(' ').length)
        let getPage = mainBlockCards.className.split(' ').length

        const getID = e.target.closest('div').getAttribute('id')
        // console.log(getID)
        // console.log(e.target.getAttribute('id'))
        createPopUp()
        blockCover.classList.add('pop-up__cover')
        if (getPage < 2) {
            moveToPoint1()
        } else {
            moveToPoint2()
        }
        setTimeout(() => {
            html.classList.add('no-scroll')
        }, 500);
        const popBtnClose = document.querySelector('.popUp__btn')
        popBtnClose.addEventListener('click', btnClose);
        let popUp = document.querySelector('.popUp');

        DATA.filter((el, i) => {
            if (i == getID) {
                let imgPet = document.querySelector('.popUp-img');
                let crossBtn = document.querySelector('.crossBtn')
                if (getPage < 2) {
                    imgPet.setAttribute('src', `${el.img}`);
                    crossBtn.setAttribute('src', './assets/img/crossVector.png')
                    popUp.classList.remove('pets');
                } else {
                    imgPet.setAttribute('src', `../img/pets-${el.name}!.png`);
                    crossBtn.setAttribute('src', './../img/crossVector.png')
                    popUp.classList.add('pets');
                }
                let arr = ['Age', 'Inoculations', 'Diseases', 'Parasites']
                let petName = document.querySelector('.popUp__title-pet');
                petName.textContent = `${el.name}`;
                let petNameText = document.querySelector('.popUp__text-pet');
                petNameText.textContent = `${el.type} - ${el.breed}`;
                let petTextAbout = document.querySelector('.popUp__text');
                petTextAbout.textContent = `${el.description}`;
                let itemInfo0 = document.querySelector('.list-info0')
                let itemInfo1 = document.querySelector('.list-info1')
                let itemInfo2 = document.querySelector('.list-info2')
                let itemInfo3 = document.querySelector('.list-info3')
                itemInfo0.innerHTML = `<b>${arr[0]}</b>: ${el.age}`
                itemInfo1.innerHTML = `<b>${arr[1]}</b>: ${el.inoculations}`
                itemInfo2.innerHTML = `<b>${arr[2]}</b>: ${el.diseases}`
                itemInfo3.innerHTML = `<b>${arr[3]}</b>: ${el.parasites}`

            }
        })

    } else {
        return
    }
})

function createElement(tag, classTag, parentBlock, attribute, valueattribute) {
    let nameTag = document.createElement(tag);
    nameTag.classList.add(classTag);
    nameTag.setAttribute(attribute, valueattribute)
    parentBlock.append(nameTag);
}

function createPopUp() {
    createElement('div', 'wrap-popUp', BODY, )
    const wrapPopUp = document.querySelector('.wrap-popUp');
    createElement('div', 'popUp', wrapPopUp)
    const pop_Up = document.querySelector('.popUp');
    createElement('div', 'popUp-container', pop_Up)
    const popUpContainer = document.querySelector('.popUp-container');

    createElement('img', 'popUp-img', popUpContainer);

    createElement('div', 'popUp__btn', popUpContainer);
    const closeBtnPopUp = document.querySelector('.popUp__btn')
    createElement('img', 'crossBtn', closeBtnPopUp);
    createElement('div', 'popUp-contants', popUpContainer);
    const popUp_contants = document.querySelector('.popUp-contants');
    createElement('h3', 'popUp__title-pet', popUp_contants);
    let petName = document.querySelector('.popUp__title-pet').classList.add('font-Georgia');
    createElement('h4', 'popUp__text-pet', popUp_contants);
    let petNameText = document.querySelector('.popUp__text-pet').classList.add('font-Georgia');
    createElement('h5', 'popUp__text', popUp_contants)
    let petTextAbout = document.querySelector('.popUp__text').classList.add('font-Georgia');;
    createElement('ul', 'popUp__list-info', popUp_contants);
    let popUpListInfo = document.querySelector('.popUp__list-info')

    for (let i = 0; i < 4; i++) {
        createElement('li', `list-info`, popUpListInfo);
    }
    let itemInfo = document.querySelectorAll('.list-info')
    itemInfo.forEach((el, i) => {
        el.classList.add('font-Georgia');
        el.classList.add(`list-info${i}`);
    })


}