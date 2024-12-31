import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppBreadcrumbService } from '../app.breadcrumb.service';

@Component({
  selector: 'app-check-out-form',
  templateUrl: './check-out-form.component.html',
  styleUrls: ['./check-out-form.component.scss']
})
export class CheckOutFormComponent implements OnInit {

  constructor(public router:Router,public breadcrumbService:AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: "E-Commerce" },
      {
          label: "Shopping Cart",
          routerLink: ["/dashboard/ecommerce/cart"],
      },
      {
        label: "Check Out",
        routerLink: ["/dashboard/ecommerce/check-out"],
    }
  ]);
   }

  ngOnInit(): void {
  }

  public goToCart(){
    this.router.navigate(['/dashboard/ecommerce/cart']);
  }

}
