
// document.getElementById("servicios").onclick = function servicios() {
//   let servicio = prompt("Que servicio quiere abonar?:\n 1: Agua \n 2: Luz \n 3: Gas \n 4: Internet \n 5: Otro");
//   switch (servicio) {
//     case "1":
//       let agua = confirm("Su factura de Agua es de $1130 \n Realizar el pago?");
//       if (agua == true) {
//         alert("se realizo el pago con exito");
//       } else {
//         alert("No se realizo el pago");
//       }
//       break;
//     case "2":
//       let luz = confirm("Su factura de Luz es de $4268 \n Realizar el pago?");
//       if (luz == true) {
//         alert("se realizo el pago con exito");
//       } else {
//         alert("No se realizo el pago");
//       }
//       break;
//     case "3":
//       let gas = confirm("Su factura de Gas es de $2350 \n Realizar el pago?");
//       if (gas == true) {
//         alert("se realizo el pago con exito");
//       } else {
//         alert("No se realizo el pago");
//       }
//       break;
//     case "4":
//       let internet = confirm("Su factura de Internet es de $6550 \n Realizar el pago?");
//       if (internet == true) {
//         alert("se realizo el pago con exito");
//       } else {
//         alert("No se realizo el pago");
//       }
//       break;
//     default:
//       prompt("Ingrese el nombre del servicio");
//       prompt("Ingrese el monto a abonar");
//       alert("El sistema no funciona correctamente, vuelva a intentarlo en unos momentos");
//       break;
//   }
// };

// //
// //Entrega 2
// //

// //Utilizo un constuctor para agregar un nuevo Objeto de la clase Persona

// class Persona {
//   constructor(info) {
//     this.nombre = info.nombre;
//     this.apellido = info.apellido;
//     this.alias = info.alias;
//     this.cbu = info.cbu;
//   }
// }

// //Utilice un boton para llamar a la funcion transferir.
// //En el Caso 3, simulo el ingreso de un nuevo contacto creando un objeto, simulo el CBU random y quito decimales. no realizo ningun proceso de validacion pero tengo pensado hacerlo cuando trabajemos con inputs.
// //Muestro la operacion realizada en el HTML y con alert
// //Tambien voy generando el aviso de cada proceso en la consola, para testear cada interaccion con el sitio

// document.getElementById("transferencias").onclick = function transferir() {
//   let transfer = prompt("Elija Destinatario:\n 1: Martin \n 2: Pepe \n 3: Agregar Nuevo");
//   switch (transfer) {
//     case "1":
//       let martin = prompt("Cuanto desea transferir");
//       if (martin > 1000) {
//         let conf = confirm("Esta seguro que desea Transferir a Martin $ " + martin);
//         if (conf == true) {
//           alert("se realizo la transferencia de $ " + martin + " a Martin");
//           console.log("se realizo la transferencia de $ " + martin + " a Martin");
//           document.getElementById("trans").innerHTML = "se realizo la transferencia de $ " + martin + " a Martin";
//         } else {
//           alert("No se realizo ninguna transferencia");
//         }
//       } else {
//         alert("Debe ingresar un valor mayor a $1000");
//       }
//       break;
//     case "2":
//       let pepe = prompt("Cuanto desea transferir");
//       if (pepe > 1000) {
//         let conf = confirm("Esta seguro que desea Transferir a Pepe $ " + pepe);
//         if (conf == true) {
//           alert("se realizo la transferencia de $ " + pepe + " a Pepe");
//           console.log("se realizo la transferencia de $ " + pepe + " a Pepe");
//           document.getElementById("trans").innerHTML = "se realizo la transferencia de $ " + pepe + " a Pepe";
//         } else {
//           alert("No se realizo ninguna transferencia");
//         }
//       } else {
//         alert("Debe ingresar un valor mayor a $1000");
//       }
//       break;
//     case "3":
//       let persona1 = new Persona({
//         nombre: prompt("Nombre"),
//         apellido: prompt("Apellido"),
//         alias: "el malvado",
//         cbu: (Math.random() * 10000000000000).toFixed(0),
//       });
//       console.log(persona1);
//       document.getElementById("trans").innerHTML =
//         "se agrego con exito a: <br> " + persona1.nombre + " " + persona1.apellido + " <br> CBU " + persona1.cbu;
//       break;
//     default:
//       alert("opcion inválida");
//       break;
//   }
// };

// //Creo un Array con 4 Elementos



// //Asocio la variable contenedor al div "conteiner" y "prueba"
// //creo el elemento div, y un texto HTML para crear un parrafo p



// let gracias = document.getElementById("prueba");
// gracias.innerHTML = "Gracias por confiar en nosotros";

//Array Usuario
class Usuario {
  constructor(user) {
    this.nombre = user.nombre;
    this.apellido = user.apellido;
    this.cajaDeAhorro = user.cajaDeAhorro;
    this.alias = user.alias;
    this.cbu = user.cbu;
    this.puntos = user.puntos;
    this.seguros = user.seguros;
  }
}

const user = {
  nombre: "Nicolas",
  apellido: "Gelidonidis",
  clave: "11111",
  cajaDeAhorro: 1200000,
  alias: "DarthAtreyu",
  cbu: 3215621456356789,
  puntos: 1500,
  seguros: [
    { tipo: "automotor", estado: "activo", costo: 7500 },
    { tipo: "hogar", estado: "activo", costo: 4600 },
    { tipo: "accidentes", estado: "activo", costo: 2800 },
    { tipo: "vida", estado: "inactivo", costo: 3800 },
  ],
};

console.log(user);
console.log(user.nombre);
console.log(user.apellido);
console.log("$ " + user.cajaDeAhorro);
console.log(user.alias);
console.log(user.puntos + " puntos");

const usuario = user.nombre;
const apellido = user.apellido;
const password = user.clave;

//LogIn
function logIn() {
  let user = document.getElementById("usuario").value;
  let pass = document.getElementById("clave").value;
  const logContainer = document.querySelector(".container_logIn");
  const cuerpo = document.getElementById("cuerpo");

  if (user === usuario && pass == password) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Inicio de sesión con éxito",
    });
    logContainer.classList.add("invisible");
    cuerpo.classList.remove("invisible");
    return (document.getElementById("user").innerHTML += "Bienvenido: " + user + " " + apellido);
  } else {
    Swal.fire("Usuario o contraseña Incorrectas", "Inténtelo nuevamente", "error");
  }
}

let boton = document.getElementById("logIn");
boton.addEventListener("click", () => logIn());

//Plazo Fijo
const openModalPf = document.querySelector(".plazoFijo");
const modal2 = document.querySelector(".modal2");
const closeModal2 = document.querySelector(".close2");

openModalPf.addEventListener("click", (e) => {
  e.preventDefault();
  modal2.classList.add("modal--show");
});

closeModal2.addEventListener("click", (e) => {
  e.preventDefault();
  modal2.classList.remove("modal--show");
});

function plazoFijo() {
  let monto = document.getElementById("monto").value;
  let plazo = document.getElementById("plazo").value;

  if (parseInt(monto) >= 1000 && parseInt(monto) <= user.cajaDeAhorro && parseInt(plazo) >= 30) {
    let interes = parseInt(monto) * 0.75 * (parseInt(plazo) / 365);
    document.getElementById("resultadoPlazoFijo").innerHTML =
      "Su plazo fijo de $" +
      monto +
      " ya esta constituido por " +
      plazo +
      " dias <br> El interes otorgado por su inversion es de $" +
      interes.toFixed(2) +
      " pesos";
    console.log("el interes otorgado por su inversion es de $" + interes.toFixed(2));
    document.getElementById("pz").innerHTML =
      "Su plazo fijo de $" +
      monto +
      " ya esta constituido por " +
      plazo +
      " dias <br> El interes otorgado por su inversion es de $" +
      interes.toFixed(2) +
      " pesos";
    user.cajaDeAhorro = user.cajaDeAhorro - monto;
    console.log(user.cajaDeAhorro);
    console.log(user);
  } else {
    alert("ingrese un monto y plazo valido");
    return;
  }
}

let pf = document.getElementById("simularPf");
pf.addEventListener("click", () => plazoFijo());

//Dark Mode
const btnSwitch = document.querySelector("#switch");
btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
});

//Tarjeta de Credito
document.getElementById("resumen").onclick = function tarjeta() {
  let fecha = new Date();
  let dia = fecha.getDate();
  let mes = fecha.getMonth() + 1;
  let año = fecha.getFullYear();
  console.log("Gastos del Mes hasta el " + dia + " del " + mes + " del " + año);
  for (i = 1; i < 11; i++) {
    console.log("Producto " + i + ": $ " + (Math.random() * i * 100).toFixed(2));
    {
      let div = document.createElement("div");
      div.innerHTML = "<p> Producto : " + i + " $ " + (Math.random() * i * 100).toFixed(2) + "</p>";
      let ubicacion = document.getElementById("resultadoTarjeta");
      ubicacion.appendChild(div);
    }
  }
  console.log("La fecha de cierre es el dia 3 ");
  return (document.getElementById("tarjeta").innerHTML = "ya revisó sus gastos del mes");
};

const openModalTarjeta = document.getElementById("resumen");
const modal4 = document.querySelector(".modal4");
const closeModal4 = document.querySelector(".close4");

openModalTarjeta.addEventListener("click", (e) => {
  e.preventDefault();
  modal4.classList.add("modal--show");
});

closeModal4.addEventListener("click", (e) => {
  e.preventDefault();
  modal4.classList.remove("modal--show");
});


//Seguros
const seguros = user.seguros
//Utilizo push para agregar un Elemento al Array

seguros.push({ tipo: "viajero", estado: "inactivo", costo: 1600 });

//Muestro por consola el objeto y el detalle de todos los elementos del array, tambien la cantidad total de elementos del array con .lenght

document.getElementById("seguros").onclick = function segur() {
  seguros.forEach((item) => {
    console.log(item.tipo);
    console.log(item.costo);
    console.log(item.estado);
  });
  console.log("usted posee " + seguros.length + " seguros");
  //Creo un nuevo array utilizando .filter y muestro por consola los seguros inactivos

  let segurosInactivos = seguros.filter((seguros) => seguros.estado === "inactivo");
  segurosInactivos.forEach((item) => console.log("Tienes el seguro de " + item.tipo + " inactivo"));

  //indico con alert la cantidad de seguros inactivos

  alert("usted tiene " + segurosInactivos.length + " seguro/s inactivo/s");

  //creo un nuevo array utilizando .filter y muestro por consola los seguros activos

  let segurosActivos = seguros.filter((seguros) => seguros.estado === "activo");
  segurosActivos.forEach((item) => console.log("Tienes el seguro de " + item.tipo + " activo"));
};


//Sistema de Puntos
let contenedor = document.getElementById("conteiner");
let div = document.createElement("div");
div.innerHTML = `<p>Sistema de Puntos</p>
<button class= "canjes button " id="canjes">Click</button>`;
document.body.append(div);
contenedor.append(div);

const openModalPuntos = document.querySelector(".canjes");
const modal3 = document.querySelector(".modal3");
const closeModal3 = document.querySelector(".close3");

openModalPuntos.addEventListener("click", (e) => {
  e.preventDefault();
  modal3.classList.add("modal--show");
});

closeModal3.addEventListener("click", (e) => {
  e.preventDefault();
  modal3.classList.remove("modal--show");
});

//Creo un Array con elementos para canjear por puntos

let canjes = [
  { id: 1, nombre: "Set de Toallas", puntos: 800 },
  { id: 2, nombre: "Set de Cubiertos", puntos: 650 },
  { id: 3, nombre: "Taza", puntos: 500 },
  { id: 4, nombre: "Lapicera", puntos: 150 },
];

//La idea es hacerlo en un HTML Aparte para el proyecto final como si fuera un carro de compras
//Utilizo la funcion agregar para ingresar los items al localStorage "Billetera"

const agregar = (id) => {
  let billeteraStorage = JSON.parse(localStorage.getItem("billetera"));
  let objeto = canjes.find((item) => item.id === id);

  if (billeteraStorage) {
    let nuevaBilletera = billeteraStorage;
    nuevaBilletera.push(objeto);
    localStorage.setItem("billetera", JSON.stringify(nuevaBilletera));
  } else {
    let billetera = [objeto];

    localStorage.setItem("billetera", JSON.stringify(billetera));
  }
};

//Utilizo un ForEach para listar todos los productos mostrandolos como elementos dentro del Modal (Que a su vez tb esta creado desde JavaScript en la linea 233)

let simularCanje = document.getElementById("canjear");
simularCanje.addEventListener("click", () =>
  canjes.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
      <p>Id: ${item.id} - ${item.nombre}</p>
      <b>${item.puntos} puntos</b>
      <button id="boton${item.id}">Canjear</button>
      <br>
      <br>`;
    //ubico los divs
    let ubicacion = document.getElementById("zz2");
    ubicacion.appendChild(div);

    //Diferencio el boton con el n de Id del item
    let boton = document.getElementById(`boton${item.id}`);
    boton.addEventListener("click", () => agregar(item.id));
  })
);

//creo una funcion para limpiar el localStorage

const vaciar = document.getElementById("vaciar");
vaciar.addEventListener("click", () => localStorage.clear("billetera"));
