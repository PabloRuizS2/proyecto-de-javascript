//Creo la clase de objeto producto como base para cargar los productos 
class Producto {
    constructor(nombre, id, precio, color, stock) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.color = color;
        this.stock = stock;
    }
    vender(cantidad) {
        this.stock = this.stock - cantidad;
    }
}


//Inicializo arrays para las categorias de los productos
const perifericos = [];
const componentes = [];
const notebooks = [];

//Cargo el stock de productos segun su categoria
//perifericos
perifericos.push(new Producto("mouse razer", 1, 4000, "Negro", 30));
perifericos.push(new Producto("auriculares logitech", 2, 7400, "Blanco", 10));
perifericos.push(new Producto("teclado corsair", 3, 9000, "negro", 20));
perifericos.push(new Producto("auricular hyperx", 4, 11000, "rojo", 15));
//componentes
componentes.push(new Producto("procesador ryzen5", 5, 50000, "Negro", 20));
componentes.push(new Producto("tarjeta grafica 5500", 6, 100000, "Negro", 40));
componentes.push(new Producto("memoria ram 16gb", 7, 7000, "Negro", 40));
//notebooks
notebooks.push(new Producto("notebook asus", 8, 180000, "Negro", 10));
notebooks.push(new Producto("notebook samsung", 9, 130000, "blanca", 10));


//Recorro los arrays para mostrarle los productos al usuario
for (const periferico of perifericos) {
    alert("ID (" + periferico.id + ") - " + periferico.nombre);
}
for (const componente of componentes) {
    alert("ID (" + componente.id + ") - " + componente.nombre);
}
for (const notebook of notebooks) {
    alert("ID (" + notebook.id + ") - " + notebook.nombre);
}

//Funcion para calcular el precio final de la compra
function calcularPrecio(precioProducto, cantidadProducto, costoEnvio) {
    return ((precioProducto * 1.21) * cantidadProducto) + costoEnvio;
}

//Solicito al usuario el ID del producto
let productoSeleccionada = parseInt(prompt("Ingrese el ID de la producto que desea comprar:"));
const perifericoBuscada = perifericos.find(periferico => periferico.id === productoSeleccionada);
const componenteBuscado = componentes.find(componente => componente.id == productoSeleccionada);
const notebookBuscado = notebooks.find(notebook => notebook.id == productoSeleccionada);

//Solicito al usuario la cantidad del producto
let cantidad = parseInt(prompt("Ingrese la cantidad de unidades que quiere comprar del producto seleccionado:"));

//Costo de envio promedio dentro de CABA
const envio = 800;

//Salidas de consola indicando el precio final de la compra segun el producto elegido
if (productoSeleccionada <= 0) {
    alert("Ingresa un ID valido");
} else if (productoSeleccionada <= 4) {
    alert("El precio final de tu compra es: $" + calcularPrecio(perifericoBuscada.precio, cantidad, envio));
    alert("¡Que lo disfrutes!")
    perifericosBuscada.vender(cantidad);
} else if (productoSeleccionada <= 7) {
    alert("El precio final de tu compra es: $" + calcularPrecio(componenteBuscado.precio, cantidad, envio));
    alert("¡Que lo disfrutes!")
    componentesBuscado.vender(cantidad);
} else if (productoSeleccionada <= 9) {
    alert("El precio final de tu compra es: $" + calcularPrecio(notebookBuscado.precio, cantidad, envio));
    alert("¡Que lo disfrutes!")
    notebooksBuscado.vender(cantidad);
} else {
    alert("Ingresa un ID valido");
}







