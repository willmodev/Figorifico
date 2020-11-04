import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/core/services/product/product.service';
import { Product } from 'src/app/Models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService,
    private formBuilder: FormBuilder,
    private storage: AngularFireStorage) { }
  product: Product;
  formGroup: FormGroup;
  uploadPercent: Observable<number>;
  // downloadURL: Observable<string>;
  downloadURL$: Observable<string>;

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.product = new Product();
    this.product.idProduct = '';
    this.product.title = 'seleccionar...';
    this.product.purchasePrice = 0;
    this.product.salePrice = 0;
    this.product.suggestedPrice = 0;
    this.product.quantity = 0;
    this.product.iva = 0;
    this.product.description = '';
    this.product.image = '';
    this.product.category = 'seleccionar...';

    this.formGroup = this.formBuilder.group({
      idProduct: [this.product.idProduct, Validators.required],
      title : [this.product.title, Validators.required],
      purchasePrice: [this.product.purchasePrice, Validators.required],
      salePrice: [this.product.salePrice, Validators.required],
      suggestedPrice: [this.product.suggestedPrice, Validators.required],
      quantity: [this.product.quantity, Validators.required],
      iva: [this.product.iva, Validators.required],
      description: [this.product.description, Validators.required],
      image: [this.product.image, Validators.required],
      category: [this.product.category, Validators.required]
    });
  }

  add() {
    this.product = this.formGroup.value;
    this.productService.post(this.product).subscribe(p => {
      console.log(p);
      this.product = p;
      alert('producto guardadi');
    });
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = file.name;
    const fileRef = this.storage.ref(filePath);
    console.log(file);
    console.log(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => {
          this.downloadURL$ = fileRef.getDownloadURL();
          this.downloadURL$.subscribe(url => {
            console.log(url);
            this.formGroup.get('image').setValue(url);
          });
        })

     )
    .subscribe();
  }

}
