import { baserta } from './bd_Rt.js';
console.log(baserta);

const rutas = document.getElementById('rutas');
const kmmax = document.getElementById('kmmax');
const kmmin = document.getElementById('kmmin');
const estado = document.getElementById('estado');
const calificacion = document.getElementById('calificacion');
const tpovia = document.getElementById('tpovia');
const resultado = document.getElementById('resultado');

const datosBusqueda = {
  rutas: "",
  kms: "",
  estado: "",
  calificacion: "",
  tpovia: "",
};


document.addEventListener("DOMContentLoaded", () => {
  llenaruta();
  llenakmmax();
  llenakmin();
  // filtrarttodo(); 
});



function llenaruta() {
  baserta.forEach(e => {
    const opcion = document.createElement("option");
    opcion.innerHTML = e.nombre;
    rutas.appendChild(opcion);
  });
}

function llenakmmax() {
  baserta.forEach(e => {
    const opcion = document.createElement("option");
    opcion.innerHTML = e.kms;
    kmmax.appendChild(opcion);
  });
}

function llenakmin() {
  baserta.forEach(e => {
    const opcion = document.createElement("option");
    opcion.innerHTML = e.kms;
    kmmin.appendChild(opcion);
  });
}


rutas.addEventListener("change", (e) => {
  datosBusqueda.rutas = e.target.value;
  filtrarttodo();
});

kmmax.addEventListener("change", (e) => {
  datosBusqueda.kms = e.target.value;
  filtrarttodo();
});

kmmin.addEventListener("change", (e) => {
  datosBusqueda.kms = e.target.value;
  filtrarttodo();
});

estado.addEventListener("change", (e) => {
  datosBusqueda.estado = e.target.value;
  filtrarttodo();
});

calificacion.addEventListener("change", (e) => {
  datosBusqueda.calificacion = e.target.value;
  filtrarttodo();
});

tpovia.addEventListener("change", (e) => {
  datosBusqueda.tpovia = e.target.value;
  filtrarttodo();
});


function filtrarttodo() {
  const resultado= baserta.filter(ruta => {
    if (datosBusqueda.rutas ||datosBusqueda.kms ||datosBusqueda.estado ||datosBusqueda.calificacion ||datosBusqueda.tpovia){
    return (
      (datosBusqueda.rutas === "" || ruta.nombre === datosBusqueda.rutas) &&
      (datosBusqueda.kms === "" || ruta.kms === parseFloat(datosBusqueda.kms)) &&
      (datosBusqueda.estado === "" || ruta.estado === datosBusqueda.estado) &&
      (datosBusqueda.calificacion === "" || ruta.calificacion === parseFloat(datosBusqueda.calificacion)) &&
      (datosBusqueda.tpovia === "" || ruta.tipoVia === datosBusqueda.tpovia)
    );}
  });

  mostrarRutas(resultado);
}


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
