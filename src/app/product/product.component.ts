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

  products: Products[] = [];

  listProductid: any[] = [];
  currentlocalStorage: any[] = [];

  ngOnInit(): void {
    this.getProductFromAPI()
    /*     this.productService.getProducts().subscribe
          (
            (response) => {
              this.products = response;
            },
            (error) => {
              console.log("error " + error);
            }
          ) */
  }

  getProductFromAPI() {
    this.productService.getProducts().subscribe
      (
        (response) => {
          this.products = response;
        },
        (error) => {
          console.log("error " + error);
        }
      )
  }

  addToCart(id: number) {
    this.currentlocalStorage = JSON.parse(localStorage.getItem("listIdProducts") || '{}');
    if (this.currentlocalStorage.length > 0) {
      this.listProductid = this.currentlocalStorage;
    }

    this.addToLocalStorage(id)
  }

  addToLocalStorage(id: number) {
    let product = this.products[id]
    let productId = JSON.stringify(product.id);
    this.listProductid.push(productId);
    localStorage.setItem('listIdProducts', JSON.stringify(this.listProductid));
  }

/*   clearLocal() {
    localStorage.clear()
  } */

}
