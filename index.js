function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1. Palyginti du skaičius a ir b.Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
const a = 1;
const b = 2;

a > b ? console.log(`${a} yra didesnis už ${b}`) : a < b ? console.log(`${b} yra didesnis už ${a}`) : console.log(`${a} yra lygus ${b}`)

// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10.(5 taškai)
console.log('---------')

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10.(5 taškai)
console.log('---------')
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
console.log('---------')

for (let i = 1; i <= 5; i++) {
    console.log(rand(1, 10))
}

// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5.(7 taškai)
console.log('-----')
let num = 0
while (num !== 5) {
    num = rand(1, 10)
    console.log(num);
}

// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)

console.log('-----')
const arrLength = rand(20, 30)
const arr = [...Array(arrLength)].map(_ => rand(10, 30))

let max = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
}

console.log(max)
// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
console.log('-----')

const letters = ['A', 'B', 'C', 'D']

const lettersArr = [...Array(100)].map(_ => letters[rand(0, 3)])
console.log(lettersArr)

const aCount = lettersArr.filter(x => x === 'A').length;
const bCount = lettersArr.filter(x => x === 'B').length;
const cCount = lettersArr.filter(x => x === 'C').length;
const dCount = lettersArr.filter(x => x === 'D').length;

console.log('A:', aCount, 'B:', bCount, 'C:', cCount, 'D:', dCount);

// 8. Parašyti funkciją - lygineSuma.Funkcijos parametrai - du kintamieji.Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą.Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)

const lygineSuma = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return (a + b) % 2 === 0 ? a + b : "Suma nelyginė";
    } else if (Array.isArray(a) && Array.isArray(b)) {
        return (a.length + b.length) % 2 === 0 ? a.length + b.length : "Suma nelyginė";
    } else {
        return "Abu kintamieji turi būti arba skaičiai arba masyvai";
    }
}

console.log(lygineSuma(6, 8));
console.log(lygineSuma([2, 4], [12, 21, 36]));
console.log(lygineSuma(1, [1, 2]));
console.log(lygineSuma([1, 2], 3));
console.log(lygineSuma(5, 7));
console.log(lygineSuma([1, 2], [3, 4]));

// 9. Parašyti funkciją pirminisSkaicius.Funkcija turi vieną kintamąjį.Turi būti patikrinimas, kad kintamasis yra skaičius.Funkcija turi grąžinti ar pateiktas skaičius yra pirminis(pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.)(10 taškų)

const pirminisSkaicius = num => {
    if (typeof num !== 'number') {
        return 'Kintamasis turi būti skaičius'
    }

    if (num < 2) {
        return 'Skaičius nėra pirminis'
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return 'Skaičius nėra pirminis'
        }
    }

    return 'Skaičius yra pirminis'
}

console.log(pirminisSkaicius(23));
console.log(pirminisSkaicius(12));
console.log(pirminisSkaicius(1));
console.log(pirminisSkaicius('abc'));
console.log(pirminisSkaicius([11]))


// 10. Parašyti funkciją telefonoNumeris.Funkcija turi priimti vieną kintamąjį - masyvą.Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu -
//     "(XXX) XXX-XXXX". (10 taškų)

const randArray = [...Array(10)].map(_ => rand(0, 9))

const telefonoNumeris = arr => {
    const pirmaDalis = arr.slice(0, 3).join('');
    const antraDalis = arr.slice(3, 6).join('');
    const treciaDalis = arr.slice(6).join('');

    return `(${pirmaDalis}) ${antraDalis}-${treciaDalis}`;
}

console.log(telefonoNumeris(randArray))