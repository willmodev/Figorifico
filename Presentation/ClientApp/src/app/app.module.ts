import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './products/products.component';
import { SalesComponent } from './sales/sales.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BeefCutsComponent } from './beef-cuts/beef-cuts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { ClientsModule } from './clients/clients.module';
import { ClientsRoutingModule } from './clients/clients-routing.module';
import { InvoiceModule } from './invoice/invoice.module';
import { InvoiceRoutingModule } from './invoice/invoice-routing.module';
import { CoreModule } from './core/core.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PorkCutsModule } from './pork-cuts/pork-cuts.module';
import { PorkCutsRoutingModule } from './pork-cuts/pork-cuts-routing.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from './../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SalesComponent,
    UsersComponent,
    LoginComponent,
    RegisterComponent,
    BeefCutsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    HomeRoutingModule,
    ClientsModule,
    ClientsRoutingModule,
    InvoiceModule,
    InvoiceRoutingModule,
    CoreModule,
    NoopAnimationsModule,
    PorkCutsModule,
    PorkCutsRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
