import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/core/services/product/product.service';
import { Product } from 'src/app/Models/product.model';
import {MatDialog} from '@angular/material';
import { AlertDialogComponent } from '../../../@base/alert-dialog/alert-dialog.component';
import { CategoryService } from 'src/app/core/services/category/category.service';
import { Category } from 'src/app/Models/category.model';
import { Component, OnInit } from '@angular/core';
import { rangeCharacters } from 'src/app/utilities/validators/rangeCharacters';
import { sizeCharacters } from 'src/app/utilities/validators/sizeCharacters';
import { fileTypeValidator } from 'src/app/utilities/validators/fileTypeValidator';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private storage: AngularFireStorage,
    public dialog: MatDialog
  ) { this.downloadURL$ = null}

  product: Product;
  categorys: Category[];
  categorysFilter: Category[] = [];
  types: Category[] = [];
  formGroup: FormGroup;
  uploadPercent: Observable<number>;
  downloadURL$: Observable<string>;
  urlImage: string;


  ngOnInit() {
    this.buildForm();
    this.getCategorys();
  }

  getCategorys(): void {
    this.categoryService.get().subscribe(res => {
      this.categorys = res;
      this.types = this.categorys.filter(
        (thing, i, arr) => arr.findIndex(t => t.typeProduct.idType === thing.typeProduct.idType) === i);
    });
  }
  change() {
    this.categorysFilter =  this.categorys.filter(c => c.typeProduct.name === this.control.type.value);
  }

  private buildForm() {
    this.product = new Product();
    this.product.idProduct = '';
    this.product.type = 'seleccionar...';
    this.product.description = '';
    this.product.image = '';
    this.product.category = 'seleccionar...';

    this.formGroup = this.formBuilder.group({
      idProduct: [
        '',
        {
          validators: [Validators.required, sizeCharacters(4, "string"), Validators.pattern('[a-zA-Z0-9]*')]
        }
      ],
      type : [this.product.type, [Validators.required, this.validatType]],
      salePrice: [
        0,
        {
          validators: [Validators.required, Validators.min(0), Validators.max(99999999)]
        }
      ],
      purchasePrice: [
        0,
        {
          validators: [Validators.required, Validators.min(0), Validators.max(99999999)]
        }
      ],
      quantity: [
        0,
        {
          validators: [Validators.required, Validators.min(1), Validators.max(999)]
        }
      ],
      iva: [
        0,
        {
          validators: [Validators.required, Validators.min(0), Validators.max(100)]
        }
      ],
      description: [
        '',
        {
          validators: [Validators.required, rangeCharacters(15,500)]
        }
      ],
      image: [
        '',
        {
          validators: [Validators.required, fileTypeValidator()]
        }
      ],
      category: [this.product.category, [Validators.required, this.validatCatagory]]
    });
  }


  getErrorIdProduct() {
    var field = this.formGroup.get('idProduct');

    if (field.hasError('required')) {
      return 'El campo codigo es requerido';
    }
    if (field.hasError('pattern')) {
      return 'El campo codigo NO permite espacios entre caracteres y/o caracteres especiales';
    }
    if (field.hasError('sizeCharacters')) {
      return field.getError('sizeCharacters').mensaje;
    }

    return '';
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

  getErrorImage() {
    var field = this.formGroup.get('image');

    if (field.hasError('required')) {
      return 'El campo imagen es requerido';
    }

    if (field.hasError('fileTypeValidator')) {
      return field.getError('fileTypeValidator').mensaje;
    }

    return '';
  }

  private validatType(control: AbstractControl) {
    const type = control.value;
    if (type !== 'seleccionar...' ) { return null; }
    return  {validateType: true, messageType: 'debe seleccionar una tipo'};
  }
  private validatCatagory(control: AbstractControl) {
    const category = control.value;
    if (category !== 'seleccionar...' ) { return null; }
    return  {validateCategory: true, messageCategory: 'debe seleccionar una catagoria'};
  }

  get control() {
    return this.formGroup.controls;
  }

  add() {
    if (this.formGroup.invalid) { return; }
    this.product = this.formGroup.value;
    console.log(this.product);
    this.product.image = this.urlImage;
  
   this.productService.post(this.product).subscribe(p => {
     if (p != null) {
      this.dialog.open(AlertDialogComponent, {
        width: '250px',
        data: { title: 'Resultado Operacion!', message: 'Producto Creado..!',
                  nameBtnOne: 'Close', nameBtnTwo: 'Aceptar', btnEnable: false}
      });
      this.cleanForm();
     }
     this.product = p;
     console.log(p);

    });
    
  }

  cleanForm() {
    this.formGroup.reset();
    this.uploadPercent = null;
    this.downloadURL$ = null;
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = file.name;
    const fileRef = this.storage.ref(filePath);

    //console.log(file);

    //console.log(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    this.formGroup.get('image').setValue(filePath);
    // get notified when the download URL is available

    if (this.formGroup.get('image').valid) {
      task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL$ = fileRef.getDownloadURL();
          this.downloadURL$.subscribe(url => {
            console.log(url);
            this.urlImage = url;
          });
        })

      ).subscribe();
    } else {
      this.downloadURL$ = null;
    }


  }


}
