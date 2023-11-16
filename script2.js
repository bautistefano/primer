console.log("hola")
let nombres = prompt("Ingrese nombre:")
document.getElementById("titular").innerHTML="¡Hola "+nombres+'!';   


let hoy = new Date();
console.log(hoy);

let inicio = new Date('July 26, 2008 00:00:00');
console.log(inicio);

let diferenciaEnMilisegundos = Math.abs(inicio - hoy);
let diasTotales = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));
let años = Math.floor(diasTotales / 365);
let meses = Math.floor((diasTotales % 365) / 30);
let dias = diasTotales % 30;

let minutos = Math.floor(diferenciaEnMilisegundos / (1000 * 60) % 60);

document.getElementById("creacion").innerHTML = 'Llevando a tu mesa el sabor de nuestra historia hace: ' + años + ' años, ' + meses + ' meses, ' + dias + ' días y ' + minutos + ' minutos.';

//--------------------------------------



