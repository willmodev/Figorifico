import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SalesComponent } from './sales/sales.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
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
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AngularFireStorageModule, BUCKET} from '@angular/fire/storage';
import { ProductsModule } from './products/products.module';
import { ProductsRoutingModule } from './products/products-routing.module';
import { ProductConsultModule } from './product-consult/product-consult.module';
import { ProductConsultRoutingModule } from './product-consult/product-consult-routing.module';
import { AlertDialogComponent } from './@base/alert-dialog/alert-dialog.component';
import { AlertDialogModule } from './@base/alert-dialog.module';
import { ProductModifyComponent } from './product-modify/product-modify.component';
import { ProductModifyModule } from './product-modify/product-modify.module';
import { OrderModule } from './order/order.module';
import { OrderRoutingModule } from './order/order-routing.module';
import { BeefCutsModule } from './beef-cuts/beef-cuts.module';
import { BeefCutsRoutingModule } from './beef-cuts/beef-cuts-routing.module';
import { ChickenCutsModule } from './chicken-cuts/chicken-cuts.module';
import { ChickenCutsRoutingModule } from './chicken-cuts/chicken-cuts-routing.module';
import { ClientConsultModule } from './client-consult/client-consult.module';
import { ClientConsultRoutingModule } from './client-consult/client-consult-routing.module';
import { ClientModifyModule } from './client-modify/client-modify.module';
import { ClientModifyComponent } from './client-modify/components/client-modify/client-modify.component';
import { DomiciliaryModule } from './domiciliary/domiciliary.module';
import { DomiciliaryRoutingModule } from './domiciliary/domiciliary-routing.module';





@NgModule({
  declarations: [
    AppComponent,
    SalesComponent,
    UsersComponent,
    LoginComponent,
    RegisterComponent,
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
    AngularFireStorageModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    ProductsModule,
    ProductsRoutingModule,
    ProductConsultModule,
    ProductConsultRoutingModule,
    AlertDialogModule,
    ProductModifyModule,
    OrderModule,
    OrderRoutingModule,
    BeefCutsModule,
    BeefCutsRoutingModule,
    ChickenCutsModule,
    ChickenCutsRoutingModule,
    ClientConsultModule,
    ClientConsultRoutingModule,
    ClientModifyModule,
    DomiciliaryModule,
    DomiciliaryRoutingModule
  ],
  entryComponents: [AlertDialogComponent, ProductModifyComponent, ClientModifyComponent],
  providers: [
    { provide: BUCKET, useValue: 'gs://frigorifico-web.appspot.com' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
