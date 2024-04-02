import { Injectable } from '@angular/core';

// Definimos la interfaz para representar un producto
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartServicesService {

  // Array para almacenar los productos del carrito
  private cart: Product[] = [];

  constructor() { }

  // Método para añadir un producto al carrito
 addToCart(product: Product): void {
  this.cart.push(product);
}

// Método para eliminar un producto del carrito por su ID
removeFromCart(productId: number): void {
  this.cart = this.cart.filter(product => product.id !== productId);
}

// Método para obtener todos los productos del carrito
getCart(): Product[] {
  return this.cart;
}

// Método para calcular el precio total de los productos en el carrito
getTotalPrice(): number {
  return this.cart.reduce((total, product) => total + product.price, 0);
}

// Método para vaciar el carrito
clearCart(): void {
  this.cart = [];
} 

}
