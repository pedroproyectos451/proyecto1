import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpiezasPeticionesComponent } from './limpiezas-peticiones.component';

describe('LimpiezasPeticionesComponent', () => {
  let component: LimpiezasPeticionesComponent;
  let fixture: ComponentFixture<LimpiezasPeticionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimpiezasPeticionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimpiezasPeticionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
