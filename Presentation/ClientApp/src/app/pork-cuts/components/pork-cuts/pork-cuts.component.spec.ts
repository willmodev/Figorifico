import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorkCutsComponent } from './pork-cuts.component';

describe('PorkCutsComponent', () => {
  let component: PorkCutsComponent;
  let fixture: ComponentFixture<PorkCutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorkCutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorkCutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
