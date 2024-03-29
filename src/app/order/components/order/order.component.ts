import { Component, OnInit } from '@angular/core';
import { Product } from './../../../core/models/product.model';
import { CartService } from './../../../core/services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  // products: Product[] = [];
  products$: Observable<Product[]>;
  constructor(
    private cartService: CartService
  ) { 
    // observable de array:
    this.products$ = this.cartService.cart$;
  }

  ngOnInit(): void {
  }

}
