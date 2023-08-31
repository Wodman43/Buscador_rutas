
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
  // filtrarkm();
});

kmmin.addEventListener("change", (e) => {
  datosBusqueda.kms = parseFloat(e.target.value);
  console.log(datosBusqueda);
  // filtrarMkm();
  filtrarttodo();
  // filtrarkm();
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
  
  if (base.length === 0) {
    const mensaje = document.createElement("p");
    mensaje.textContent = "No hay rutas que cumplan con los criterios de búsqueda.";
    resultado.appendChild(mensaje);
  } else {
    base.forEach((ruta) => {
      const lasrutas = document.createElement("p");
      lasrutas.innerHTML = `
        <p> Nombre Ruta: ${ruta.nombre}/ Kilometros: ${ruta.kms}/ Calificacion: ${ruta.calificacion}/ Estado: ${ruta.estado}/ Tipo Via: ${ruta.tipoVia}</p>
      `;
      resultado.appendChild(lasrutas);
    });
  }
}


// function filtrarRuta(){
//   const resultado = baserta.filter(ruta=>{
//     if (datosBusqueda.rutas) {
//       return ruta.nombre === datosBusqueda.rutas || ruta.nombre === "";
//     }
//     return ruta;
//   });
//   console.log(resultado);
//   mostrarRutas(resultado);
// }




// function filtrarmkm(){
//   const resultado = baserta.filter(ruta=>{
//     if (datosBusqueda.minkm) {
//       return ruta.minKilometros === datosBusqueda.minkm || ruta.minKilometros === "";
//     }else{
//       console.log('no hay paila')
//     }
//     return ruta;
//   });
//   console.log(resultado);
//   mostrarRutas(resultado);
// }

// function filtrarkm(){
//   const resultado = baserta.filter(ruta=>{
//     if (datosBusqueda.kms) {
//       return ruta.kms === datosBusqueda.kms || ruta.kms === "";
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
//       return ruta.maxKilometros === datosBusqueda.maxkm || ruta.maxKilometros;
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
//       return ruta.estado === datosBusqueda.estado || ruta.estado === "";
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
//       return ruta.calificacion === datosBusqueda.calificacion || ruta.calificacion === "";
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
//       return ruta.tipoVia === datosBusqueda.tpovia || ruta.tipoVia === "";
//     }else{
//       console.log('no hay paila')
//     }
//     return ruta;
//   });
//   console.log(resultado);
//   mostrarRutas(resultado);
// }


// function filtrarttodo(){
//   const resultado = baserta.filter(ruta=>{
//     if (datosBusqueda.rutas || datosBusqueda.kms || datosBusqueda.estado || datosBusqueda.calificacion || datosBusqueda.tpovia) {
//       return ruta.nombre === datosBusqueda.rutas || ruta.nombre === "" && ruta.kms === datosBusqueda.kms || ruta.kms === "" && ruta.estado === datosBusqueda.estado || ruta.estado === "" &&  ruta.calificacion === datosBusqueda.calificacion || ruta.calificacion === "" && ruta.tipoVia === datosBusqueda.tpovia || ruta.tipoVia === "";
//     }
//     return ruta;
//   });
//   console.log(resultado);
//   mostrarRutas(resultado);
// }

function filtrarttodo() {
  const resultado = baserta.filter(ruta => {
    if (datosBusqueda.rutas ||datosBusqueda.kms ||datosBusqueda.estado ||datosBusqueda.calificacion ||datosBusqueda.tpovia) {
      return (
        (datosBusqueda.rutas === "" || ruta.nombre === datosBusqueda.rutas) &&
        (datosBusqueda.kms || ruta.kms === datosBusqueda.kms) &&
        (datosBusqueda.estado === "" || ruta.estado === datosBusqueda.estado) &&
        (datosBusqueda.calificacion || ruta.calificacion === datosBusqueda.calificacion) &&
        (datosBusqueda.tpovia === "" || ruta.tipoVia === datosBusqueda.tpovia)
      );
    }
  });

  console.log(resultado);
  mostrarRutas(resultado);
}
