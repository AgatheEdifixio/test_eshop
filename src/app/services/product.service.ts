import { Products } from './../Products';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }) 
};



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient) { }

  url : string = "http://localhost:3000/products";
  cartUrl : string = "http://localhost:3000/cart";

  postData = {
    test: 'my content'
  }

  productToAddToCart: Products | any
  //retrieves all products form db
  // récupérer un array de product => declarer dans les chevrons 
 

  //retrieves all products form db
  // récupérer un array de product => declarer dans les chevrons 
  getProducts(): Observable<Products[]>{
    return this.http.get<Products[]>("http://localhost:3000/products")
  }

  getCart(): Observable<Products[]>{
    return this.http.get<Products[]>("http://localhost:3000/cart")
  }

AddProductxxx(){
this.http.post(this.cartUrl, this.postData).toPromise().then(data => {
  console.log(data);

});
  } 

  //ajouter le produit : doit pouvoir en ajouter autant qu'il veut 
  AddProduct(object : Products){
    console.log("(object", object)
    this.http.post(this.cartUrl, object).toPromise().then(data => {
      console.log(data);
    
    });
      } 


}

