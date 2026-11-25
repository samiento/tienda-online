const IVA = 0.21;

const conIva = (precio) => precio * (1 + IVA);

const productos = [
  { id: 1, nombre: "Zapatillas Urbanas", precio: 25000, stock: 8, categoria: "Calzado" },
  { id: 2, nombre: "Remera Básica", precio: 9000, stock: 20, categoria: "Ropa" },
  { id: 3, nombre: "Mochila", precio: 18000, stock: 0, categoria: "Accesorios" },
  { id: 4, nombre: "Gorra", precio: 6500, stock: 15, categoria: "Accesorios" },
];

const disponibles = productos.filter((p) => p.stock > 0);

disponibles.forEach((p) => {
  console.log(`${p.nombre} - $${conIva(p.precio)} (stock: ${p.stock})`);
});

const accesorios = productos.filter((p) => p.categoria === "Accesorios");
console.log("Accesorios:", accesorios.map((p) => p.nombre));