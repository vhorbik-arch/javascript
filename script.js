/*====================================EJERCICIO 0====================================*/

document.getElementById("ej0").innerHTML = "Hola Mundo";


/*====================================EJERCICIO 1====================================*/

let nombre = "Valya";
let miEdad = 30;
let altura = 1.75;
let esEstudianteDescuento = true;

console.log(nombre, miEdad, altura, esEstudianteDescuento);

document.getElementById("ej1").innerHTML = `
Nombre: ${nombre} <br>
Edad: ${miEdad} <br>
Altura: ${altura}
`;



/*====================================EJERCICIO 2====================================*/

let ciudad = "Buenos Aires";
let temperatura = 18;
let estaLloviendo = false;
let precio = 99.99;
console.log(typeof ciudad);      // "string"
console.log(typeof temperatura); // "number"

document.getElementById("ej2").innerHTML = ciudad;


/*====================================EJERCICIO 3====================================*/

let num1 = 10;
let num2 = 5;

console.log(num1 + num2);  // 15
console.log(num1 - num2);  // 5
console.log(num1 * num2);  // 50
console.log(num1 / num2);  // 2
console.log(num1 % num2);  // 0

document.getElementById("ej3").innerHTML = `
Suma: ${num1 + num2} <br>
Resta: ${num1 - num2}<br>
Multiplicacion: ${num1 * num2} <br>
Division: ${num1 / num2} <br>
Porcentaje: ${num1 % num2}
`;


/*====================================EJERCICIO 4====================================*/

let suEdad = 25;
let edadFutura = suEdad + 10;
console.log(edadFutura); // 35

document.getElementById("ej4").innerHTML = edadFutura;



/*====================================EJERCICIO 5====================================*/

let puntos = 100;
puntos += 10;  // 110
puntos -= 20;  // 90
console.log(puntos);

document.getElementById("ej5").innerHTML = puntos;



/*====================================EJERCICIO 6====================================*/

let a = 10;
let b = 20;
console.log(a == b);   // false
console.log(a === b);  // false
console.log(a > b);    // false
console.log(a < b);    // true
console.log(a != b);   // true

document.getElementById("ej6").innerHTML = a | b;




/*====================================EJERCICIO 7====================================*/

let edadVotar = 20;
let puedeVotar = edadVotar >= 18;
console.log(puedeVotar); // true

document.getElementById("ej7").innerHTML = puedeVotar;




/*====================================EJERCICIO 8====================================*/

let tieneEntrada = true;
let esMayor = true;
let acceso = tieneEntrada && esMayor;
console.log(acceso); // true

document.getElementById("ej8").innerHTML = acceso;




/*====================================EJERCICIO 9====================================*/

let esJubilado = false;
let esEstudiante = true;
let tieneDescuento = esJubilado || esEstudiante;
console.log(tieneDescuento); // true

document.getElementById("ej9").innerHTML = tieneDescuento;




/*====================================EJERCICIO 10====================================*/

let luzEncendida = true;
console.log(!luzEncendida); // false

document.getElementById("ej10").innerHTML = luzEncendida;




/*====================================EJERCICIO 11====================================*/

let j = 15;
let k = 3;
console.log("Suma:", j + k);
console.log("Mayor:", j > k);
console.log("Iguales:", j === k);

document.getElementById("ej11").innerHTML = j | k;





/*====================================EJERCICIO 12====================================*/

let x = "5";
let y = 5;
console.log(x == y);   // true  (compara solo valor)
console.log(x === y);  // false (compara valor Y tipo)

document.getElementById("ej12").innerHTML = x | y;

//Diferencia: == compara valores, === compara valores y tipos de dato.





/*====================================FOOTER - PIE DE PAGINA====================================*/

const year = new Date().getFullYear();

document.getElementById("footer-text").innerHTML =
`© Valya ${year} | Diseñado por Valetchka`;