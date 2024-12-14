import {Component} from '@angular/core';
import {AppComponent} from './app.component';
import {AppMainComponent} from './app.main.component';
import { RootScopeData } from './rootScope/rootScopeData';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {
    userInfo:any;
    constructor(public appMain: AppMainComponent, public app: AppComponent) {
        this.userInfo = RootScopeData.userInfo;
    }

}
