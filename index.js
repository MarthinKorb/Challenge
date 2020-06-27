// 1) Write a function that converts user entered date formatted as M/D/YYYY to a format required by an API (YYYYMMDD). The parameter "userDate" and the return value are strings.
// For example, it should convert user entered date "12/31/2014" to "20141231" suitable for the API.
// Example:

// function formatDate(userDate) {
//  // format from M/D/YYYY to YYYYMMDD
// }
// console.log(formatDate("12/31/2014"));

function formatDate(userDate) {
    const dateArray = userDate.split('/');
    const dateFormated = `${dateArray[2]}-${dateArray[0]}-${dateArray[1]}`;
    return (`Question 1 - ${dateFormated}`);
    // format from M/D/YYYY to YYYYMMDD
}
console.log(formatDate("12/31/2014"));


// // 2) Escreva um metodo que receba uma string como parametro e retorne true ou false 
// caso o parametro seja um palindromo.
// //  Ex: um palindromo é uma palavra ou frase que se le da mesma forma da esquerda 
// para direita e da direita para esquerda, por exemplo: 'arara' ou 'Socorram-me, subi 
// no ônibus em Marrocos'

function testString(param) {
    str = param;
    str = str.replace(/[ÀÁÂÃÄÅ]/g, "A");
    str = str.replace(/[àáâãäå]/g, "a");
    str = str.replace(/[ÈÉÊË]/g, "E");
    str = str.replace(/[^a-z0-9]/gi, '');
    str = str.toLowerCase();
    //console.log(str);

    const word = str.split('');
    let letter = '';

    for (let position = word.length - 1; position >= 0; position--) {
        letter += word[position];
    }
    return (`Question 2 - ${str === letter}`);
}
console.log(testString("Socorram-me, subi no ônibus em Marrocos"));


// 3) Escreva um metodo que receba uma string como parametro e retorne apenas as vogais da mesma.
//  Ex: tecnologia e informatica
//  retorna: eooia e ioaia

function WowelTest(param) {
    str = param;
    const word = str.toLowerCase().split('');
    let letter = '';
    const re = /^[aeiou\s]$/i;

    for (let position of word) {
        if (re.test(position)) {
            letter += position;
        }
    }
    console.log(`Question 3 - ${letter}`);
}
WowelTest("tecnologia e informatica");


// 4) Escreva um metodo que receba uma string como parametro e retorne quantos 
//vezes as palavras repetidas aparecem na string.
//  Ex: 'o rato roeu a roupa roida do rato sem roupa'
//  o = 1
//  rato = 2
//  roeu = 1
//  a = 1
//  roupa = 2
//  roida = 1
//  do = 1
//  sem = 1

console.log('');
console.log('Question 4')

function testRepeating(param) {
    str = param;
    str = str.toLowerCase();
    const words = str.split(' ');

    const list = [];

    for (const position of words) {
        var counter = 0;
        for (let j = 0; j <= words.length - 1; j++) {
            if (position === words[j]) {
                counter += 1;
            }
        }
        const searchList = list.find(item => item.position === position);

        if (!searchList) {
            list.push({ position, counter });
        }
    }
    for (const { position, counter } of list) {
        console.log(position, counter);
    }
}

testRepeating("o rato roeu a roupa roida do rato sem roupa");


// 5) Escreva um metodo que leia 15 numeros reais. Após, o método deve calcular 
// e exibir o resultado da media aritmética simples desses 15 números lidos.
console.log('');
console.log('Question 5')
function CalcMedia() {
    var media;

    const n = [];
    var accumulator = 0;

    for (let i = 0; i <= 14; i++) {
        n[i] = generateNumbers();
        accumulator += n[i];

        console.log(`'Posição ${i + 1} ----- Valor de Entrada: ${n[i]}`);
    }
    console.log('');
    console.log(`Valor Acumulado => ${accumulator}`);
    media = accumulator / 15;
    console.log(`Calculo de média: ${accumulator} / ${n.length} = Média: ${media.toFixed(2)}`);
    console.log(``);
}
console.log(CalcMedia(generateNumbers()));

function generateNumbers() {
    const n = Math.floor(Math.random() * 10);
    return n;
}