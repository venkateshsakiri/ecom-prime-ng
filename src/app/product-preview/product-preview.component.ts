import { Component, OnInit } from '@angular/core';
import { AppBreadcrumbService } from '../app.breadcrumb.service';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {

  constructor(public breadcrumbService:AppBreadcrumbService) {
    this.breadcrumbService.setItems([
      { label: "E-Commerce" },
      {
          label: "Product List",
          routerLink: ["/dashboard/ecommerce/product-list"],
      },
      {
          label: "Product preview",
          routerLink: ["/dashboard/ecommerce/product-preview"],
      },
  ]);
  }

  ngOnInit(): void {
  }

}
