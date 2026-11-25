//const precio = 100;
//const cantidad = 3;
//const subtotal = precio * cantidad;
//const iva = subtotal * 0.21;
//const total = subtotal + iva

//console.log(total);

//let stock = 10;

//const valor = stock > 5 ? "disponible" : "agotado";
//console.log(valor);


const precio = 25000;
const compro = 3;
const stock = 5;
const cupon = "VERANO";
let descuento = 0.9;
let cuponaso = 2000;

if (compro > stock) {
  console.log("No hay stock suficiente");
} else {
  let subtotal = precio * compro;

  // Descuento por cantidad
  if (compro >= 3) {
    subtotal = subtotal * descuento;
  }

  // Cupón
  if (cupon === "VERANO") {
    subtotal = subtotal - cuponaso;
  }

  const envio = subtotal >= 50000 ? 0 : 3500; //envio gratis o le cobro
  const total = subtotal + envio;

  console.log(`Subtotal: $${subtotal}`);
  console.log(`Envío: ${envio === 0 ? "gratis" : "$" + envio}`);
  console.log(`Total: $${total}`);
}
