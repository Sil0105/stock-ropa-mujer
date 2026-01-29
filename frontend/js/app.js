// ===============================
// VARIABLES PRINCIPALES
// ===============================
const getToken = () => localStorage.getItem("token");

// Contenedor donde se muestran las prendas
const contenedor = document.getElementById("productos");

// Select para filtrar por talle
const filtroTalle = document.getElementById("filtroTalle");

// Formulario para agregar ropa
const form = document.getElementById("ropaForm");

// URL base del backend
const API_URL = "/api/ropa";

// Modo administrador (true = admin, false = cliente)
const esAdmin = true;

// ===============================
// VALIDACIÓN DE TALLES PERMITIDOS
// ===============================

// Lista de talles válidos que acepta la tienda
// 👉 Si mañana querés agregar uno nuevo, lo sumás acá
const TALLES_VALIDOS = ["XS", "S", "M", "L", "XL"];

// ===============================
// OBTENER ROPA DESDE EL BACKEND
// ===============================

// Función asincrónica para traer la ropa desde la API
const obtenerRopa = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

// ===============================
// MOSTRAR ROPA EN PANTALLA
// ===============================

const mostrarRopa = (ropa) => {
  contenedor.innerHTML = "";

  ropa.forEach(prenda => {
    const card = document.createElement("div");
    card.className = "card";

    // Control de stock
    let stockHTML = "";

    if (prenda.stock === 0) {
      stockHTML = `<p class="sin-stock">Sin stock</p>`;
    } else if (prenda.stock <= 3) {
      stockHTML = `<p class="stock-bajo">⚠ Stock bajo (${prenda.stock})</p>`;
    } else {
      stockHTML = `<p>Stock: ${prenda.stock}</p>`;
    }

    card.innerHTML = `
      <img src="./img/placeholder.jpg">
      <h3>${prenda.tipo}</h3>
      <p>Talle: ${prenda.talle}</p>
      <p>Precio: $${prenda.precio}</p>
      ${stockHTML}
      ${
        esAdmin
          ? `<button onclick="eliminarPrenda(${prenda.id})">Eliminar</button>`
          : ""
      }
    `;

    contenedor.appendChild(card);
  });
};

// ===============================
// ELIMINAR PRENDA (ADMIN)
// ===============================

const eliminarPrenda = async (id) => {
  const token=getToken();

  if(!token){
    alert("Se necesita token de administrador");
    return
  }

  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers:{
      "Authorization": localStorage.getItem("token")
    }
  });

  const ropa = await obtenerRopa();
  mostrarRopa(ropa);
};

// ===============================
// FILTRO POR TALLE
// ===============================

filtroTalle.addEventListener("change", async () => {
  const ropa = await obtenerRopa();
  const talle = filtroTalle.value;

  const filtrada = talle
    ? ropa.filter(r => r.talle === talle)
    : ropa;

  mostrarRopa(filtrada);
});

// ===============================
// FORMULARIO AGREGAR ROPA (ADMIN)
// ===============================

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Obtenemos el talle ingresado y lo pasamos a mayúscula
  // 👉 Esto evita errores como "m" o "l"
  const talleIngresado = document.getElementById("talle").value.toUpperCase();

  // VALIDACIÓN DE TALLE
  // Si el talle no está en la lista, frenamos el envío
  if (!TALLES_VALIDOS.includes(talleIngresado)) {
    alert(
      "Talle inválido. Los talles permitidos son: " +
      TALLES_VALIDOS.join(", ")
    );
    return; // corta la ejecución
  }

  // Creamos el objeto solo si pasó la validación
  const nuevaRopa = {
    tipo: document.getElementById("tipo").value,
    talle: talleIngresado, // usamos el talle validado
    color: document.getElementById("color").value,
    precio: Number(document.getElementById("precio").value),
    stock: Number(document.getElementById("stock").value)
  };

  // Enviamos la prenda al backend
  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(nuevaRopa)
  });

  form.reset();

  const ropa = await obtenerRopa();
  mostrarRopa(ropa);
});

// ===============================
// INICIO DE LA APLICACIÓN
// ===============================

obtenerRopa().then(mostrarRopa);





/*// Llamada a la API del backend
fetch('/api/ropa')
  .then(response => response.json())
  .then(data => {
    const contenedor = document.getElementById('productos');

    // Recorremos cada prenda
    data.forEach(prenda => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img src="${prenda.imagen || 'https://via.placeholder.com/250'}">
        <h3>${prenda.tipo}</h3>
        <p>Talle: ${prenda.talle}</p>
        <p>Color: ${prenda.color}</p>
        <p class="price">$${prenda.precio}</p>
        <p>Stock: ${prenda.stock}</p>
      `;

      contenedor.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error al cargar productos:", error);
  });
*/