import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { RootScopeData } from './rootScope/rootScopeData';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{

    topbarTheme = 'light';

    menuTheme = 'dim';

    layoutMode = 'light';

    menuMode = 'static';

    isRTL = false;

    inputStyle = 'outlined';

    ripple: boolean;

    constructor(private primengConfig: PrimeNGConfig,public router:Router) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
        window.addEventListener('remoteButtonClick', (event: any) => {
            console.log('Event Received:', event.detail);
           this.router.navigate(['/login']);
          });

          setTimeout(()=>{
            if(!RootScopeData.userInfo){
                this.router.navigate(['/mfe1']); 
            }
          },100)
    }

   
}
