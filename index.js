

function piramide(valor){
    for(let i=1; i <= valor; i++){
        let cadenaNumero = "";
        for(let y=1; y <= i; y++){
           cadenaNumero += y;
            document.write(y) //nuestra en HTML
            
        }
        document.write("<br/>") ////nuestra en HTML salto de linea
        console.log(cadenaNumero) //muestra en cosola

        }
    
}

function elementosQueCoinciden(array1, array2) {
    // creamos un array vacío para guardar los elementos comunes
    const resultado = [];
  
    // recorremos los elementos del primer array
    for (let i = 0; i < array1.length; i++) { 
      // si el elemento está  en el segundo array y no está en el resultado, lo agregamos
      if (array2.includes(array1[i]) && !resultado.includes(array1[i])) {
        resultado.push(array1[i]);
      }
    }
    document.write("<br/><h1>Array 1</><br/>")
    document.write(array1)
    document.write("<h1>Array 2</><br/>")
    document.write(array2)
    document.write("<h1>Array 2</><br/>")
    document.write(resultado)
    
  }

  class Carrito {
    constructor() {
      this.montoTotal = 0;
      this.productos = [];
    }
  
    agregarProducto(nombre, precio, unidades = 1) {
      const productoExistente = this.productos.find(
        (producto) => producto.nombre === nombre
      );
  
      if (productoExistente) {
        productoExistente.unidades += unidades;
        console.log(`Ya existe ${productoExistente.nombre} con ${productoExistente.unidades} unidades.`);
      } else {
        const nuevoProducto = new Producto(nombre, precio, unidades);
        this.productos.push(nuevoProducto);
        this.montoTotal += nuevoProducto.subtotal;
      }
    }
  
    quitarProducto(producto) {
      const index = this.productos.indexOf(producto);
      if (index !== -1) {
        this.montoTotal -= producto.subtotal;
        this.productos.splice(index, 1);
      }
    }
  }
  
  class Producto {
    constructor(nombre, precio, unidades = 1) {
      this.nombre = nombre;
      this.precio = precio;
      this.unidades = unidades;
    }
  
    get subtotal() {
      return this.precio * this.unidades;
    }
  }
  
  piramide(6);
  piramide(3);
  elementosQueCoinciden(['rojo', 'azul', 'amarillo'], ['blanco', 'negro', 'rojo'])
  elementosQueCoinciden([4, 3, true, 'manzana'], ['pera', 3, false, true, 3, true])

    const carrito = new Carrito();
carrito.agregarProducto("Leche", 10);
carrito.agregarProducto("Azucar", 5);
carrito.agregarProducto("Leche", 10,2);
console.log(carrito.productos);
console.log(carrito.montoTotal);
