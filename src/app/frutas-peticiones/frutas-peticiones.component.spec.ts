import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutasPeticionesComponent } from './frutas-peticiones.component';

describe('FrutasPeticionesComponent', () => {
  let component: FrutasPeticionesComponent;
  let fixture: ComponentFixture<FrutasPeticionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrutasPeticionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrutasPeticionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
