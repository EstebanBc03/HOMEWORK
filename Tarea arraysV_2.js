// Array con at 
const array1 = ["Toyota supra", "Nissan GTR"];
carro = array1.at(1);
console.log(carro)
// Array con concat

const array3 = [3,19,8];
const array4 = [4,5,6];

array34 = array3.concat(array4)
console.log(array34)

// Array con push
const array5 = [3,19,8];
const array6 = [4,5,6];

array1.push(4)
console.log(array1)

// Array constructor
const array7 = [1, 2, 3, 4];
let text1 = array7.constructor;

console.log(text1)

// Array Copy with 
const array8 = [3,5,6,22,55,66]
array8.copyWithin(2,0,1)

// Array entries
const array9 = ["Sur", "Norte", "Oriente", "Occidente"];
const A9 = array9.entries();
//console.log(A9.next().value);
for (const element of A9) {
    console.log(element);
}


//Array every 
const array10 =[1,2,3];
const array11 = [4,5,6];

const areEvery= array10.every(x => x < 4)
console.log(areEvery)

// Array fill

const materiales = ["cuero", "metal", "madera", "oro", "dimante"];
materiales.fill ("Hierro", 3,5);

// Array filter

const años = [1990,2008,1920,2003,2000];
const resultados = años.filter(masdedosmil);

function masdedosmil(años){
    return años >=2000;
}

console.log(resultados);

// Array find 

const edad = [19,15,19,23,20];
const EdadR = edad.filter(maxE);

function maxE(años){
    return años >= 20;
}

console.log(EdadR);

// Array findindex

const colores = ["azul", "rojo", "amarillo","gris"];

colores.findIndex(posicionC);

function posicionC (colores){

    return colores ="azul";
}

// Array  findlast

const array12 = [1,2,3,4]
const array13 = [4,5,6]

const last = array12.findLast(x => x <4);

console.log(last)

// Array flat

const Aflat = [1, 2, [65] , 3 , 4]
const Aflat2= Aflat.flat();

console.log(Aflat2);

// Array flatmap

const tabla3 = [3,6,9,12];
const newtabla3 = tabla3.flatMap((x) => x *3);

console.log(newtabla3)

// Array From

let vocales = "AEIOU"
const VocalesA = Array.from(vocales);

console.log(VocalesA)

// Array includes

const ingredientes = ["pan", "carne" , "queso" ["salsa de tomate", "Mayonesa"], "pepinillos", "tocino"];
ingredientes.includes("pepinillos")

// Array indexOF

const materias = ["sociales", "fisica","lenguaje", "quimica", "fisica"];
let index = materias.indexOf("fisica",2);
console.log(index)

// Arrays join

const frutas = ["pera", "sandia", "mango","manzana"]
let text2 = frutas.join(" con ");

console.log(text2);

// 