import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenCutsComponent } from './chicken-cuts.component';

describe('ChickenCutsComponent', () => {
  let component: ChickenCutsComponent;
  let fixture: ComponentFixture<ChickenCutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChickenCutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChickenCutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
