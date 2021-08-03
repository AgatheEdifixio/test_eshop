import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Products } from '../Products';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private productService :ProductService
  ) { }

  cartLegnth : any; 
  cart: Products[] = [];
  cart2: [] = []; 

  // dans le ngoninit du l'app.comp ? 
  //demander bonne pratique : faire le get length dans service ou dans le oninit de la nav ? 
  ngOnInit(): void {
    //faire une async
    this.getLengthCart()
  }

  async getLengthCart(){
    let a = await this.productService.getCart2();
this.cartLegnth = a;
    console.log("a", a);


    //this.cartLegnth = a.length;
  }

  //faire un eveent Emmiter pour envoyer data en direct cart + 1 ...;

}
