console.log("1---------------");
let nombre = "Estudiante";
console.log(nombre);

console.log("2---------------");
let edad = 20;
let ciudad = "Madrid";
let esEstudiante = true;

console.log(edad, ciudad, esEstudiante);
console.log("3---------------");

console.log(typeof 42);
console.log(typeof "Hola");
console.log(typeof true);
console.log(typeof undefined);
console.log("4---------------");

let a = 10;
let b = 3;
console.log("Suma:", a + b);
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("División:", a / b);
console.log("5---------------");

let nombre1 = "Ana";
let apellido = "García";
let nombreCompleto = nombre1 + " " + apellido;
console.log("Nombre completo:", nombreCompleto);
console.log("6---------------");

let producto = "Laptop";
let precio = 999;
console.log(`El ${producto} cuesta $${precio}`);
console.log("7---------------");
let texto = "25";
console.log("Number():", Number(texto));
console.log("parseInt():", parseInt(texto));
console.log("parseFloat():", parseFloat(texto));


console.log("8---------------");
let numero = 123;
console.log("String():", String(numero));
console.log("toString():", numero.toString());
console.log("Concatenación:", numero + "");



console.log("9---------------");
console.log(5+"3","5"+3,5+3)

console.log("10---------------");
console.log("'10' - 3 =", "10" - 3);
console.log("'10' * 2 =", "10" * 2);
console.log("'10' / 2 =", "10" / 2);

console.log("11---------------");
let valor1 = null;
let valor2 = undefined;
let valor3 = Number("abc");
console.log("null:", valor1);
console.log("undefined:", valor2);
console.log("NaN:", valor3);

console.log("12---------------");
let precio2 = 19.99;
let descuento = 0.15;
let precioFinal = precio2 * (1 - descuento);
console.log("Precio final:", precioFinal);

console.log("13---------------");
let numero2 = 15.789;
console.log("Math.round():", Math.round(numero2));
console.log("Math.floor():", Math.floor(numero2));
console.log("Math.ceil():", Math.ceil(numero2));

console.log("14---------------");
let precio3 = 123.456789;
console.log("Precio formateado:", precio3.toFixed(2));
console.log("Tipo del resultado:", typeof precio3.toFixed(2));

console.log("15---------------");
console.log("5 == '5':", 5 == "5");
console.log("5 === '5':", 5 === "5");
console.log("true == 1:", true == 1);
console.log("true === 1:", true === 1);


console.log("16---------------");
let radio = 5;
let area = Math.PI * radio * radio;
console.log("Área del círculo:", area);
console.log("Área redondeada:", Math.round(area));

console.log("17---------------");
let textoMixto = "12.34abc";
console.log("parseInt():", parseInt(textoMixto));
console.log("parseFloat():", parseFloat(textoMixto));
console.log("Number():", Number(textoMixto));


console.log("18---------------");
let resultado = (parseFloat("10.5") + parseInt("20.7")) * Number("2");
console.log("Resultado:", resultado);
console.log("Paso a paso:");
console.log("parseFloat('10.5'):", parseFloat("10.5"));
console.log("parseInt('20.7'):", parseInt("20.7"));
console.log("Number('2'):", Number("2"));

console.log("19---------------");
console.log("isNaN(42):", isNaN(42));
console.log("isNaN('42'):", isNaN("42"));
console.log("isNaN('abc'):", isNaN("abc"));
console.log("isNaN(NaN):", isNaN(NaN));


console.log("20---------------");
let numeroTexto1 = "15.5";
let numeroTexto2 = "4.2";

let num1 = parseFloat(numeroTexto1);
let num2 = parseFloat(numeroTexto2);

console.log(`Números: ${num1} y ${num2}`);
console.log(`Suma: ${(num1 + num2).toFixed(2)}`);
console.log(`Resta: ${(num1 - num2).toFixed(2)}`);
console.log(`Multiplicación: ${(num1 * num2).toFixed(2)}`);
console.log(`División: ${(num1 / num2).toFixed(2)}`);