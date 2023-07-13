// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'manga', 'banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['kiwi', 'laranja', 'mamão'];

const fruitSalad = (fruit, additional) => {
    const fruitSaladaWithAdditional = [...fruit, ...additional];
    return fruitSaladaWithAdditional;
};

console.log(fruitSalad(specialFruit, additionalItens));
