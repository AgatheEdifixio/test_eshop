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
  cartLenght: number | any;

  ngOnInit(): void {
    console.log("ngOninit cart")
    this.productService.getCart().subscribe
    (
      (response)=> 
      {
        this.cart = response;
        this.cartLenght = response.length;
      },
      (error)=>
      {
        console.log("error " + error );
      }
    )
  }


    //remplacer object par product pour mieux nommer variables
    // éattention c'est pas l'id c'etl'index 
    onDelete(i: number){
     let product = this.cart[i];
      //let id = object.id;
     this.productService.deleteProduct(product.id);
     window.location.reload();
      
    }

}
