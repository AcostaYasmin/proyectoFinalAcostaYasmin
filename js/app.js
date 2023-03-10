const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById ("verCarrito");
const modalContainer = document.getElementById ("modalContainer")


let carrito = [];

productos.forEach ( (product) => {
    let content = document.createElement ("div");
    content.className="card";
    content.innerHTML =  `
    <img src= "${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio}</p>
    ` ;

shopContent.append (content);

let comprar = document.createElement ("button")
comprar.innerText = "comprar";
comprar.className = "comprar";

content.append(comprar);

comprar.addEventListener ("click", () => {
    carrito.push({
        id: product.id,
        img: product.img,
        nombre: product.nombre,
        precio: product.precio,
    });
    console.log (carrito);
} )
});

verCarrito.addEventListener ("click", () => { 
    modalContainer.innerHTML = " ";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement ("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML =   `
    <h3 class= "modal-header-title"> Carrito </h3> 
    `;
modalContainer.append (modalHeader);

const modalbutton = document.createElement ("h1");
modalbutton.innerText = "X";
modalbutton.className = "moda-header-button";

modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";
} )

modalHeader.append (modalbutton);


carrito.forEach ((product) => { 

    let carrito = document.createElement ("div")
carrito.className = "modal-content"
carrito.innerHTML =  `
<img src="${product.img}">
<h3>${product.nombre}</h3>
<p>${produc.precio} $ </p>
    `;
    modalContainer.append(carritoContent)
    })

    const total = carrito.reduce((acc,el) => acc + el.precio,0);

    const totalBuying = document.createElement ("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `total a pagar : ${total} $`;
    modalContainer.append (totalBuying);
})