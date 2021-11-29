import { Component, OnInit } from '@angular/core';
import { Product } from '../../../Models/product.model';
import { ProductService } from '../../../core/services/product/product.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import { AlertDialogComponent } from '../../../@base/alert-dialog/alert-dialog.component';
import { ProductModifyComponent } from 'src/app/product-modify/product-modify.component';
import { SignalRService } from 'src/app/core/services/signal/signal-r.service';



@Component({
  selector: 'app-product-consult',
  templateUrl: './product-consult.component.html',
  styleUrls: ['./product-consult.component.css']
})
export class ProductConsultComponent implements OnInit {

  products: Product[];
  product: Product;
  uploadPercent: Observable<number>;
  downloadURL$: Observable<string>;
  dialogRef: any;
  searchText: string;


  constructor(
    private productService: ProductService,
    private storage: AngularFireStorage,
    public dialog: MatDialog,
    private signalService: SignalRService
    ) {  }

  ngOnInit() {
    this.product =  new Product();
    this.get();
    this.signalR();
  }

  get() {
    this.productService.get().subscribe(p => {
      if (p.length === 0) {
        this.dialog.open(AlertDialogComponent, {
          width: '350px',
          data: { title: 'Resultado Operacion!', message: 'No hay productos registrados!',
                  nameBtnOne: 'Close', nameBtnTwo: 'Aceptar', btnEnable: false}
        });
      } else {
        console.log(p);
      }
      this.products = p;
     });
  }

  signalR() {
    this.signalService.signalReceived.subscribe((product: Product) => {
      this.products.push(product);
    });
  }


  delete(idProduct: string) {

    const dialogRef = this.dialog.open(AlertDialogComponent, {
      width: '250px',
      data: { title: 'Resultado Operacion!', message: '¿Esta seguro de eliminarlo?',
              nameBtnOne: 'Cancelar', nameBtnTwo: 'Aceptar', btnEnable: true}
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.productService.delete(idProduct).subscribe(p => {
          if (p != null) {
             this.dialog.open(AlertDialogComponent, {
              width: '250px',
              data: { title: 'Resultado Operacion!', message: 'Producto Eliminado..!',
                      nameBtnOne: 'Close', nameBtnTwo: 'Aceptar', btnEnable: false}
            });
            this.get();
          }
        });
      }
    });
  }

  modify(p: Product): void {
    this.dialogRef = this.dialog.open(ProductModifyComponent, {
      width: '800px',
      data: { product: p }
    }).afterClosed().subscribe(p => {
      console.log('Despues de actualizar');
      this.get();
    });
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = file.name;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL$ = fileRef.getDownloadURL();
          this.downloadURL$.subscribe(url => {
            this.product.image = url;
          });
        })

     )
    .subscribe();
  }

}
