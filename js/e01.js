let productoa=1250.75;
let productob=890.50;
let productoc=2340.25;

let total = productoa + productob + productoc;
let prom = total / 3;
console.log(`Producto a: $` + productoa);
console.log(`Producto b: $` + productob);
console.log(`Producto c: $` + productoc);
console.log(`Total de ventas: $` + total);
console.log(`Promedio por producto: $` + prom);
console.log(`El total de la compra es: $` + total.toFixed(2));

console.log(`====Ejercicio2=====`);
let temperatura = "77 ";
let temperaturaC = parseFloat(temperatura  - 32) * 5 / 9;
console.log(`Temperatura en grados Fahrenheit: ${temperatura.trim()}°F`);
console.log(`Temperatura en grados Celsius: ${temperaturaC.toFixed(1)}°C`);

console.log(`====Ejercicio3=====`);
let numero1 = Math.floor(Math.random() * 50) + 1;  
let numero2 = Math.floor(Math.random() * 50) + 1;
let numero3 = Math.floor(Math.random() * 50) + 1;   
let numero4 = Math.floor(Math.random() * 50) + 1;
let numero5 = Math.floor(Math.random() * 50) + 1;
console.log(`Números de lotería:  ${numero1}, ${numero2}, ${numero3}, ${numero4}, ${numero5}`);

console.log(`====Ejercicio3=====`);
let ahorro = 5000;
let tasa= 3.5/ 100;
let tiempo = 2;
let interes = ahorro * tasa * tiempo;
let montoFinal = ahorro + interes;
console.log(`Ahorro inicial: $${ahorro}`);
console.log("Tasa de interés: " + (tasa * 100) + "% anual");
console.log(`Tiempo: ${tiempo} años`);
console.log(`Interés ganado: $${interes.toFixed(2)}`);
console.log(`Monto final: $${interes+montoFinal}`);






