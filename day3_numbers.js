// const n1 = +prompt('enter 1st num: ', 0);
// const n2 = +prompt('enter 2nd num: ', 0);

// alert(n1 + n2);

// function readNumber() {
//     let number;

//     do {
//         number = prompt('Enter a number: ', 0);
//     }
//     while(!isFinite(number))

//     if(number === "" || number === null) return null;

//     return +number;
// }

// alert(`Number: ${readNumber()}`);

// let random = Math.random() * 9;
// console.log(random.toFixed(0));

function random(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

console.log(random(1, 5));