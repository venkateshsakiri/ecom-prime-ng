import { Component, OnInit } from "@angular/core";
import { AppBreadcrumbService } from "../app.breadcrumb.service";
import { ProductService } from "../demo/service/productservice";
import { MessageService } from "primeng/api";

@Component({
    selector: "app-product-list",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.scss"],
    providers:[MessageService]
})
export class ProductListComponent implements OnInit {
    public products: any;
    public isLoadingComplete:boolean = false;
    activeTabIndex: number = 0;

    constructor(
        public breadcrumbService: AppBreadcrumbService,
        public ProductsService: ProductService,
        public messageService:MessageService
    ) {
        this.breadcrumbService.setItems([
            { label: "E-Commerce" },
            {
                label: "Product List",
                routerLink: ["/dashboard/ecommerce/product-list"],
            },
        ]);
    }

    ngOnInit(): void {
      this.getAllProducts();
    }

    public getAllProducts(){
      this.isLoadingComplete = true;
      this.ProductsService.getAllProducts().subscribe((res:any)=>{
        this.isLoadingComplete = false;
        if(res?.code == 200){
          this.messageService.add({severity: 'success', summary: 'Successful', detail: res?.message, life: 3000});
          this.products = res.data;
        }
      },()=>{
        this.isLoadingComplete = false;
      })
    }
    getImageSrc(base64String: string): string {
      if (!base64String) {
          return 'path/to/default/image.jpg'; // Default image if none provided
      }

      if (!base64String.startsWith('data:image')) {
          return 'data:image/jpeg;base64,' + base64String;
      }

      return base64String;
  }
}
