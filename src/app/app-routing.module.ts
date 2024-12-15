import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardDemoComponent} from './demo/view/dashboarddemo.component';
import {FormLayoutDemoComponent} from './demo/view/formlayoutdemo.component';
import {FloatLabelDemoComponent} from './demo/view/floatlabeldemo.component';
import {InvalidStateDemoComponent} from './demo/view/invalidstatedemo.component';
import {PanelsDemoComponent} from './demo/view/panelsdemo.component';
import {OverlaysDemoComponent} from './demo/view/overlaysdemo.component';
import {MediaDemoComponent} from './demo/view/mediademo.component';
import {MessagesDemoComponent} from './demo/view/messagesdemo.component';
import {MiscDemoComponent} from './demo/view/miscdemo.component';
import {EmptyDemoComponent} from './demo/view/emptydemo.component';
import {ChartsDemoComponent} from './demo/view/chartsdemo.component';
import {FileDemoComponent} from './demo/view/filedemo.component';
import {DocumentationComponent} from './demo/view/documentation.component';
import {AppMainComponent} from './app.main.component';
import {AppNotfoundComponent} from './pages/app.notfound.component';
import {AppErrorComponent} from './pages/app.error.component';
import {AppAccessdeniedComponent} from './pages/app.accessdenied.component';
import {AppLoginComponent} from './pages/app.login.component';
import {InputDemoComponent} from './demo/view/inputdemo.component';
import {ButtonDemoComponent} from './demo/view/buttondemo.component';
import {TableDemoComponent} from './demo/view/tabledemo.component';
import {ListDemoComponent} from './demo/view/listdemo.component';
import {TreeDemoComponent} from './demo/view/treedemo.component';
import {IconsComponent} from './utilities/icons.component';
import {AppCrudComponent} from './pages/app.crud.component';
import {AppCalendarComponent} from './pages/app.calendar.component';
import {AppTimelineDemoComponent} from './pages/app.timelinedemo.component';
import {AppInvoiceComponent} from './pages/app.invoice.component';
import {AppHelpComponent} from './pages/app.help.component';
import {BlocksComponent} from './blocks/blocks/blocks.component';
import { QuoteComponent } from './quotes/quote/quote.component';
import { CustomersComponent } from './customers/customers.component';
import { LeadComponent } from './leads/lead/lead.component';
import { JobviewComponent } from './jobs/jobview/jobview.component';
import { CalenderComponent } from './calenders/calender/calender.component';
import { PurchaseComponent } from './purchases/purchase/purchase.component';
import { SupplierComponent } from './suppliers/supplier/supplier.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuardGuard } from './services/auth-guard/auth-guard.guard';
import { EntitlementsComponent } from './entitlements/entitlements.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path:'' , redirectTo:'/login', pathMatch:'full'},
            {path:'login',component:SignupComponent},
            {
                path:'dashboard',component:AppMainComponent, canActivate:[AuthGuardGuard],
                children: [

                    {path: '', component: DashboardDemoComponent, canActivate:[AuthGuardGuard]},
                    {path: 'customer', component: CustomersComponent,canActivate:[AuthGuardGuard]},
                    {path: 'entitlements', component: EntitlementsComponent,canActivate:[AuthGuardGuard]},
                    {path: 'category', component: CategoriesComponent,canActivate:[AuthGuardGuard]},
                    {path: 'lead', component: LeadComponent, canActivate:[AuthGuardGuard]},
                    {path: 'quote', component: QuoteComponent, canActivate:[AuthGuardGuard]},
                    {path: 'job', component: JobviewComponent, canActivate:[AuthGuardGuard]},
                    {path: 'calender', component: CalenderComponent, canActivate:[AuthGuardGuard]},
                    {path: 'purchase', component: PurchaseComponent, canActivate:[AuthGuardGuard]},
                    {path: 'supplier', component: SupplierComponent, canActivate:[AuthGuardGuard]},
                    {path: 'uikit/formlayout', component: FormLayoutDemoComponent},
                    {path: 'uikit/floatlabel', component: FloatLabelDemoComponent},
                    {path: 'uikit/invalidstate', component: InvalidStateDemoComponent},
                    {path: 'uikit/input', component: InputDemoComponent},
                    {path: 'uikit/button', component: ButtonDemoComponent},
                    {path: 'uikit/table', component: TableDemoComponent},
                    {path: 'uikit/list', component: ListDemoComponent},
                    {path: 'uikit/tree', component: TreeDemoComponent},
                    {path: 'uikit/panel', component: PanelsDemoComponent},
                    {path: 'uikit/overlay', component: OverlaysDemoComponent},
                    {path: 'uikit/menu', loadChildren: () => import('./demo/view/menus/menus.module').then(m => m.MenusModule)},
                    {path: 'uikit/media', component: MediaDemoComponent},
                    {path: 'uikit/message', component: MessagesDemoComponent},
                    {path: 'uikit/misc', component: MiscDemoComponent},
                    {path: 'uikit/charts', component: ChartsDemoComponent},
                    {path: 'uikit/file', component: FileDemoComponent},
                    {path: 'utilities/icons', component: IconsComponent},
                    {path: 'pages/crud', component: AppCrudComponent},
                    {path: 'pages/calendar', component: AppCalendarComponent},
                    {path: 'pages/timeline', component: AppTimelineDemoComponent},
                    {path: 'pages/invoice', component: AppInvoiceComponent},
                    {path: 'pages/help', component: AppHelpComponent},
                    {path: 'pages/empty', component: EmptyDemoComponent},
                    {path: 'documentation', component: DocumentationComponent},
                    {path: 'blocks', component: BlocksComponent, canActivate:[AuthGuardGuard]},
                ]
            },
            {path: 'error', component: AppErrorComponent},
            {path: 'access', component: AppAccessdeniedComponent},
            {path: 'notfound', component: AppNotfoundComponent},

            {path: '**', redirectTo: '/notfound'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
