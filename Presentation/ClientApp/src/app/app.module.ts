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
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AngularFireStorageModule, BUCKET} from '@angular/fire/storage';
import { ProductsModule } from './products/products.module';
import { ProductsRoutingModule } from './products/products-routing.module';



@NgModule({
  declarations: [
    AppComponent,
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
    AngularFireStorageModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    ProductsModule,
    ProductsRoutingModule,
  ],
  providers: [
    { provide: BUCKET, useValue: 'gs://frigorifico-web.appspot.com' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
