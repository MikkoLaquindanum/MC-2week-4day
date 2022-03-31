// Write your code below

// for(let i = 0; i < string.length; i++){
//     for(let j = 0; i < string.length)
// }

// const isAPalindrome = string => {
//     for(let j = string.length - 1) {
//     for(let i = 0; i < j / 2; i++) {
//         let x = string[i]
//         let y = string[j - i]
//         if (x !== y){
//             return false
//         }
//     }
//     return true
//     }
// }

isPalindrome = (str) => {
    for (let i = 0; i < str.length; i++) {
        for (let j = str.length - 1; j > 0; j--) {
            if (str[i] === str[j]) {
                return true
            } else {
                return false
            }
        }
    }
}

console.log(isPalindrome('noon'))
console.log(isPalindrome('hello'))