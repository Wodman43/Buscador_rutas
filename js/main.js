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
  max: "",
  min:"",
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
    opcion.innerHTML = e.maxKilometros;
    kmmax.appendChild(opcion);
  });
}

function llenakmin() {
  baserta.forEach(e => {
    const opcion = document.createElement("option");
    opcion.innerHTML = e.minKilometros;
    kmmin.appendChild(opcion);
  });
}


rutas.addEventListener("change", (e) => {
  datosBusqueda.rutas = e.target.value;
  filtrarttodo();
});

kmmax.addEventListener("change", (e) => {
  datosBusqueda.max = e.target.value;
  filtrarttodo();
});

kmmin.addEventListener("change", (e) => {
  datosBusqueda.min = e.target.value;
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
    if (datosBusqueda.rutas ||datosBusqueda.max || datosBusqueda.min ||datosBusqueda.estado ||datosBusqueda.calificacion ||datosBusqueda.tpovia){
    return (
      (datosBusqueda.rutas === "" || ruta.nombre === datosBusqueda.rutas) &&
      (datosBusqueda.max === "" || ruta.maxKilometros <= parseFloat(datosBusqueda.max )) &&
      (datosBusqueda.min === "" || ruta.minKilometros >= parseFloat(datosBusqueda.min )) &&
      (datosBusqueda.estado === "" || ruta.estado === datosBusqueda.estado) &&
      (datosBusqueda.calificacion === "" || ruta.calificacion === parseFloat(datosBusqueda.calificacion)) &&
      (datosBusqueda.tpovia === "" || ruta.tipoVia === datosBusqueda.tpovia)
    );}

    console.log(resultado)
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
        <p> Nombre Ruta: <b>${ruta.nombre}</b>
        <br>
        Kilometros Min: <b>${ruta.minKilometros}</b>
        <br>
        Kilometros Max: <b>${ruta.maxKilometros}</b>
        <br>
        Calificacion: <b>${ruta.calificacion}</b>
        <br>
        Estado: <b>${ruta.estado}</b>
        <br>
        Tipo Via: <b>${ruta.tipoVia}</b></p>
      `;
      resultado.appendChild(lasrutas);
    });
  }
}
