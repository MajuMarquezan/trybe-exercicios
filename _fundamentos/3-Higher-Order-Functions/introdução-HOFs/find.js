const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

idades.find((idade) => idade === 33);
console.log(idades);

/*-------------------*/

const numbers = [19, 21, 30, 3, 45, 22, 15];

verifyNumbers = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
numbers.find((divisivel) => divisivel);
console.log(verifyNumbers);
/*-------------------*/

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const encontrarNomesComCincoLetras = () => {
    return names.find((name) => name.length === 5);
};
console.log(encontrarNomesComCincoLetras());

/*-------------------*/

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];

const findMusic = musicas.find((musica) => musica.id === '31031685');
console.log(findMusic);