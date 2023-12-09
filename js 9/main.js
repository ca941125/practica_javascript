const productosDeCaro = [
    {
      id: 1,
      nombre: "cama para gato",
      precio: 5000,
      foto: "https://http2.mlstatic.com/D_NQ_NP_2X_856850-MLA54512613734_032023-F.webp",
    },
    {
      id: 2,
      nombre: "cama para gato bebe",
      precio: 7000,
      foto: "https://http2.mlstatic.com/D_NQ_NP_2X_984257-MLA70558295880_072023-F.webp",
    },
    {
      id: 3,
      nombre: "juguetito",
      precio: 300,
      foto: "https://http2.mlstatic.com/D_NQ_NP_2X_666100-MLA52464402275_112022-F.webp",
    },
  ];


productosDeCaro.forEach((producto) => {
    console.log(producto);
    container.innerHTML += `<div class="card">
        <img src="${producto.foto}" alt="" >
        <h2>${producto.nombre}</h2>
        <p>$ ${producto.precio}</p>
      </div>`;
  });