export const BTN_LEFT = document.querySelector('.arrow-right');
export const BTN_RIGHT = document.querySelector('.arrow-left');
export const SLIDER = document.querySelector('.our-friend__cards');

export const ITEMS_LEFT = document.querySelector('.items-left');
export const ITEMS_ACTIVE = document.querySelector('.items-active');
export const ITEMS_RIGHT = document.querySelector('.items-right');
export const ITEMS = document.querySelectorAll('.our-friends__card-content');

let randomNum;


export const moveLeft = () => {
    SLIDER.classList.add("transition-left");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
};

export const moveRight = () => {
    SLIDER.classList.add("transition-right");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

export function creatCardPet(mainBlock) {
    randomNum = Math.floor(Math.random() * 8);
    const arrayPets = ['Jennifer', 'Sophia', 'Woody', 'Scarlett', 'Katrine', 'Timmy', 'Freddie', 'Charly'];
    document.querySelector('.our-friends__card-content').setAttribute('id', `${randomNum}`)
    console.log(randomNum)
    const img = document.createElement('img');
    img.classList.add('pet-image');
    img.setAttribute('src', `./assets/img/pets-${arrayPets[randomNum]}!.png`)
    mainBlock.appendChild(img);

    const h4 = document.createElement('h4');
    h4.classList.add('our-friends__card-h4', 'text-h4-dark');
    h4.textContent = arrayPets[randomNum].charAt(0).toUpperCase() + arrayPets[randomNum].slice(1);
    mainBlock.append(h4);

    const button = document.createElement('button');
    button.classList.add('our-friend_card-btn', 'btn-friends');
    button.textContent = 'Learn more';
    mainBlock.append(button);


}

export const createCardTemplate = () => {
    const card = document.createElement("div");
    card.classList.add("our-friends__card-content");
    card.setAttribute('id', `${randomNum}`)
    // console.log(randomNum)
    // card.classList.add("info");
    return card;
}

SLIDER.addEventListener("animationend", (animationEvent) => {
    let changedItem;
    if (animationEvent.animationName === "move-left") {
        SLIDER.classList.remove("transition-left");
        changedItem = ITEMS_LEFT;
        document.querySelector(".items-active").innerHTML = ITEMS_LEFT.innerHTML;
    } else {
        SLIDER.classList.remove("transition-right");
        changedItem = ITEMS_RIGHT;
        document.querySelector(".items-active").innerHTML = ITEMS_RIGHT.innerHTML;
    }

    changedItem.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        const card = createCardTemplate();
        changedItem.appendChild(card);
        creatCardPet(card);
    }

    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);
})