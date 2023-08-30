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
const tpovia = document.getElementById('tpovia');
const resultado = document.getElementById('resultado');

// function llenarutas() {
//   console.log("LLenado el Select");
//   for (let i=0; i<baserta.length; i++) {
//     const opcion = document.createElement("option");
//     opcion.innerHTML = rutas[i].nombre;
//     rutas.appendChild(opcion);
//   }
// }

const datosBusqueda = {
  id:"",
  rutas: "",
  kms:"",
  estado: "",
  calificacion: "",
  tpovia: "",
};


document.addEventListener("DOMContentLoaded", () => {
  llenaruta();
  llenakmmax();
  llenakmin();
});


function llenaruta(){
  baserta.forEach(e => {
    console.log("LLenado el Select");
    const opcion = document.createElement("option");
    opcion.innerHTML = e.nombre;
    rutas.appendChild(opcion);



    
  })}


    function llenakmmax(){
      baserta.forEach(e => {
        console.log("LLenado el Select");
        const opcion = document.createElement("option");
        opcion.innerHTML = e.kms;
        kmmax.appendChild(opcion);
      })}

      function llenakmin(){
        baserta.forEach(e => {
          console.log("LLenado el Select");
          const opcion = document.createElement("option");
          opcion.innerHTML = e.kms;
          kmmin.appendChild(opcion);
        })}


  rutas.addEventListener("change", (e) => {
  datosBusqueda.rutas = e.target.value;
  console.log(datosBusqueda);
  // filtrarRuta();
  filtrarttodo();
});

kmmax.addEventListener("change", (e) => {
  datosBusqueda.kms = parseFloat(e.target.value);
  console.log(datosBusqueda);
  // filtrarMkm();
  filtrarttodo();
});

kmmin.addEventListener("change", (e) => {
  datosBusqueda.kms = parseFloat(e.target.value);
  console.log(datosBusqueda);
  // filtrarMkm();
  filtrarttodo();
});


estado.addEventListener("change", (e) => {
  datosBusqueda.estado = e.target.value;
  console.log(datosBusqueda);
  // filtrarestado();
  filtrarttodo();
});

calificacion.addEventListener("change", (e) => {
  datosBusqueda.calificacion = parseFloat(e.target.value);
  console.log(datosBusqueda);
  // filtrarcalific();
  filtrarttodo();
});

tpovia.addEventListener("change", (e) => {
  datosBusqueda.tpovia = e.target.value;
  console.log(datosBusqueda);
  // filtrartpovia();
  filtrarttodo();
});


// const max = new Date().getFullYear();
// const min = max - 20;

function mostrarRutas(base) {
  resultado.innerHTML = "";
  base.forEach((ruta) => {
    const autoHTML = document.createElement("p");
    autoHTML.innerHTML = `
             <p> Nombre Ruta: ${ruta.nombre}/ Kilometros: ${ruta.kms}/ Calificacion: ${ruta.calificacion}/ Estado: ${ruta.estado}/ Tipo Via: ${ruta.tipoVia}</p>
         `;
    resultado.appendChild(autoHTML);
  });
}


// function filtrarRuta(){
//   const resultado = baserta.filter(ruta=>{
//     if (datosBusqueda.rutas) {
//       return ruta.nombre === datosBusqueda.rutas;
//     }
//     return ruta;
//   });
//   console.log(resultado);
//   mostrarRutas(resultado);
// }




// function filtrarmkm(){
//   const resultado = baserta.filter(ruta=>{
//     if (datosBusqueda.minkm) {
//       return ruta.minKilometros === datosBusqueda.minkm;
//     }else{
//       console.log('no hay paila')
//     }
//     return ruta;
//   });
//   console.log(resultado);
//   mostrarRutas(resultado);
// }

// function filtrarMkm(){
//   const resultado = baserta.filter(ruta=>{
//     if (datosBusqueda.maxkm) {
//       return ruta.maxKilometros === datosBusqueda.maxkm;
//     }else{
//       console.log('no hay paila')
//     }
//     return ruta;
//   });
//   console.log(resultado);
//   mostrarRutas(resultado);
// }

// function filtrarestado(){
//   const resultado = baserta.filter(ruta=>{
//     if (datosBusqueda.estado) {
//       return ruta.estado === datosBusqueda.estado;
//     }else{
//       console.log('no hay paila')
//     }
//     return ruta;
//   });
//   console.log(resultado);
//   mostrarRutas(resultado);
// }

// function filtrarcalific(){
//   const resultado = baserta.filter(ruta=>{
//     if (datosBusqueda.calificacion) {
//       return ruta.calificacion === datosBusqueda.calificacion;
//     }else{
//       console.log('no hay paila')
//     }
//     return ruta;
//   });
//   console.log(resultado);
//   mostrarRutas(resultado);
// }

// function filtrartpovia(){
//   const resultado = baserta.filter(ruta=>{
//     if (datosBusqueda.tpovia) {
//       return ruta.tipoVia === datosBusqueda.tpovia;
//     }else{
//       console.log('no hay paila')
//     }
//     return ruta;
//   });
//   console.log(resultado);
//   mostrarRutas(resultado);
// }


function filtrarttodo(){
  const resultado = baserta.filter(ruta=>{
    if (datosBusqueda.rutas || datosBusqueda.kms || datosBusqueda.estado || datosBusqueda.calificacion || datosBusqueda.tpovia) {
      return ruta.nombre === datosBusqueda.rutas ||ruta.kms === datosBusqueda.kms || ruta.estado === datosBusqueda.estado || ruta.calificacion === datosBusqueda.calificacion || ruta.tipoVia === datosBusqueda.tpovia;
    }
    return ruta;
  });

  if(resultado)
  console.log(resultado);
  mostrarRutas(resultado);
}