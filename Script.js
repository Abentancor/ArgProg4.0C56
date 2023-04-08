/******1******/
const arrayNum= [5,8,11,16,26,27,30];
const list = document.getElementById("lista");
arrayNum.map((item) => {
    const listItem = document.createElement("li");
    listItem.innerText = item;
    list.appendChild(listItem);
  });


  /******2******/
  const array = [1, 2, 3, 4, 5, 6];
    let i = 0;
    while (i < array.length) {
    console.log("desde while", array[i]);
    i++;
    }

    for (let i = 0; i < array.length; i++) {
        console.log("desde for", array[i]);
      }

    array.forEach((element) => {
        console.log("desde un forEach", element);
      });

  const newArray = array.map((element) => {
        return element + 1;
      });
      
console.log("nuevo array", newArray);

    const arrayCopy = [...array];
    const newArrayCopy = arrayCopy.map((element) => element + 1);
console.log(newArrayCopy);

    const suma = arrayCopy.reduce((accumulator, currentValue) => accumulator + currentValue);
    const promedio = suma / arrayCopy.length;
    console.log("el promedio es:", promedio);

    /******3******/

    const arrayCuadrado = array.map((num) => num * num);

    console.log("array al cuadrado", arrayCuadrado);

    /*****4*****/
    const arraySum = [1, -4, 12, 0, -3, 29, -150];
    const numerosPositivos = arraySum.filter((num) => num > 0);
    const sum = numerosPositivos.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
      
      console.log(sum);


    /*****5*****/
    const arrayName = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];


    const nombresLargos = arrayName.filter((nombre) => nombre.length >= 6);
console.log(nombresLargos);

    const nombresConM = arrayName.filter((name) => name.startsWith('M'));
console.log(nombresConM)

    const orderArrayName = arrayName.sort()
console.log(orderArrayName)

    const iniciales = arrayName.map((name) => name.charAt(0));
console.log(iniciales);

    const mayusculas = arrayName.map((name)=> name.toUpperCase())
console.log(mayusculas)

    const nombreConJ = arrayName.some((name) => name.startsWith("J"));
    //const nombreConJ = arrayName.filter((name) => name.charAt(0) === "J");

if (nombreConJ) {
  console.log("Existe al menos un nombre comienza con 'J'");
} else {
  console.log("Ningún nombre comienza con 'J'");
}



/*******6

const colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];

const userInput = prompt("Introduce un color:");

if (colores.includes(userInput)) {
  console.log(`El color ${userInput} está en el array.`);
} else {
  console.log(`El color ${userInput} no está en el array.`);
}
*******/

/******7******/

function getNumerosPares(arr) {
  const numerosPares = arr.filter(numero => numero % 2 === 0);
  return numerosPares;
}

const numerosPares = getNumerosPares(array);
console.log('numeros pares', numerosPares);


/*******8*******/

const filtrarPorVocal = (array) => {
  const newArray = array.filter(function(elemento) {
    return /^[aeiou]/i.test(elemento);})
    let resultado = newArray.slice(0);
    return resultado;
  }

  const arrayFiltrado = filtrarPorVocal(colores);
  console.log('array de vocales',arrayFiltrado)


  /********9*******/

  const intercambiarElementos = (array, index1, index2) => {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
  }

  let arrayIntercambiado = intercambiarElementos(array, 0, 5)
  console.log(arrayIntercambiado);



