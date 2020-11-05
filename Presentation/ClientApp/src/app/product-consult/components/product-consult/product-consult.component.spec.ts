import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductConsultComponent } from './product-consult.component';

describe('ProductConsultComponent', () => {
  let component: ProductConsultComponent;
  let fixture: ComponentFixture<ProductConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
