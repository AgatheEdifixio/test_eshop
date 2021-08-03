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

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000/products";
  cartUrl: string = "http://localhost:3000/cart";


  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>("http://localhost:3000/products")
  }

  getCart(): Observable<Products[]> {
    return this.http.get<Products[]>("http://localhost:3000/cart")
  }


  //ajouter le produit : doit pouvoir en ajouter autant qu'il veut 
  addProduct(object: Products) {
    console.log("(object", object)
    this.http.post(this.cartUrl, object).toPromise().then(data => {
      console.log(data);

    });
  }

  //ajouter quantité 
  //message plutot que retorner data 
  //raffréaichir la page a chaque suppression ? ou display message 

  deleteProduct(id: any) {
    console.log("SERVICE ------ deleteProduct()object id = ", id);
    this.http.delete(this.cartUrl + '/' + id).toPromise().then(data => {
      console.log(data);
    });

  }




}

