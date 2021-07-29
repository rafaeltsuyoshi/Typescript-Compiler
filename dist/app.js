"use strict";
// let age = 30
// const user = 'Max'
// console.log(user)
const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     console.log("Clicked")
// })
function clickHandler(menssage) {
    console.log('Clicked!' + menssage);
}
button.addEventListener('click', clickHandler.bind(null, 'You\'re welcome'));
//# sourceMappingURL=app.js.map