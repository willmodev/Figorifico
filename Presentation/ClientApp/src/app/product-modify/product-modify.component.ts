import { Component, OnInit, Inject } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AlertDialogComponent } from '../@base/alert-dialog/alert-dialog.component';
import { CategoryService } from '../core/services/category/category.service';
import { ProductService } from '../core/services/product/product.service';
import { Category } from '../Models/category.model';
import { DialogModify } from '../Models/DialogModify';
import { Product } from 'src/app/Models/product.model';
import { rangeCharacters } from '../utilities/validators/rangeCharacters';


@Component({
  selector: 'app-product-modify',
  templateUrl: './product-modify.component.html',
  styleUrls: ['./product-modify.component.css']
})
export class ProductModifyComponent implements OnInit {
  formGroup: FormGroup;
  product: Product;
  uploadPercent: Observable<number>;
  downloadURL$: Observable<string>;
  selectImage = true;

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private productService: ProductService,
    public dialogRef: MatDialogRef<ProductModifyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogModify
  ) { this.buildForm(); }

  
  ngOnInit() {
    
  }

  private buildForm() {
    this.product = new Product();
    this.product = this.data.product;
    console.log(this.product);

    this.formGroup = this.formBuilder.group({
      salePrice: [
        this.product.salePrice,
        {
          validators: [Validators.required, Validators.min(0), Validators.max(99999999)]
        }
      ],
      purchasePrice: [
        this.product.purchasePrice,
        {
          validators: [Validators.required, Validators.min(0), Validators.max(99999999)]
        }
      ],
      quantity: [
        this.product.quantity,
        {
          validators: [Validators.required, Validators.min(1), Validators.max(999)]
        }
      ],
      iva: [
        this.product.iva,
        {
          validators: [Validators.required, Validators.min(0), Validators.max(100)]
        }
      ],
      description: [
        this.product.description,
        {
          validators: [Validators.required, rangeCharacters(15, 500)]
        }
      ],

    });
  }

  getErrorSalePrice() {
    var file = this.formGroup.get('salePrice');

    if (file.hasError('required')) {
      return 'El campo precio de venta es requerido';
    }

    if (file.hasError('min')) {
      return 'El campo precio de venta NO puede ser menor a 0';
    }
    if (file.hasError('max')) {
      return 'El campo precio de venta NO puede ser mayor a 99999999';
    }

    return '';
  }

  getErrorPurchasePrice() {
    var file = this.formGroup.get('purchasePrice');

    if (file.hasError('required')) {
      return 'El campo precio de compra es requerido';
    }

    if (file.hasError('min')) {
      return 'El campo precio de compra NO puede ser menor a 0';
    }
    if (file.hasError('max')) {
      return 'El campo precio de compra NO puede ser mayor a 99999999';
    }

    return '';
  }

  getErrorQuantity() {
    var file = this.formGroup.get('quantity');

    if (file.hasError('required')) {
      return 'El campo cantidad es requerido';
    }

    if (file.hasError('min')) {
      return 'El campo cantidad NO puede ser menor a 1';
    }
    if (file.hasError('max')) {
      return 'El campo cantidad NO puede ser mayor a 999';
    }

    return '';
  }

  getErrorIva() {
    var file = this.formGroup.get('iva');

    if (file.hasError('required')) {
      return 'El campo iva es requerido';
    }

    if (file.hasError('min')) {
      return 'El campo iva NO puede ser menor a 0';
    }
    if (file.hasError('max')) {
      return 'El campo iva NO puede ser mayor a 100';
    }

    return '';
  }

  getErrorDescription() {
    var field = this.formGroup.get('description');

    if (field.hasError('required')) {
      return 'El campo descripcion es requerido';
    }

    if (field.hasError('rangeCharacters')) {
      return field.getError('rangeCharacters').mensaje;
    }

    return '';
  }


  get control() {
    return this.formGroup.controls;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  missingFields() {
    this.product = this.formGroup.value;
    this.product.category = this.data.product.category;
    this.product.idProduct = this.data.product.idProduct;
    this.product.image = this.data.product.image;
    this.product.type = this.data.product.type;
  }

  modify(): void {
    if (this.formGroup.invalid) { return; }
    
    this.missingFields();
    console.log(this.product);
    this.productService.put(this.product).subscribe(p => {
       this.dialog.open(AlertDialogComponent, {
          width: '350px',
          data: { title: 'Resultado Operacion!', message: 'Producto Actualizado..!',
          nameBtnOne: 'Close', nameBtnTwo: 'Aceptar', btnEnable: false}
        });
    });

    this.dialogRef.close();
  }

}
