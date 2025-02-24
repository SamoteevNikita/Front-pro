//Реалізуйте функцію generateKey(length, characters), що повертає рядок випадкових символів із набору characters довжиною length.
function generateKey (length, characters) {
    let key = '';
    for (let i = 0; i < length; i++) {
        let createRandom = Math.floor(Math.random() * characters.length);
        key += characters[createRandom];
    }
    return key
}

let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let key = generateKey(10, str);

console.log(key);