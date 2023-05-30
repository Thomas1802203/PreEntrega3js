let usuario;
let usuariostorage = sessionStorage.getItem("usuario");

if (usuariostorage) {
    usuario = usuariostorage;
    alert(`Bienvenido nuevamente ${usuario}`);
} else{
    let nombre = prompt("Ingrese su nombre");
    sessionStorage.setItem("usuario",nombre);
    alert(`Bienvenido eres nuevo ${nombre}`);
}

let respuesta = prompt("¿Tienes 18 años o mas?");

if(respuesta === "si"){
    alert("Puedes comprar en esta paginga")
}else{
    alert("No puedes comprar en esta pagina")
}
const productos = [
    {id: 1, nombre:"campari", precio: 1500},
    {id: 2, nombre:"fernet", precio:2100},
]

let products = prompt("¿Que producto esta buscando?")
const encontrado = productos.find(item => item.nombre === products);
 

if(encontrado){
    let mensaje = `
    Id: ${encontrado.id}
    Nombre: ${encontrado.nombre}
    Precio: ${encontrado.precio}
    `;
    alert (mensaje);
}else{
    alert("Producto no encontrado");
}

let numeroUno = parseFloat(prompt("Ingrese el precio que desea pagar"))
let numeroDos = parseFloat(prompt("si desea otro producto adicione otro precio"))
alert("El total es de")
alert(numeroUno + numeroDos)

const operaciones = (operacion) => {
    if (operacion === "sumar") {
        return (x , y) => x + y;
    }
}
const sumar = operaciones("sumar");
console.log(sumar(1500,2100));

const producto = {
    nombre: "campari",
    precio: "$1500",
}
console.log(producto.nombre);
console.log(producto.precio);

const producto1 = {
    nombre : "Fernet",
    precio : "$2100",
}
console.log(producto1.nombre);
console.log(producto1.precio);

localStorage.setItem("productos",JSON.stringify(productos));

let titulo = document.getElementById("titulo")
console.log(titulo.innerHTML);


let div = document.getElementById("precio1");
console.log(div.innerHTML);

let prc = document.getElementById("precio2");
console.log(prc.innerHTML);

let boton = document.getElementById("boton");
const resp = () =>{
    console.log("Agregado al carrito");
}
boton.addEventListener("click", resp);

let btn = document.getElementById("btn");
const rep = () =>{
    console.log("Agregado al carrito");
}
btn.addEventListener("click", rep);