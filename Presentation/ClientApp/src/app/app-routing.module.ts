import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { SalesComponent } from './sales/sales.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'clients/register', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule)},
  { path: 'clients/consult', loadChildren: () => import('./client-consult/client-consult.module').then(m => m.ClientConsultModule)},
  { path: 'invoice', loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule)},
  {
    path: 'products/register', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'products/consult', loadChildren: () => import('./product-consult/product-consult.module').then(m => m.ProductConsultModule)
  },
  {
    path: 'domiciliary/register', loadChildren: () => import('./domiciliary/domiciliary.module').then(m => m.DomiciliaryModule)
  },
  {
    path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
  },
  { path: 'sales', component: SalesComponent},
  { path: 'users', component: UsersComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'pork-cuts', loadChildren: () => import('./pork-cuts/pork-cuts.module').then(m => m.PorkCutsModule)},
  { path: 'beef-cuts', loadChildren: () => import('./beef-cuts/beef-cuts.module').then(m => m.BeefCutsModule)},
  { path: 'chicken-cuts', loadChildren: () => import('./chicken-cuts/chicken-cuts.module').then(m => m.ChickenCutsModule)},
  { path: '**', component: PageNotFoundComponent},
];




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
