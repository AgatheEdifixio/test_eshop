import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Products } from '../Products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private productService: ProductService) { }
  products: Products[] = [];
  cartLenght: number | any;

  idOfProducts: any[] | any;
  hello: [] | any;

  ngOnInit(): void {
    this.hello = [];
    this.getCart();
  }

  getCart() {
    this.productService.getProducts().subscribe
      (
        (response) => {
          this.products = response;

          this.idOfProducts = JSON.parse(localStorage.getItem("listIdProducts") || '{}');

          //loop to iterate the array of products ID retrieved from local storage 
          //and find matching ID of products from db 
          for (var i = 0, len = this.idOfProducts.length; i < len; i++) {
            const product = this.products.find(el => el.id == this.idOfProducts[i]);
            if (product != undefined) {
              this.hello.push(product);
            }
          }
          // IL FAUDRA surrmenet faire un event emiter pour metre dans plus dynamique 
          if (this.idOfProducts.length == undefined || this.idOfProducts.length == 0) {
            this.cartLenght = 0
          }
        },
        (error) => {
          console.log("error " + error);
        }
      )
  }

  onDelete(i: number) {
    delete this.idOfProducts[i];
    var newLocalStorage = this.idOfProducts.filter(function (el: any) {
      return el != null;
    });

    localStorage.removeItem("listIdProducts");
    localStorage.setItem('listIdProducts', JSON.stringify(newLocalStorage));
  }
}
