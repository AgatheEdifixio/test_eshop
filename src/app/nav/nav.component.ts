import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() cartLenght: number | undefined;

  cartLegnth: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  redirect(route: string) {
    this.router.navigate([route]);
  }
}
