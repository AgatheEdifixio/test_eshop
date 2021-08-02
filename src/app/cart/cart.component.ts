import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Products } from '../Products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private productService : ProductService) { }

  cart: Products[] = [];

  ngOnInit(): void {
    console.log("ngOninit cart")
    this.productService.getCart().subscribe
    (
      (response)=> 
      {
        this.cart = response;
      },
      (error)=>
      {
        console.log("error " + error );
      }
    )
  }

  remove(){
    console.log("remove()");
  }

}
