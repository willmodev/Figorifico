import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeefCutsComponent } from './beef-cuts.component';

describe('BeefCutsComponent', () => {
  let component: BeefCutsComponent;
  let fixture: ComponentFixture<BeefCutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeefCutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeefCutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
