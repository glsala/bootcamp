// function reverseString(str){
//     return str.split("").reverse().join("");
// }

function reverseString(str){
    const arr = str.split();
    arr.reverse();
    return arr.join('')
}

module.exports = reverseString;