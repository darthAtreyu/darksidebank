
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
const puntos = user.puntos;

const actualizarPuntos = () => {

 Swal.fire({
      icon: "success",
      title:"Sistema de Puntos",
      text: "Usted tiene " + user.puntos + " acumulados",
      timer: 5000,
    });
};

let revisarPuntaje = document.getElementById("billetera");
revisarPuntaje.addEventListener("click", () => actualizarPuntos());

//LogIn
function logIn() {
  let user = document.getElementById("usuario").value;
  let pass = document.getElementById("clave").value;
  const logContainer = document.querySelector(".container_logIn");
  const cuerpo = document.getElementById("cuerpo");
  const mostrarBille = document.getElementById("billetera");

  if (user === usuario && pass == password) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
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
    mostrarBille.classList.remove("invisible");
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
    user.puntos = user.puntos + 100;
    actualizarPuntos();
    Swal.fire({
      icon: "success",
      title:
        "Su Plazo fijo de $" + monto + " ha sido constituido. Generando un interes de $" + interes.toFixed(2) + ".",
      text: "Le han quedado $" + user.cajaDeAhorro + " en su Caja de Ahorros",
      timer: 5000,
    });
    console.log(user.cajaDeAhorro);
    console.log(user);
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ingrese un monto y Plazo válidos!",
      timer: 3000,
    });
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
  let ubicacion = document.getElementById("resultadoTarjeta");
  for (i = 1; i < 11; i++) {
    console.log("Producto " + i + ": $ " + (Math.random() * i * 100).toFixed(2));
    {
      let div = document.createElement("div");
      div.innerHTML = "<p> Producto : " + i + " $ " + (Math.random() * i * 100).toFixed(2) + "</p>";
            ubicacion.appendChild(div);
    }
  }
  console.log("La fecha de cierre es el dia 3 ");
  user.puntos = user.puntos + 100;
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
const seguros = user.seguros;
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
  Swal.fire({
    title: "usted tiene " + segurosInactivos.length + " seguro/s inactivo/s",
    text: "Desea Activarlos?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Seguros Impagos!", "una vez abonado reintentelo", "error");
      user.puntos = user.puntos + 100;
    }
  });
  // alert("usted tiene " + segurosInactivos.length + " seguro/s inactivo/s");

  //creo un nuevo array utilizando .filter y muestro por consola los seguros activos

  let segurosActivos = seguros.filter((seguros) => seguros.estado === "activo");
  segurosActivos.forEach((item) => console.log("Tienes el seguro de " + item.tipo + " activo"));
};

//Sistema de Puntos
let contenedor = document.getElementById("conteiner");
let div = document.createElement("div");
div.innerHTML = `<p>Sistema de Puntos</p>
<a href="#" class="button" id="canjear">Articulos Disponibles</a>
<p id="zz2"></p>
<a href="#" class="button" id="vaciar">Vaciar</a>
<br>
<a href="#" class="button" id="Canasto">Ver Canasto</a>`;
document.body.append(div);
contenedor.append(div);

// const openModalPuntos = document.querySelector(".canjes");
// const modal3 = document.querySelector(".modal3");
// const closeModal3 = document.querySelector(".close3");

// openModalPuntos.addEventListener("click", (e) => {
//   e.preventDefault();
//   modal3.classList.add("modal--show");
// });

// closeModal3.addEventListener("click", (e) => {
//   e.preventDefault();
//   modal3.classList.remove("modal--show");
// });

//Creo un Array con elementos para canjear por puntos

let canjes = [
  { id: 1, nombre: "Set de Toallas", puntos: 800, cantidad: 0 },
  { id: 2, nombre: "Set de Cubiertos", puntos: 650, cantidad: 0 },
  { id: 3, nombre: "Taza", puntos: 500, cantidad: 0 },
  { id: 4, nombre: "Lapicera", puntos: 150, cantidad: 0 },
];

//La idea es hacerlo en un HTML Aparte para el proyecto final como si fuera un carro de compras
//Utilizo la funcion agregar para ingresar los items al localStorage "Billetera"

const agregar = (id) => {
  let billeteraStorage = JSON.parse(localStorage.getItem("Canasto"));
  let objeto = canjes.find((item) => item.id === id);

  if (billeteraStorage) {
    let nuevaBilletera = billeteraStorage;

    nuevaBilletera.push(objeto);
    localStorage.setItem("Canasto", JSON.stringify(nuevaBilletera));

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
      title: objeto.nombre + " Agregado",
    });
  } else {
    let billetera = [objeto];

    localStorage.setItem("Canasto", JSON.stringify(billetera));
  }
};

//Utilizo un ForEach para listar todos los productos mostrandolos como elementos dentro del Modal (Que a su vez tb esta creado desde JavaScript en la linea 233)

let simularCanje = document.getElementById("canjear");
simularCanje.addEventListener("click", () =>
  canjes.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
      <p>Id: ${item.id} - ${item.nombre}</p>
      <b>${item.puntos} puntos</b> <br>
      <button class="button2" id="botonA${item.id}">Canjear</button>
      <br>`;
    //ubico los divs
    let ubicacion = document.getElementById("zz2");
    ubicacion.appendChild(div);

    //Diferencio el boton con el n de Id del item
    let botonA = document.getElementById(`botonA${item.id}`);
    botonA.addEventListener("click", () => agregar(item.id));
  })
);

//creo una funcion para limpiar el localStorage

const vaciar = document.getElementById("vaciar");
vaciar.addEventListener(
  "click",
  () =>
    localStorage.clear("Canasto") -
    (user.puntos = user.puntos + 100) -
    Swal.fire({
      icon: "success",
      title: "Productos eliminados",
      text: "se ha vaciado el canasto!",
    })
);

let canasto = document.getElementById("Canasto");
canasto.addEventListener("click", () => 
console.log(localStorage.getItem("Canasto", canjes)),

);

//Pago de Servicios

const openModalServicios = document.getElementById("serv");
const modal1 = document.querySelector(".modal1");
const closeModal1 = document.querySelector(".close1");

openModalServicios.addEventListener("click", (e) => {
  e.preventDefault();
  modal1.classList.add("modal--show");
});

closeModal1.addEventListener("click", (e) => {
  e.preventDefault();
  modal1.classList.remove("modal--show");
});

let facturas = document.getElementById("facturas");

const traerDatos = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();

  data.forEach((impuestos) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="containerImpuestos">
          <h2 class="tituloImpuestos">${impuestos.servicio}</h2>
          <p class="cuerpoImpuestos">$${impuestos.saldo}</p>
          </div>
        `;

    facturas.append(div);
  });
};

traerDatos();

document.getElementById("pagar").onclick = async function servicios() {
  const inputOptions = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        1: "Agua",
        2: "Luz",
        3: "Gas",
        4: "Internet",
        5: "Otros",
      });
    }, 1000);
  });

  const { value: factura } = await Swal.fire({
    title: "Elija el Servicio que desea pagar",
    input: "radio",
    inputOptions: inputOptions,
    inputValidator: (value) => {
      if (!value) {
        return "Elije una Factura!";
      }
    },
  });

  if (factura) {
    servicio = factura;
  }

  // prompt("Que servicio quiere abonar?:\n 1: Agua \n 2: Luz \n 3: Gas \n 4: Internet \n 5: Otro");
  switch (servicio) {
    case "1":
      Swal.fire({
        title: "Quiere abonar su Factura de Agua?",
        text: "el saldo es de 1130",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "si, Realizar Pago!",
      }).then((result) => {
        if (result.isConfirmed) {
          user.cajaDeAhorro = user.cajaDeAhorro - 1130;
          console.log(user.cajaDeAhorro);
          user.puntos = user.puntos + 100;
          Swal.fire("Listo!", "Pago Realizado, le queda en su cuenta $" + user.cajaDeAhorro, "success");
        }
      });
      break;
    case "2":
      Swal.fire({
        title: "Quiere abonar su Factura de Luz?",
        text: "el saldo es de 4268",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "si, Realizar Pago!",
      }).then((result) => {
        if (result.isConfirmed) {
          user.cajaDeAhorro = user.cajaDeAhorro - 4268;
          console.log(user.cajaDeAhorro);
          user.puntos = user.puntos + 100;
          Swal.fire("Listo!", "Pago Realizado, le queda en su cuenta $" + user.cajaDeAhorro, "success");
        }
      });
      break;
    // let luz = confirm("Su factura de Luz es de $4268 \n Realizar el pago?");
    // if (luz == true) {
    //   alert("se realizo el pago con exito");
    // } else {
    //   alert("No se realizo el pago");
    // }
    // break;
    case "3":
      Swal.fire({
        title: "Quiere abonar su Factura de Gas?",
        text: "el saldo es de 2350",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "si, Realizar Pago!",
      }).then((result) => {
        if (result.isConfirmed) {
          user.cajaDeAhorro = user.cajaDeAhorro - 2350;
          console.log(user.cajaDeAhorro);
          user.puntos = user.puntos + 100;
          Swal.fire("Listo!", "Pago Realizado, le queda en su cuenta $" + user.cajaDeAhorro, "success");
        }
      });
      break;
    // let gas = confirm("Su factura de Gas es de $2350 \n Realizar el pago?");
    // if (gas == true) {
    //   alert("se realizo el pago con exito");
    // } else {
    //   alert("No se realizo el pago");
    // }
    // break;
    case "4":
      Swal.fire({
        title: "Quiere abonar su Factura de Internet?",
        text: "el saldo es de 9550",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "si, Realizar Pago!",
      }).then((result) => {
        if (result.isConfirmed) {
          user.cajaDeAhorro = user.cajaDeAhorro - 9550;
          console.log(user.cajaDeAhorro);
          user.puntos = user.puntos + 100;
          Swal.fire("Listo!", "Pago Realizado, le queda en su cuenta $" + user.cajaDeAhorro, "success");
        }
      });
      break;
    // let internet = confirm("Su factura de Internet es de $6550 \n Realizar el pago?");
    // if (internet == true) {
    //   alert("se realizo el pago con exito");
    // } else {
    //   alert("No se realizo el pago");
    // }
    // break;
    default:
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El sistema no funciona correctamente, vuelva a intentarlo en unos momentos!",
      });
      user.puntos = user.puntos + 100;
      // alert("El sistema no funciona correctamente, vuelva a intentarlo en unos momentos");
      break;
  }
};
