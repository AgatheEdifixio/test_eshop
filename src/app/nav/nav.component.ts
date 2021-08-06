import { ProductService } from './../services/product.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Products } from '../Products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() myFirstInputParameter: string | any;
  @Input() cartLenght: number | undefined;

  cartLegnth: any;

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  redirect(route: string) {
    this.router.navigate([route]);
  }
}
