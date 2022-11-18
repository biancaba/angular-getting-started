import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-card-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css'],
})
export class CartViewComponent implements OnInit {
  items: Product[] = [];

  checkoutForm = this.formBuilder.group({ name: '', address: '' });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(): void {
    // submit name and address
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();

    // clear cart
    this.items = this.cartService.clearItems();
  }
}
