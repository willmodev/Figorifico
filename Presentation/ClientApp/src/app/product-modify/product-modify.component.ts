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
  categorys: Category[];
  categorysFilter: Category[] = [];
  types: Category[] = [];
  selectImage = true;

  constructor(
    private categoryService: CategoryService,
    public dialog: MatDialog,
    private productService: ProductService,
    private storage: AngularFireStorage,
    public dialogRef: MatDialogRef<ProductModifyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogModify) { }


  ngOnInit() {
    this.getCategorys();
  }

  change() {
    this.categorysFilter =  this.categorys.filter(c => c.typeProduct.name === this.data.product.type);
  }

  getCategorys(): void {
    this.categoryService.get().subscribe(res => {
      this.categorys = res;
      this.types = this.categorys.filter(
        (thing, i, arr) => arr.findIndex(t => t.typeProduct.idType === thing.typeProduct.idType) === i);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  modify(): void {
    const product = this.data.product;
    console.log(product);
    this.productService.put(product).subscribe(p => {
       this.dialog.open(AlertDialogComponent, {
          width: '250px',
          data: { title: 'Resultado Operacion!', message: 'Producto Actualizado..!',
          nameBtnOne: 'Close', nameBtnTwo: 'Aceptar', btnEnable: false}
        });
    });

    this.dialogRef.close();
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
            this.data.product.image = url;
            this.selectImage =  false;
          });
        })

     )
    .subscribe();
  }

}
