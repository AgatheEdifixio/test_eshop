import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Products } from '../Products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  //productsFromAPI: Products[] = [];
  products: [] | any;

  idOfProducts: any[] | any;
  currentlocalStorage: any[] = [];

  cartLenght: number | undefined;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = [];
    this.getCart();
    this.getLengtCart();
  }

  getCart() {
    this.productService.getProducts().subscribe
      (
        (response) => {
        //  this.productsFromAPI = response;

          this.idOfProducts = JSON.parse(localStorage.getItem("listIdProducts") || '{}');

          //loop to iterate the array of products ID retrieved from local storage 
          //and find matching ID of products from db 
          for (var i = 0, len = this.idOfProducts.length; i < len; i++) {
            const product = response.find(el => el.id == this.idOfProducts[i]);
            if (product != undefined) {
              this.products.push(product);
            }
          }
          if (this.idOfProducts.length == undefined || this.idOfProducts.length == 0) {
            this.cartLenght = 0
          }
        },
        (error) => {
          console.log("error " + error);
        }
      )
  }

  onDelete(index: number, id: string) {
    this.idOfProducts.splice(index, 1);
    const newLocalStorage = this.idOfProducts;

    localStorage.removeItem("listIdProducts");
    localStorage.setItem('listIdProducts', JSON.stringify(newLocalStorage));

    this.cartLenght = newLocalStorage.length;
    const indexDeleteProduct = this.products.findIndex((el: any) => el.id == id);
    this.products.splice(indexDeleteProduct, 1);
 }

  getLengtCart() {
    this.currentlocalStorage = JSON.parse(localStorage.getItem("listIdProducts") || '{}');
    this.cartLenght = this.currentlocalStorage.length;
  }
}
