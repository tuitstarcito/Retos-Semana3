const getAreaSquare = document.getElementById('button-square');
const getAreaCircle = document.getElementById('button-circle');
const getAreaTriangle = document.getElementById('button-triangle');
const getHeightIsosceles = document.getElementById('button-isosceles');
const getMeanMedianMode = document.getElementById('button-3m');
const getMeans = document.getElementById('button-3prom');
const firstTicket = document.getElementById('first-ticket');
const secondTicket = document.getElementById('second-ticket');
const thirdTicket = document.getElementById('third-ticket');
const input = document.querySelectorAll('input');

// Obtiene el área del cuadrado
getAreaSquare.addEventListener('click', () => {
  // const side = document.getElementById('side-square').value;
  const side = document.getElementById('side-square').value;
  const result = document.getElementById('result-square');

  side > 0 || side < 0
    ? (result.innerHTML = side * side)
    : (result.innerHTML = 'Campos incorrectos');
});

// obtiene el área del círculo
getAreaCircle.addEventListener('click', () => {
  const radio = document.getElementById('radio-circle').value;
  const result = document.getElementById('result-circle');

  radio > 0 || radio < 0
    ? (result.innerHTML = (Math.PI * Math.pow(radio, 2)).toFixed(2))
    : (result.innerHTML = 'Campos incorrectos');
});

// Obtiene el área del triángulo
getAreaTriangle.addEventListener('click', () => {
  const base = document.getElementById('base-triangle').value;
  const height = document.getElementById('height-triangle').value;
  const result = document.getElementById('result-triangle');

  (base > 0 || base < 0) && (height > 0 || height < 0)
    ? (result.innerHTML = (base * height) / 2)
    : (result.innerHTML = 'Campos incorrectos');
});

// Obtiene la altura del triángulo isósceles
getHeightIsosceles.addEventListener('click', () => {
  const side1 = document.getElementById('side1-triangle').value;
  const side2 = document.getElementById('side2-triangle').value;
  const side3 = document.getElementById('side3-triangle').value;
  const result = document.getElementById('result-isosceles');

  if (
    (side1 > 0 || side1 < 0) &&
    (side2 > 0 || side2 < 0) &&
    (side3 > 0 || side3 < 0)
  ) {
    if (side1 === side2)
      result.innerHTML = Math.sqrt(
        Math.pow(side1, 2) - Math.pow(side3, 2) / 4
      ).toFixed(2);
    else if (side1 === side3)
      result.innerHTML = Math.sqrt(
        Math.pow(side1, 2) - Math.pow(side2, 2) / 4
      ).toFixed(2);
    else if (side2 === side3)
      result.innerHTML = Math.sqrt(
        Math.pow(side2, 2) - Math.pow(side1, 2) / 4
      ).toFixed(2);
    else result.innerHTML = 'Ten al menos dos lados iguales';
  } else result.innerHTML = 'Campos incorrectos';
});

// Obtiene el promedio, mediana y moda
getMeanMedianMode.addEventListener('click', () => {
  const list = document.getElementById('array-numbers').value;
  const resultMean = document.getElementById('result-mean');
  const resultMedian = document.getElementById('result-median');
  const resultMode = document.getElementById('result-mode');

  // Validamos que el input no esté vacío
  if (list == '') {
    resultMean.innerHTML = 'Ingresa al menos un número';
    resultMedian.innerHTML = 'Ingresa al menos un número';
    resultMode.innerHTML = 'Ingresa al menos un número';
    return;
  }

  const newList = list
    .split(',') //convierte el input en un newListay
    .map(parseFloat) //recorre el newListay y convierte los elementos en números
    .sort((x, y) => x - y); // ordena los elementos de menor a mayor

  // Calcula el promedio
  const suma = newList.reduce((a, b) => a + b, 0);
  promedio = suma / newList.length;
  resultMean.textContent = promedio.toFixed(2);

  // Calcula la mediana
  newList.length % 2 == 0
    ? (resultMedian.textContent =
        (newList[newList.length / 2 - 1] + newList[newList.length / 2]) / 2)
    : (resultMedian.textContent = newList[Math.floor(newList.length / 2)]);

  // Calcula la moda

  /* Obtiene como:
  index: el número ingresado en el input,
  element: el número de veces que se repite el input

  Ejemplo: [1,1,2,2,2,3,3] => [0,2,3,2]
  index 0 repite 0 veces
  index 1 repite 2 veces
  index 2 repite 3 veces
  index 3 repite 2 veces
  */
  const counter = newList.reduce((a, b) => ((a[b] = a[b] + 1 || 1), a), []);

  // Calcula el elemento mayor de la lista
  const numeroMayor = counter.reduce((a, b) => Math.max(a, b));

  // Escribe el index del número mayor de la lista, siendo este el número que se repite más veces
  resultMode.textContent = counter.findIndex((e) => e == numeroMayor);

  // Lo que no he podido conseguir es que pasa si hay 2 números mayores ???
});

// Obtiene tipos de promedio: aritmético, geométrico y armónico
getMeans.addEventListener('click', () => {
  const list = document.getElementById('array-mean').value;
  const resultArit = document.getElementById('result-arit');
  const resultGeo = document.getElementById('result-geo');
  const resultArm = document.getElementById('result-arm');

  // Validamos que el input no esté vacío
  if (list == '') {
    resultArit.innerHTML = 'Ingresa al menos un número';
    resultGeo.innerHTML = 'Ingresa al menos un número';
    resultArm.innerHTML = 'Ingresa al menos un número';
    return;
  }

  const newList = list
    .split(',') //convierte el input en un array sin ","
    .map(parseFloat); //recorre el newListay y convierte los elementos en números

  // Calcula el promedio aritmético
  const suma = newList.reduce((a, b) => a + b, 0);
  promedio = suma / newList.length;
  resultArit.textContent = promedio.toFixed(2);

  // Calcula el promedio geométrico
  const producto = newList.reduce((a, b) => a * b, 1);
  const raizN = Math.pow(producto, 1 / newList.length);
  resultGeo.textContent = raizN.toFixed(2);

  // Calcula el promedio armónico
  let sum = 0;
  for (let i = 0; i < newList.length; i++) {
    sum = sum + 1 / newList[i];
  }
  resultArm.textContent = (newList.length / sum).toFixed(2);
});

// Tickets
firstTicket.addEventListener('click', () => {
  const eResult = document.getElementById('ticket-result');
  const discount = 0.1;
  const total = 3855;
  const result = total - total * discount;
  eResult.textContent = `Monto final: S/. ${result.toFixed(2)}`;
});

secondTicket.addEventListener('click', () => {
  const eResult = document.getElementById('ticket-result');
  const discount = 150;
  const total = 3855;
  const result = total - discount;
  eResult.textContent = `Monto final: S/. ${result.toFixed(2)}`;
});

thirdTicket.addEventListener('click', () => {
  const result = document.getElementById('ticket-result');
  result.innerHTML = `¡Felicidades! Ganaste un teclado`;
});

// Limpia los inputs cada vez que el navegador se actualiza
window.onload = () => {
  actualizarDiaActual();
  document.getElementById('side-square').value = '';
  document.getElementById('radio-circle').value = '';
  document.getElementById('base-triangle').value = '';
  document.getElementById('height-triangle').value = '';
  document.getElementById('side1-triangle').value = '';
  document.getElementById('side2-triangle').value = '';
  document.getElementById('side3-triangle').value = '';
  document.getElementById('button-3m').value = '';
  document.getElementById('array-numbers').value = '';
  document.getElementById('array-mean').value = '';

};

// Impido que la página se actualiza cuando el usuario apreta ENTER en cualquier input
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('input').forEach((node) =>
    node.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
      }
    })
  );
});

function actualizarDiaActual() {
  var fecha = new Date(); //Fecha actual
  var mes = fecha.getMonth() + 1; //obteniendo mes
  var dia = fecha.getDate(); //obteniendo dia
  var ano = fecha.getFullYear(); //obteniendo año
  if (dia < 10) dia = '0' + dia; //agrega cero si el menor de 10
  if (mes < 10) mes = '0' + mes; //agrega cero si el menor de 10
  document.getElementById('fechaActual').textContent =
    ano + '-' + mes + '-' + dia;
  document.getElementById(
    'fechaActual'
  ).textContent = `Emitida el: ${dia}/${mes}/${ano}`;
}
