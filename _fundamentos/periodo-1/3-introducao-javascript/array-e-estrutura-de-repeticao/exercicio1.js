const numArray = [1, 2, 3]
let varIndex;
let valorArray = 3;

for (let index = 0; index < numArray.length; index += 1) {
    if (numArray[index] === valorArray) {
        varIndex = index;
    }
}

if(varIndex === undefined) {
    console.log('Elemento não encontrado no array')
}
