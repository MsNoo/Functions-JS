console.log("------------ 1 -----------");
/*
Parašykite funkciją, kurios argumentas būtų tekstas, 
kuris yra įterpiamas į h1 tagą;
*/
function forH1Tag(text) {
    let firstTask = document.getElementById("id1");
    HTML = "<h1>" + text + "</h1>";
    firstTask.innerHTML = HTML;
}
forH1Tag("Good evening and good night");

console.log("------------ 2 ------------");
/*
Parašykite funkciją su dviem argumentais, 
pirmas argumentas tekstas, įterpiamas į h tagą, 
o antrasis tago numeris (1-6). Rašydami šią funkciją 
remkitės pirmame uždavinyje parašytą funkciją;
*/

function forHTag(text, hNumber) {
    let HTML = "";
    let secondTask = document.getElementsByClassName("class1");
    HTML = "<h" + hNumber + ">" + text + "</h" + hNumber + ">";
    secondTask[0].innerHTML = HTML
}

let string = "Good evening and good night";
forHTag(string, 6);

function NO3() {
    /*
    Sugeneruokite atsitiktinį stringą iš raidžių ir 
    skaičių. Visus skaitmenis stringe įdėkite į h1 tagą. 
    Raides palikite. Jegu iš eilės eina keli skaitmenys,
    juos į tagą reikią dėti kartu (h1 atsidaro prieš 
    pirmą ir užsidaro po paskutinio) Keitimui 
    naudokite pirmo patobulintą (jeigu reikia)
    uždavinio funkciją.
    */



}
// NO3();

function calc(number) {
    let total = 0;
    for (let i = 2; i < (number - 1); i++) {
        if (number % i == 0) {
            // console.log("Dalijasi is: " + i);
            total++;
        }
    }
    return total;
}

console.log("------------ 4 ------------");
function NO4() {
    /*
    Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų 
    skaičių jos argumentas dalijasi be liekanos 
    (išskyrus vienetą ir patį save).
    */

    let number = Math.round(Math.random() * 120);
    let total = calc(number);

    let HTML = "";
    let toHTML = document.getElementById("id2");
    HTML = "<p style='color: red;'> Skaicius " + number + " dalijasi is " + total + " skaiciu</p>";
    toHTML.innerHTML = HTML;
}
NO4();

console.log("------------ 5 ------------");
/*
Sugeneruokite masyvą iš 100 elementų, kurio reikšmės 
atsitiktiniai skaičiai nuo 33 iki 77. 
Išrūšiuokite masyvą pagal daliklių be liekanos 
kiekį mažėjimo tvarka, panaudodami ketvirto 
uždavinio funkciją.
*/
function createArr() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arrElement = Math.round(Math.random() * 44 + 33);
        arr.push([arrElement]);
    }
    return arr;
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let a = 0; a < arr.length; a++) {
            if (arr[i][1] > arr[a][1]) {
                let temp = arr[i];
                arr[i] = arr[a];
                arr[a] = temp;
            }
        }
    }
    return arr;

    // subArray.sort((a,b)=>a-b)
}

function printArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log("Element: " + arr[i][0], arr[i][1]);
    }
}

function NO5() {
    let arr = createArr();
    let counterArr = [];

    for (let i = 0; i < arr.length; i++) {
        counterArr[i] = [arr[i], calc(arr[i])];
        console.log(counterArr[i][0] + " " + counterArr[i][1]);
    }

    console.log("---");
    counterArr = bubbleSort(counterArr);
    printArr(counterArr);
}

NO5();
console.log("------------- 6 ------------");
/*
Sugeneruokite masyvą iš 100 elementų, kurio reikšmės 
atsitiktiniai skaičiai nuo 333 iki 777. Naudodami 4 uždavinio funkciją 
iš masyvo ištrinkite pirminius skaičius.
*/
function generateArr6() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arrElement = Math.round(Math.random() * 444 + 333);
        arr.push(arrElement);
    }
    return arr;
}
function printArr6(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
let arr6 = generateArr6();
let counter = 0;
printArr6(arr6);
console.log("---");

for (let i = 0; i < arr6.length; i++) {
    counter = calc(arr6[i]);
    if (counter == 0) {
        console.log("Element to delete: " + counter + " " + arr6[i]);
        arr6.splice(i, 1)
    }
}

console.log("---");
printArr6(arr6);

console.log("------------ 7 ------------");
/*
Sugeneruokite atsitiktinio (nuo 10 iki 20) ilgio masyvą, kurio visi, 
išskyrus paskutinį, elementai yra atsitiktiniai skaičiai nuo 0 iki 10, 
o paskutinis - masyvas, kuris generuojamas pagal tokią pat salygą kaip ir 
pirmasis masyvas. Viską pakartokite atsitiktinį nuo 10 iki 30 kiekį kartų. 
Paskutinio masyvo paskutinis elementas yra lygus 0;
*/
let time = times();
function recursion(time) {
    let newArr = [];
    let arr = lastArr();
    console.log("Times: " + time);

    for (let i = 0; i < 3; i++) {
        newArr = createArrForRecursion();
        newArr.push(arr);
        arr = newArr;
    }
    console.log(arr);

    return arr;
};

function times() {
    let times = Math.round(Math.random() * 20 + 10);
    return times;
}

function createArrForRecursion() {
    let arrLength = Math.round(Math.random() * 10 + 10);
    let arr = [];
    for (let i = 0; i < (arrLength - 1); i++) {
        let arrElement = Math.round(Math.random() * 10);
        arr.push(arrElement);
    }
    return arr;
};

function lastArr() {
    let arrLength = Math.round(Math.random() * 10 + 10);
    let arr = [];
    for (let i = 0; i < arrLength - 1; i++) {
        let arrElement = Math.round(Math.random() * 10);
        arr.push(arrElement);
    }
    arr.splice(arrLength, 0, 0);

    return arr;
};

let arr7 = recursion(time);

console.log("------------ 8 ------------");
/*
Suskaičiuokite septinto uždavinio elementų, kurie nėra masyvai, sumą. 
Skaičiuoti reikia visuose masyvuose ir submasyvuose.
*/

//FIRST APPROACH
// function sum(arr7, time) {
//     let sumFinal = 0;
//     console.log(arr7);
//     sumFinal = arr7.flat(time).reduce((a,b) => a+b);

//     return sumFinal;
// };

// let sumOfElements = sum(arr7, time);
// console.log("Sum of arr elements: " +sumOfElements);


//SECOND APPROACH
function sumOfElements(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if(!isNaN(arr[i])){
            sum += arr[i];  
        }
        else{
            sum +=sumOfElements(arr[i]);
        }
    }
    return sum;
}

let sumOfAll = sumOfElements(arr7);
console.log("Sum: " +sumOfAll);

console.log("------------ 2.1. ------------");
/*
1. Sukurkite funkciją kuri pakeltų paduotą skaičių n laipsniu, 
ir gražintų reikšmę (paduodate du parametrus, skaičių ir laipsnį)
*/
let number = Math.floor(Math.random() * 10);
let degreeForFun = Math.floor(Math.random() * 10);
let result = degree(number, degreeForFun);
console.log(result); 

function degree(number, degree){
    let result = 0;
    result = Math.pow(number, degree);
    return result;
}

console.log("------------ 2.2. ------------");
/*
Sukurkite funkciją kuri priims tris parametrus. 
skaičių, laipsnį ir HTML elemento id.
ši funkcija naudos antrają funkciją ir jos rezultatą gražins į HTML 
elementą.
*/

let HTMLelementID = "id3";
function forHTMLelement(number, degreeForFun, HTMLelementID){
    let result = degree(number, degreeForFun);
    console.log(result);

    let forElement = document.getElementById(HTMLelementID);
    HTML = "";
    HTML = "<p>Rezultatas: " +result+ "</p>";
    forElement.innerHTML = HTML;
}
forHTMLelement(number, degreeForFun, HTMLelementID);



