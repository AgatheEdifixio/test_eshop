import { Products } from './../Products';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private productService: ProductService
  ) { }

  // contiendra la reponse API 
  products : Products[] = [];

  //contien un tablaau de products 
  cart: Products[] = [];

  ngOnInit(): void {
    //appeler le service pour le get et récupérer les produits 
    this.productService.getProducts().subscribe
    (
      (response)=> 
      {
        this.products = response;
      },
      (error)=>
      {
        console.log("error " + error );
      }
    )
  }



/*   addToCartwww(id: number) {
    console.log(" addToCart() id", id);
    this.cart.push(this.products[id]);
    console.log("this.products[0]", this.products[id])
  } */

/*   addToCartss(id: number) {
  
    let object = this.products[id]
    console.log(" addToCart() object", object);
    localStorage.setItem('mesObjet', JSON.stringify(object));
    this.cart.push(this.products[id]);

  } */

  addToCart(id: number){
    let object = this.products[id]
    console.log(" a() object", object);

    this.productService.AddProduct(object);
  }

  remove(){
    console.log("remove()");
  }

}
