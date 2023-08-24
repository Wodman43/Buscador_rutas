// ESTE APARTADO PARA LAS VARIABLES

//  const marca = document.querySelector("#marca");
// const year = document.querySelector("#year");
// const minimo = document.querySelector("#minimo");
// const maximo = document.querySelector("#maximo");
// const calificacion = document.querySelector("#puertas");
//  const transmision = document.querySelector("#transmision");
// const tcarretera = document.querySelector("#color");
// const resultado = document.querySelector("#resultado");
import {baserta} from './bd_Rt.js'
console.log(baserta);

const rutas = document.getElementById('rutas');
const kmmax = document.getElementById('kmmax');
const kmmin = document.getElementById('kmmin');
const estado = document.getElementById('estado');
const calificacion = document.getElementById('calificacion');
const tpovia = document.getElementById('calificacion');

// function llenarutas() {
//   console.log("LLenado el Select");
//   for (let i=0; i<baserta.length; i++) {
//     const opcion = document.createElement("option");
//     opcion.innerHTML = rutas[i].nombre;
//     rutas.appendChild(opcion);
//   }
// }

document.addEventListener("DOMContentLoaded", () => {
  llenaruta();
  llenakmmin();
  llenakmmax();
  llenaestado();
});


function llenaruta(){
  baserta.forEach(e => {
    console.log("LLenado el Select");
    const opcion = document.createElement("option");
    opcion.innerHTML = e.nombre;
    rutas.appendChild(opcion);
  })}

  function llenakmmin(){
    baserta.forEach(e => {
      console.log("LLenado el Select");
      const opcion = document.createElement("option");
      opcion.innerHTML = e.minKilometros;
      kmmin.appendChild(opcion);
    })}

    function llenakmmax(){
      baserta.forEach(e => {
        console.log("LLenado el Select");
        const opcion = document.createElement("option");
        opcion.innerHTML = e.maxKilometros;
        kmmax.appendChild(opcion);
      })}

      function llenaestado(){
        baserta.forEach(e => {
          console.log("LLenado el Select");
          const opcion = document.createElement("option");
          opcion.innerHTML = e.estado;
          estado.appendChild(opcion);
        })}





// const max = new Date().getFullYear();
// const min = max - 20;

//Generando un objeto con la búsqueda
// const datosBusqueda = {
//   id: "",
//   rutas: "",
//   maxkm: "",
//   minkm: "",
//   estado: "",
//   calificacion: "",
//   tpovia: "",
// };

//ESTE APARTADO PARA LOS EVENTOS



// //EVENTOS PARA CADA UNO DE LOS SELECT

// rutas.addEventListener("change", (e) => {
//   console.log("Se escogio una opción");
//   console.log(e.target.value); //este valor es el que se debe de almacenar en el objeto que se creo
//   datosBusqueda.rutas = e.target.value;
//   //console.log(datosBusqueda);
//   //filtrarAuto();
// });

//ESTE APARTADO PARA LAS FUNCIONES

//definimos la funcion mostrarAutos
// function mostrarAutos() {
//   autos.forEach((auto) => {
//     const autoHTML = document.createElement("p");
//     autoHTML.innerHTML = `
//              <p>${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas - Transmisión: ${auto.transmision} - Precio: ${auto.precio} - Color: ${auto.color}</p>
//          `;
//     resultado.appendChild(autoHTML);
//   });
// }

// function llenarSelect() {
//   console.log("LLenado el Select");
//   // console.log(min);
//   // console.log(max);
//   for (let i = max; i >= min; i--) {
//     //este es cambio para que me muestre los años desde el max
//     for (let i = min; i <= max; i++) {
//     const opcion = document.createElement("option");
//     opcion.value = i;
//     opcion.textContent = i;
//     year.appendChild(opcion);
//   }
// }
// const nose = (ruta)=> baserta.filter(rut=> rut.rutas === ruta);
// console.log(nose('Camino de los Tayrona'));

// function llenarutas(){
//   baserta.forEach((e)=>{
    

//   })}


// year.addEventListener("change", (e) => {
//   datosBusqueda.year = e.target.value;
//   console.log(datosBusqueda);
// });

// minimo.addEventListener("change", (e) => {
//   datosBusqueda.minimo = e.target.value;
//   console.log(datosBusqueda);
// });

// maximo.addEventListener("change", (e) => {
//   datosBusqueda.maximo = e.target.value;
//   console.log(datosBusqueda);
// });

// puertas.addEventListener("change", (e) => {
//   datosBusqueda.puertas = e.target.value;
//   console.log(datosBusqueda);
// });

// transmision.addEventListener("change", (e) => {
//   datosBusqueda.transmision = e.target.value;
//   console.log(datosBusqueda);
// });

// color.addEventListener("change", (e) => {
//   datosBusqueda.color = e.target.value;
//   console.log(datosBusqueda);
// });

// function filtrarAuto() {
//   console.log("Filtrando por automoviles");
//   const resultado = autos.filter(filtrarMarca);
//   console.log(resultado);
// }

// function filtrarMarca(auto) {
//   if (datosBusqueda.marca) {
//     return auto.marca === datosBusqueda.marca;
//   }
//   return auto;
// }