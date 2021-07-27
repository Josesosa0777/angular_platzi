import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Varibales privadas:
  private products: Product[] = []
  private cart = new BehaviorSubject<Product[]>([]); // el Behavior es de tipo array de productos y se inicializa en array vacio
  // Variable pública:
  cart$ = this.cart.asObservable();
  
  constructor() { }
  addCart(product: Product) {
    // cada vez que se agregue un producto, que se añada ese último producto a la lista:
    this.products = [...this.products, product];
    // debo notificar a los componentes subscritos que hubo un cambio, que se agregó un nuevo producto al carrito:
    this.cart.next(this.products);
  }
}
