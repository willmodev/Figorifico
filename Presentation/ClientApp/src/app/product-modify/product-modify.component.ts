import { Component, OnInit, Inject } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AlertDialogComponent } from '../@base/alert-dialog/alert-dialog.component';
import { CategoryService } from '../core/services/category/category.service';
import { ProductService } from '../core/services/product/product.service';
import { Category } from '../Models/category.model';
import { DialogModify } from '../Models/DialogModify';


@Component({
  selector: 'app-product-modify',
  templateUrl: './product-modify.component.html',
  styleUrls: ['./product-modify.component.css']
})
export class ProductModifyComponent implements OnInit {
  uploadPercent: Observable<number>;
  downloadURL$: Observable<string>;
  selectImage = true;

  constructor(
    public dialog: MatDialog,
    private productService: ProductService,
    public dialogRef: MatDialogRef<ProductModifyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogModify) { }


  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  modify(): void {
    const product = this.data.product;
    console.log(product);
    this.productService.put(product).subscribe(p => {
       this.dialog.open(AlertDialogComponent, {
          width: '350px',
          data: { title: 'Resultado Operacion!', message: 'Producto Actualizado..!',
          nameBtnOne: 'Close', nameBtnTwo: 'Aceptar', btnEnable: false}
        });
    });

    this.dialogRef.close();
  }

}
