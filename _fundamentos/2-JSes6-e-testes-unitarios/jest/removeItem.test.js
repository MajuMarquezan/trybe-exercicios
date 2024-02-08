const removeItem = require('./removeItem')

describe('teste1', () => {
    const arr = [1, 2, 3, 4];
    const item = 3;
    let result = removeItem(arr, item);

    test('verificar array', () => {
    const expected = [1, 2, 4];
    expect(result).toEqual(expected);
    });
    test('verificar se o array não é o esperado', () => {
    const expected2 = [1, 2, 3, 4];
    expect(result).not.toEqual(expected2);
    });
    test('confere se array retorna', () => {
        const expected3 = [1, 2, 3, 4];
        const item5 = 5;
        let result = removeItem(arr, item5);
        expect(result).toEqual(expected3);
    })
})